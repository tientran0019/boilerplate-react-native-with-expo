/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email ductienas@gmail.com
* Phone 0972970075
*
* Created: 2019-01-30 18:00:44
*------------------------------------------------------- */
import React from 'react';
// import PropTypes from 'prop-types';

import { createAppContainer, createStackNavigator } from 'react-navigation';

import { Colors, Fonts } from 'src/constants';

import Login from 'src/screens/Login';

import MainTabNavigator from './MainTabNavigator';
import NavigationService from './NavigationService';

const RootNavigator = (props) => {
	const stackNavigator = createStackNavigator(
		{
			Main: {
				screen: MainTabNavigator,
			},
			Login: {
				screen: Login,
				navigationOptions: {
					header: null,
				},
			},
		},
		{
			initialRouteName: 'Login',
			defaultNavigationOptions: ({ navigation }) => {
				return {
					titleStyle: {
						fontFamily: Fonts.primaryLight,
					},
					headerStyle: {
						backgroundColor: Colors.primary,
						borderBottomWidth: 0,
					},
					headerTitleStyle: {
						color: Colors.white,
						fontFamily: Fonts.primaryRegular,
					},
					headerTintColor: '#222222',
				};
			},
		},
	);

	const RootStackNavigator = createAppContainer(stackNavigator);

	return (
		<RootStackNavigator
			ref={(v) => {
				if (v) {
					NavigationService.setTopLevelNavigator(v);
				}
			}}
			uriPrefix="/"
		/>
	);
};

RootNavigator.propTypes = {
	// prop: PropTypes.object.isRequired,
};

RootNavigator.defaultProps = {
	// prop: {},
};

export default RootNavigator;
