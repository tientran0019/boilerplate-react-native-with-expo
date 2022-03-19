/* eslint-disable react/prop-types */
/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-12-26 11:13:57
*------------------------------------------------------- */

import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { navigationRef, isReadyRef } from 'src/navigation/navigation';

import NotFoundScreen from 'src/screens/NotFoundScreen';
import ModalScreen from 'src/screens/ModalScreen';

import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

import screenOptionsDefault from './configs';

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createNativeStackNavigator();

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
const Navigation = ({ colorScheme, loggedIn }) => {
	React.useEffect(() => {
		isReadyRef.current = true;

		return () => {
			isReadyRef.current = false;
		};
	}, []);

	return (
		<NavigationContainer
			ref={navigationRef}
			linking={LinkingConfiguration}
			theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
			onReady={() => {
				isReadyRef.current = true;
			}}
		>
			<Stack.Navigator
				screenOptions={{
					...screenOptionsDefault,
					headerShown: false,
				}}
			>
				{
					// !loggedIn ?
					// 	<>
					// 		<Stack.Screen name="Login" component={LoginScreen} />
					// 	</> :
					// 	<>
					// 		<Stack.Screen name="Root" component={BottomTabNavigator} />
					// 	</>
				}
				<Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
				<Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
				<Stack.Group screenOptions={{ presentation: 'modal' }}>
					<Stack.Screen name="Modal" component={ModalScreen} />
				</Stack.Group>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;
