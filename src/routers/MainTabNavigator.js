/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email ductienas@gmail.com
* Phone 0972970075
*
* Created: 2019-01-30 17:49:36
*------------------------------------------------------- */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import { Icon } from 'react-native-elements';

import { Colors, Fonts } from 'src/constants';

import Screen1 from 'src/screens/Screen1';
import Screen2 from 'src/screens/Screen2';
import Screen3 from 'src/screens/Screen3';
import Screen4 from 'src/screens/Screen4';

const styles = StyleSheet.create({
	tabBarItemContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		borderBottomWidth: 2,
		borderBottomColor: Colors.white,
		paddingHorizontal: 10,
	},
	tabBarIcon: {
		width: 23,
		height: 23,
	},
	tabBarIconFocused: {
		tintColor: Colors.primary,
	},
	headerContainer: {
		height: 70,
		alignItems: 'center',
		justifyContent: 'flex-end',
		paddingBottom: 10,
	},
	headerImage: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		height: 70,
	},
	headerCaption: {
		fontFamily: Fonts.primaryRegular,
		color: Colors.white,
		fontSize: 18,
	},
});

export default createBottomTabNavigator(
	{
		Screen1: {
			screen: Screen1,
		},
		Screen2: {
			screen: Screen2,
		},
		Screen3: {
			screen: Screen3,
		},
		Screen4: {
			screen: Screen4,
		},
	},
	{
		initialRouteName: 'Screen1',
		defaultNavigationOptions: ({ navigation }) => ({
			// eslint-disable-next-line react/prop-types
			tabBarIcon: ({ focused }) => {
				const { routeName } = navigation.state;
				let iconSource;
				switch (routeName) {
					case 'Screen1':
						iconSource = 'home';
						break;
					case 'Screen2':
						iconSource = 'explore';
						break;
					case 'Screen3':
						iconSource = 'grade';
						break;
					case 'Screen4':
						iconSource = 'announcement';
						break;
					default:
						iconSource = 'search';
				}
				return (
					<View style={styles.tabBarItemContainer}>
						<Icon
							name={iconSource}
							color={Colors.primary}
						/>
					</View>
				);
			},
		}),
		tabBarPosition: 'bottom',
		animationEnabled: false,
		swipeEnabled: true,
		tabBarOptions: {
			showLabel: true,
			style: {
				backgroundColor: Colors.white,
				borderTopWidth: 0.5,
				borderTopColor: '#d6d6d6',
			},
			labelStyle: {
				color: Colors.grey,
			},
		},
	},
);
