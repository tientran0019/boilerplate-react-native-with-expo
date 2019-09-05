import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import store from 'src/redux/store';

import AppNavigator from 'src/navigation/AppNavigator';

function handleLoadingError(error) {
	// In this case, you might want to report the error to your error reporting
	// service, for example Sentry
	console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
	setLoadingComplete(true);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});

async function loadResourcesAsync() {
	await Promise.all([
		Asset.loadAsync([
			require('./src/assets/images/robot-dev.png'),
			require('./src/assets/images/robot-prod.png'),
		]),
		Font.loadAsync({
			// This is the font that we are using for our tab bar
			...Ionicons.font,
			// We include SpaceMono because we use it in HomeScreen.js. Feel free to
			// remove this if you are not using it in your app
			'space-mono': require('./src/assets/fonts/SpaceMono-Regular.ttf'),
		}),
	]);
}

export default function App(props) {
	const [isLoadingComplete, setLoadingComplete] = useState(false);

	if (!isLoadingComplete && !props.skipLoadingScreen) {
		return (
			<AppLoading
				startAsync={loadResourcesAsync}
				onError={handleLoadingError}
				onFinish={() => handleFinishLoading(setLoadingComplete)}
			/>
		);
	}
	return (
		<Provider store={store}>
			<View style={styles.container}>
				{Platform.OS === 'ios' && <StatusBar barStyle="default" />}
				<AppNavigator />
			</View>
		</Provider>
	);
}

App.propTypes = {
	skipLoadingScreen: PropTypes.bool,
};

App.defaultProps = {
	skipLoadingScreen: false,
};
