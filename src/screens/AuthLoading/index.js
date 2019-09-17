/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2019-09-06 11:42:55
*------------------------------------------------------- */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AuthStorage from 'src/utils/AuthStorage';

import {
	ActivityIndicator,
	StatusBar,
	StyleSheet,
	View,
} from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default class AuthLoadingScreen extends Component {
	static propTypes = {
		navigation: PropTypes.object.isRequired,
	};

	static defaultProps = {};

	constructor() {
		super();
		this._bootstrapAsync();
	}

	// Fetch the token from storage then navigate to our appropriate place
	_bootstrapAsync = async () => {
		await AuthStorage.loggedIn;

		// This will switch to the App screen or Auth screen and this loading
		// screen will be unmounted and thrown away.
		this.props.navigation.navigate(await AuthStorage.loggedIn ? 'Main' : 'Auth');
	};

	// Render any loading content that you like here
	render() {
		return (
			<View style={styles.container}>
				<ActivityIndicator />
				<StatusBar barStyle="light-content" />
			</View>
		);
	}
}
