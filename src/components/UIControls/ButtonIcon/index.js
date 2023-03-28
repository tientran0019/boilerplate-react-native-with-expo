/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */
/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-03-27 14:40:43
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@zellosoft/antd-react-native';
import useTheme from 'src/hooks/useTheme';

import { Platform } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import View from 'src/components/UIDisplay/View';

// import COLORS from 'src/constants/colors';

const propTypes = {
	size: PropTypes.string,
	type: PropTypes.string,
	children: PropTypes.any,
	title: PropTypes.any,
	style: PropTypes.object,
	round: PropTypes.bool,
};

const defaultProps = {
	size: 'large',
	type: 'default',
	children: '',
	title: null,
	style: {},
	round: false,
};

const ButtonIcon = (props) => {
	const { children, style, round, title, size, type, ...restProps } = props;

	const theme = useTheme();

	const width = React.useMemo(() => {
		return size === 'small' ? theme.button_height_sm : theme.button_height;
	}, [size, theme.button_height, theme.button_height_sm]);

	const radius = round ? (width / 2) : (size === 'small' ? theme.radius_sm : theme.radius_md);

	const Inner = React.useMemo(() => {
		if (type === 'ghost') {
			return (
				<Button
					{...restProps}
					style={{
						borderRadius: radius,
						...style,
					}}
					styles={{
						defaultRawText: {
							...Platform.select({
								android: {
									flexDirection: 'row',
									alignContent: 'center',
									justifyContent: 'center',
									textAlign: 'center',
									marginBottom: 8,
									height: width,
									lineHeight: width,
								},
								ios: {
									// marginTop: 5,
								},
							}),
						},
						wrapperStyle: {
							alignContent: 'center',
							justifyContent: 'center',
							padding: 0,
							borderRadius: radius,
							borderWidth: 0,
							flexDirection: 'row',
						},
					}}
					type={type}
					size={size}
				>
					{
						React.isValidElement(children) &&
						React.cloneElement(children, {
							style: {
								...children.props.style || {},
							},
							size: size === 'small' ? 16 : 22,
						})
					}
				</Button>
			);
		}

		if (type === 'gradient') {
			return (
				<View
					style={{
						height: width,
						width,
						borderRadius: radius + 2,
						...(size === 'small' ? {
							shadowRadius: 2,
							shadowOpacity: 1,
							shadowOffset: {
								height: 2,
								width: 2,
							},
						} : {}),
					}}
				>
					<LinearGradient
						colors={theme.gradient_bg || []}
						style={{
							height: width,
							justifyContent: 'center',
							borderRadius: style.borderRadius || radius,
						}}
					>
						<Button
							type="primary"
							{...restProps}
							size={size}
							style={{
								borderColor: 'transparent',
								backgroundColor: 'transparent',
								borderWidth: 0,
								borderRadius: radius,
							}}
							styles={{
								defaultRaw: {
									paddingLeft: 0,
									paddingRight: 0,
									flexDirection: 'row',
									alignContent: 'center',
									justifyContent: 'center',
									textAlign: 'center',
								},
								defaultRawText: {
									...Platform.select({
										android: {
											flexDirection: 'row',
											alignContent: 'center',
											justifyContent: 'center',
											textAlign: 'center',
											marginBottom: 8,
											height: width,
											lineHeight: width,
										},
										ios: {
											// marginTop: 5,
										},
									}),
								},
								wrapperStyle: {
									alignContent: 'center',
									justifyContent: 'center',
									padding: 0,
									borderRadius: radius,
									borderWidth: 0,
									flexDirection: 'row',
								},
							}}
						>
							{
								React.isValidElement(children) &&
								React.cloneElement(children, {
									style: {
										color: theme.color_text_base_inverse,
										...children.props.style || {},
									},
									color: theme.color_text_base_inverse,
									size: size === 'small' ? 16 : 22,
								})
							}
						</Button>
					</LinearGradient>
				</View>
			);
		}

		return (
			<View
				style={{
					height: width,
					width,
					// backgroundColor: '#2B1B42', // '#F4F4F4',
					borderRadius: radius + 2,
					...(size === 'small' ? {
						shadowRadius: 2,
						shadowOpacity: 1,
						shadowOffset: {
							height: 2,
							width: 2,
						},
					} : {}),
				}}
			>
				<Button
					{...restProps}
					type={type}
					size={size}
					style={{
						borderColor: 'transparent',
						borderWidth: 0,
						borderRadius: radius,
					}}
					styles={{
						defaultRawText: {
							...Platform.select({
								android: {
									flexDirection: 'row',
									alignContent: 'center',
									justifyContent: 'center',
									textAlign: 'center',
									marginBottom: 8,
									height: width,
									lineHeight: width,
								},
								ios: {
									// marginTop: 5,
								},
							}),
						},
						wrapperStyle: {
							alignContent: 'center',
							justifyContent: 'center',
							padding: 0,
							borderRadius: radius,
							borderWidth: 0,
							flexDirection: 'row',
						},
					}}
				>
					{
						React.isValidElement(children) &&
						React.cloneElement(children, {
							style: {
								...children.props.style || {},
							},
							size: size === 'small' ? 16 : 22,
						})
					}
				</Button>
			</View>
		);
	}, [children, restProps, size, style, theme.color_text_base_inverse, theme.gradient_bg, radius, type, width]);

	return (
		<View
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				...style,
			}}
		>
			{Inner}
			{
				title ?
					<View
						style={{
							textAlign: 'center',
							justifyContent: 'center',
							alignItems: 'center',
							paddingTop: 10,
							marginLeft: 5,
							width: '100%',
						}}
						type={size === 'small' ? 'note' : 'normal'}
					>
						{title}
					</View> :
					null
			}
		</View>
	);
};

ButtonIcon.propTypes = propTypes;

ButtonIcon.defaultProps = defaultProps;

export default ButtonIcon;
