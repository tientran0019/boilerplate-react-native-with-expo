/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email ductienas@gmail.com
* Phone 0972970075
*
* Created: 2019-01-30 11:25:43
*------------------------------------------------------- */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import { StyleSheet, StatusBar, View, UIManager } from 'react-native';

import { Font, AppLoading } from 'expo';

import store from 'src/redux/store';

import Colors from 'src/constants/Colors';

import RootNavigation from 'src/routers/RootNavigation';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});

export default class App extends Component {
	static propTypes = {
		skipLoadingScreen: PropTypes.bool,
	}

	static defaultProps = {
		skipLoadingScreen: false,
	}

	state = {
		isReady: false,
	}

	componentDidMount() {
		console.disableYellowBox = true;
		// eslint-disable-next-line no-unused-expressions
		UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
	}

	_loadResourcesAsync = async () => Promise.all([
		// TODO: Remove unudsed fonts to speed up application loading
		Font.loadAsync({
			'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
			'Lato-BoldItalic': require('./assets/fonts/Lato-BoldItalic.ttf'),
			'Lato-Italic': require('./assets/fonts/Lato-Italic.ttf'),
			'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
			'Lato-Medium': require('./assets/fonts/Lato-Medium.ttf'),
			'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
			'Lato-Semibold': require('./assets/fonts/Lato-Semibold.ttf'),
			'Lato-Thin': require('./assets/fonts/Lato-Thin.ttf'),
		}),
	]);

	_handleLoadingError = (error) => {
		// In this case, you might want to report the error to your error
		// reporting service, for example Sentry
		console.warn(error);
	};

	_handleFinishLoading = () => {
		this.setState({ isReady: true });
	};

	render() {
		const { isReady } = this.state;
		const { skipLoadingScreen } = this.props;

		if (!isReady && !skipLoadingScreen) {
			return (
				<AppLoading
					startAsync={this._loadResourcesAsync}
					onError={this._handleLoadingError}
					onFinish={this._handleFinishLoading}
				/>
			);
		}

		return (
			<Provider store={store}>
				<View style={styles.container}>
					<StatusBar barStyle="light-content" backgroundColor={Colors.watermelon} />
					<RootNavigation />
				</View>
			</Provider>
		);
	}
}
