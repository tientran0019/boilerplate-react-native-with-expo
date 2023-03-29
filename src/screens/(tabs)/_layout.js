/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-03-27 00:49:34
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';

import { Pressable, Platform } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import useTheme from 'src/hooks/useTheme';
// import useNavConfigs from 'src/hooks/useNavConfigs';
import withRequiredAuthentication from 'src/HOCs/withRequiredAuthentication';

import ToggleTheme from 'src/components/Layout/ToggleTheme';
import Logo from 'src/components/Layout/Logo';
import View from 'src/components/UIDisplay/View';
// import Icon from 'src/components/UIDisplay/Icon';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
const TabLayout = () => {
	const theme = useTheme();
	// const configs = useNavConfigs();

	return (
		<Tabs
			screenOptions={{
				// ...configs,
				headerShown: true,
				lazy: true,
				unmountOnBlur: true,
				headerLeft: () => {
					return (
						<Logo
							style={{
								width: 24,
								height: 24,
								marginBottom: 5,
								marginLeft: 15,
							}}
							fullText={false}
						/>
					);
				},
				// headerTitle: () => null,
				headerRight: () => {
					return (
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								// marginTop: 10,
								marginRight: 15,
							}}
						>
							<ToggleTheme size="small" />
							<Link href="/modal" asChild>
								<Pressable>
									{({ pressed }) => (
										<Ionicons
											name="information-circle-outline"
											size={24}
											color={theme.color_text_base}
											style={{ marginLeft: 10, opacity: pressed ? 0.5 : 1 }}
										/>
									)}
								</Pressable>
							</Link>
						</View>
					);
				},
				tabBarActiveTintColor: theme.brand_primary,
				tabBarStyle: {
					// borderTopEndRadius: 20,
					// borderTopStartRadius: 20,
					backgroundColor: theme.fill_base,
					// paddingTop: 10,
					// borderWidth: 1,
					borderTopColor: theme.name === 'dark' ? '#3e4667' : theme.border_color_base,
					// borderRightColor: theme.name === 'dark' ? '#3e4667' : theme.border_color_base,
					// borderLeftColor: theme.name === 'dark' ? '#3e4667' : theme.border_color_base,
					// marginBottom: -2,
					// marginRight: -2,
					// marginLeft: -2,
					// marginTop: -2,
					...Platform.select({
						android: {
							elevation: 6,
							// height: 70,
							// paddingBottom: 15,
						},
						default: {
							shadowColor: theme.name === 'dark' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(111, 207, 151, 0.3)',
							shadowOffset: { height: -4, width: -4 },
							shadowOpacity: 0.6,
							shadowRadius: 4,
						},
					}),
				},
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Home',
					tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
				}}
			/>
			<Tabs.Screen
				name="two"
				options={{
					title: 'Tab Two',
					tabBarIcon: ({ color }) => <Ionicons name="code" size={24} color={color} />,
				}}
			/>
			<Tabs.Screen
				name="links"
				options={{
					title: 'Links',
					tabBarIcon: ({ color }) => <Ionicons name="link" size={24} color={color} />,
				}}
			/>
			<Tabs.Screen
				name="settings"
				options={{
					title: 'Settings',
					tabBarIcon: ({ color }) => <Ionicons name="ios-settings-outline" size={24} color={color} />,
				}}
			/>
		</Tabs>
	);
};

TabLayout.propTypes = propTypes;

TabLayout.defaultProps = defaultProps;

export default withRequiredAuthentication(TabLayout, { loginIsRequired: true });
