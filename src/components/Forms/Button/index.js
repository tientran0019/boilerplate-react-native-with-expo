/* eslint-disable no-nested-ternary */
/* eslint-disable react/require-default-props */
/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-04-08 16:55:26
*------------------------------------------------------- */

import PropTypes from 'prop-types';
import React from 'react';
import {
	View,
	Text,
	TouchableNativeFeedback,
	TouchableOpacity,
	ActivityIndicator,
	Platform,
	StyleSheet,
} from 'react-native';

import Color from 'color';
import COLORS from 'src/constants/colors';
import BOX_SHADOW from 'src/constants/box-shadow';

const defaultLoadingProps = (type) => ({
	color: type === 'solid' ? COLORS.primaryContrast : COLORS.primary,
	size: 'small',
});

const colorsBg = {
	'default': '#fff',
	'danger': COLORS.errorBackground,
	'success': COLORS.successBackground,
	'primary': COLORS.primary,
};

const colorsText = {
	'default': 'gray',
	'danger': COLORS.errorText,
	'success': COLORS.successText,
	'primary': COLORS.primaryContrast,
};

const colorsBorder = {
	'default': 'gray',
	'danger': COLORS.errorBackground,
	'success': COLORS.successBackground,
	'primary': COLORS.primary,
};

const styles = {
	button: (type, block, size, color) => ({
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 4,
		backgroundColor: type === 'solid' ? colorsBg[color] : 'transparent',
		paddingRight: size === 'small' ? 15 : 20,
		paddingLeft: size === 'small' ? 15 : 20,
		height: size === 'small' ? 32 : 50,
		borderWidth: type === 'outline' ? StyleSheet.hairlineWidth : 0,
		borderColor: colorsBorder[color],
		...(block ? { width: '100%' } : {}),
	}),
	container: {
		borderRadius: 4,
		alignSelf: 'flex-start',
	},
	disabled: (type) => ({
		...(type === 'solid' ? { backgroundColor: Color(COLORS.primary).fade(0.6).string() } : { borderColor: COLORS.gray3 }),
	}),
	disabledText: (type) => ({
		color: type === 'solid' ? COLORS.primaryContrast : COLORS.gray3,
	}),
	text: (type, size, color) => ({
		color: type === 'solid' ? colorsText[color] : type === 'clear' ? colorsBorder[color] : COLORS.gray2,
		fontSize: size === 'small' ? 14 : 16,
		textAlign: 'center',
		// paddingTop: 1,
		// paddingBottom: 1,
		// fontFamily: 'SF-Pro-Text-Regular',
		lineHeight: size === 'small' ? 20 : 22,
	}),
	iconContainer: {
		marginHorizontal: 5,
	},
	raised: (type) => (type !== 'clear' ? {
		...BOX_SHADOW.button,
	} : {}),
	loading: {
		marginVertical: 2,
	},
};

const Button = (props) => {
	const {
		TouchableComponent,
		color,
		style,
		onPress,
		innerStyle,
		type,
		size,
		loading,
		loadingStyle,
		loadingProps: passedLoadingProps,
		children,
		textProps,
		textStyle: passedTextStyle,
		icon,
		iconContainerStyle,
		iconRight,
		disabled,
		disabledStyle,
		disabledTextStyle,
		linearGradientProps,
		ViewComponent = !disabled && linearGradientProps && global.Expo
			? global.Expo.LinearGradient
			: View,
		block,
		...attributes
	} = props;

	const textStyle = StyleSheet.flatten([
		styles.text(type, size, color),
		passedTextStyle,
		disabled && styles.disabledText(type),
		disabled && disabledTextStyle,
	]);

	const background =
		Platform.OS === 'android' && Platform.Version >= 21
			? TouchableNativeFeedback.Ripple(
				Color(textStyle.color)
					.alpha(0.32)
					.rgb()
					.string(),
				false,
			)
			: undefined;

	const loadingProps = {
		...defaultLoadingProps(type),
		...passedLoadingProps,
	};

	const accessibilityStates = [
		...(disabled ? ['disabled'] : []),
		...(loading ? ['busy'] : []),
	];

	return (
		<View
			style={StyleSheet.flatten([
				styles.container,
				{
					borderRadius: innerStyle.borderRadius || styles.container.borderRadius,
					...(block ? { width: '100%' } : {}),
				},
				style,
				!disabled ? styles.raised(type) : {},
			])}
		>
			<TouchableComponent
				onPress={loading ? f => f : onPress}
				delayPressIn={0}
				activeOpacity={0.3}
				accessibilityRole="button"
				accessibilityStates={accessibilityStates}
				disabled={disabled}
				background={background}
				{...attributes}
			>
				<ViewComponent
					{...linearGradientProps}
					style={StyleSheet.flatten([
						styles.button(type, block, size, color),
						innerStyle,
						disabled && styles.disabled(type),
						disabled && disabledStyle,
					])}
				>
					{loading && (
						<ActivityIndicator
							style={StyleSheet.flatten([styles.loading, loadingStyle])}
							color={loadingProps.color}
							size={loadingProps.size}
							{...loadingProps}
						/>
					)}

					{/* {!loading &&
							icon &&
							!iconRight &&
							renderNode(Icon, icon, {
								style: StyleSheet.flatten([
									styles.iconContainer,
									iconContainerStyle,
								]),
							})} */}

					{!loading && !!children && (
						<Text style={textStyle} {...textProps}>
							{children}
						</Text>
					)}

					{/* {!loading &&
							icon &&
							iconRight &&
							renderNode(Icon, icon, {
								style: StyleSheet.flatten([
									styles.iconContainer,
									iconContainerStyle,
								]),
							})} */}
				</ViewComponent>
			</TouchableComponent>
		</View>
	);
};

Button.propTypes = {
	children: PropTypes.any,
	textStyle: Text.propTypes.style,
	textProps: PropTypes.object,
	innerStyle: PropTypes.object,
	type: PropTypes.oneOf(['solid', 'clear', 'outline']),
	size: PropTypes.oneOf(['default', 'small']),
	color: PropTypes.oneOf(['default', 'danger', 'success', 'primary']),
	loading: PropTypes.bool,
	loadingStyle: PropTypes.object,
	loadingProps: PropTypes.object,
	onPress: PropTypes.func,
	style: PropTypes.object,
	icon: PropTypes.node,
	iconContainerStyle: PropTypes.object,
	iconRight: PropTypes.bool,
	linearGradientProps: PropTypes.object,
	TouchableComponent: PropTypes.elementType,
	ViewComponent: PropTypes.elementType,
	disabled: PropTypes.bool,
	disabledStyle: PropTypes.object,
	disabledTextStyle: Text.propTypes.style,
	block: PropTypes.bool,
};

Button.defaultProps = {
	children: '',
	iconRight: false,
	TouchableComponent: Platform.select({
		android: TouchableNativeFeedback,
		default: TouchableOpacity,
	}),
	onPress: () => console.log('Please attach a method to this component'),
	type: 'solid',
	size: 'default',
	color: 'default',
	innerStyle: {
		borderRadius: 4,
	},
	disabled: false,
	loading: false,
	block: true,
};

export default Button;
