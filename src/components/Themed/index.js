/* eslint-disable react/prop-types */
/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */
import React from 'react';

import { Text as DefaultText, View as DefaultView } from 'react-native';

import Colors from 'src/constants/colors';
import useColorScheme from 'src/hooks/useColorScheme';

export function useThemeColor(
	props,
	colorName,
) {
	const theme = useColorScheme();
	const colorFromProps = props[theme];

	if (colorFromProps) {
		return colorFromProps;
	}
	return Colors[theme]?.[colorName];
}

export const Text = (props) => {
	const { style, lightColor, darkColor, ...otherProps } = props;

	const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

	return <DefaultText style={[{ color }, style]} {...otherProps} />;
};

export const View = (props) => {
	const { style, lightColor, darkColor, ...otherProps } = props;

	const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

	return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
};
