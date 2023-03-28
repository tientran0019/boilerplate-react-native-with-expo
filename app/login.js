/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-03-27 00:49:34
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';

import { StyleSheet, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import EditScreenInfo from 'src/components/EditScreenInfo';
import Text from 'src/components/UIDisplay/Text';
import View from 'src/components/UIDisplay/View';

import LoginScreen from 'src/screens/LoginScreen';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

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

const Login = (props) => {
	// const {  } = props;

	return (
		<LoginScreen />
	);
};

Login.propTypes = propTypes;

Login.defaultProps = defaultProps;

export default Login;
