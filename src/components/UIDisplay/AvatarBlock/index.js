/* eslint-disable no-nested-ternary */
/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-03-29 14:29:48
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Touchable from 'src/components/UIControls/Touchable';
import Avatar from 'src/components/UIDisplay/Avatar';
import Text from 'src/components/UIDisplay/Text';

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
					marginLeft: 15,
				}}
			>
				<Text
					type="h2"
					numberOfLines={1}
				>
					{name}
				</Text>
				<Text
					type="note"
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
