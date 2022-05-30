import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import Text from 'src/components/UIDisplay/Text';
import View from 'src/components/UIDisplay/View';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
});

const ModalScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Modal</Text>
			<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

			{/* Use a light status bar on iOS to account for the black space above the modal */}
			<StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
		</View>
	);
};

export default ModalScreen;
