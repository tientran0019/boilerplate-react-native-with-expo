/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-03-27 00:49:34
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';

import { Pressable } from 'react-native';
import { useSelector } from 'react-redux';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';

import getTheme from 'src/themes';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
const TabBarIcon = (props) => {
	return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
};

const TabLayout = () => {
	const settings = useSelector(state => state.settings);
	const theme = getTheme(settings.theme);

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: theme.brand_primary,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Tab One',
					tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
					headerRight: () => (
						<Link href="/modal" asChild>
							<Pressable>
								{({ pressed }) => (
									<FontAwesome
										name="info-circle"
										size={25}
										color={theme.color_text_base}
										style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
									/>
								)}
							</Pressable>
						</Link>
					),
				}}
			/>
			<Tabs.Screen
				name="two"
				options={{
					title: 'Tab Two',
					tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
				}}
			/>
		</Tabs>
	);
};

TabLayout.propTypes = propTypes;

TabLayout.defaultProps = defaultProps;

export default TabLayout;
