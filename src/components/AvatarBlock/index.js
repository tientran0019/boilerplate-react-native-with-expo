/* eslint-disable no-nested-ternary */
/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-04-10 12:02:09
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';

import COLORS from 'src/constants/colors';

import { useNavigation } from '@react-navigation/native';

import Touchable from 'src/components/Touchable';
import Avatar from 'src/components/Avatar';
import Text from 'src/components/Text';

const propTypes = {
	style: PropTypes.object,
	size: PropTypes.number,
	image: PropTypes.string,
	name: PropTypes.string,
	date: PropTypes.string,
	email: PropTypes.string,
	onPress: PropTypes.func,
	touchable: PropTypes.bool,
};

const defaultProps = {
	style: {},
	size: 32,
	image: '',
	name: '',
	date: '',
	email: '',
	onPress: null,
	touchable: false,
};

const AvatarBlock = (props) => {
	const { style, size, image, name, date, email, touchable, onPress } = props;

	const navigation = useNavigation();

	const TouchableCpn = touchable ? Touchable : View;

	return (
		<TouchableCpn
			onPress={touchable ? (onPress || (() => navigation.navigate('Profile'))) : f => f}
			style={[
				style,
				{
					flexDirection: 'row',
					alignItems: 'center',
				},
			]}
		>
			<Avatar
				size={size}
				image={image}
				name={name}
			/>
			<View
				style={{
					flex: 1,
					marginLeft: 5,
				}}
			>
				<Text
					type="heading-6-sb"
					style={{
						fontSize: size * 0.4375,
						lineHeight: size * 0.625,
					}}
					numberOfLines={1}
				>
					{name}
				</Text>
				<Text
					type="small-text"
					style={{
						fontSize: size * 0.3125,
						lineHeight: size * 0.4375,
						color: COLORS.gray3,
					}}
					numberOfLines={1}
				>
					{date || email}
				</Text>
			</View>
		</TouchableCpn>
	);
};

AvatarBlock.propTypes = propTypes;

AvatarBlock.defaultProps = defaultProps;

export default AvatarBlock;
