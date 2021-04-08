/* eslint-disable react/prop-types */
/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-04-08 20:51:38
*------------------------------------------------------- */

import React from 'react';
import { MaterialIcons, Feather, AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { colors } from 'src/constants/colors';
import useColorScheme from 'src/hooks/useColorScheme';

import HomeScreen from 'src/screens/HomeScreen';
import LinksScreen from 'src/screens/LinksScreen';
import SettingsScreen from 'src/screens/SettingsScreen';

import screenOptionsDefault from './configs';

const BottomTab = createBottomTabNavigator();

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator();

function HomeNavigator() {
	return (
		<HomeStack.Navigator
			screenOptions={{
				...screenOptionsDefault,
			}}
		>
			<HomeStack.Screen
				name="Home"
				component={HomeScreen}
				options={{
					headerTitle: 'Home',
				}}
			/>
		</HomeStack.Navigator>
	);
}

const LinksStack = createStackNavigator();

function LinksNavigator() {
	return (
		<LinksStack.Navigator
			screenOptions={{
				...screenOptionsDefault,
			}}
		>
			<LinksStack.Screen
				name="Links"
				component={LinksScreen}
			/>
		</LinksStack.Navigator>
	);
}

const SettingsStack = createStackNavigator();

function SettingsNavigator() {
	return (
		<SettingsStack.Navigator
			screenOptions={{
				...screenOptionsDefault,
			}}
		>
			<SettingsStack.Screen
				name="Settings"
				component={SettingsScreen}
				options={{ headerTitle: 'Settings' }}
			/>
		</SettingsStack.Navigator>
	);
}

export default function BottomTabNavigator() {
	const colorScheme = useColorScheme();

	return (
		<BottomTab.Navigator
			initialRouteName="Home"
			tabBarOptions={{
				activeTintColor: colors[colorScheme].primary,
				style: {
					// height: 64,
				},
				tabStyle: {
					paddingBottom: 5,
				},
			}}
			screenOptions={{
				...screenOptionsDefault,
			}}
			lazy
		>
			<BottomTab.Screen
				name="Home"
				component={HomeNavigator}
				options={{
					tabBarIcon: ({ color }) => <AntDesign name="home" size={26} style={{ marginBottom: -3, marginTop: 0 }} color={color} />,
				}}
			/>
			<BottomTab.Screen
				name="Links"
				component={LinksNavigator}
				options={{
					tabBarIcon: ({ color }) => <MaterialIcons name="link" size={28} style={{ marginBottom: -3, marginTop: 0 }} color={color} />,
				}}
			/>
			<BottomTab.Screen
				name="Settings"
				component={SettingsNavigator}
				options={{
					tabBarIcon: ({ color }) => <Feather name="user" size={26} style={{ marginBottom: -3, marginTop: 0 }} color={color} />,
				}}
			/>
		</BottomTab.Navigator>
	);
}
