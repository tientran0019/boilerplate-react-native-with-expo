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
import { AntDesign } from '@expo/vector-icons';

import COLORS from 'src/constants/colors';
import BOX_SHADOW from 'src/constants/box-shadow';

import Touchable from 'src/components/Touchable';

const propTypes = {
	style: PropTypes.object,
	size: PropTypes.number,
	onPress: PropTypes.func,
};

const defaultProps = {
	style: {},
	size: 50,
	onPress: f => f,
};

const ButtonFloat = (props) => {
	const { style, size, onPress } = props;

	return (
		<View
			style={[
				{
					borderRadius: size / 2,
					backgroundColor: COLORS.primary,
				},
				style,
				{
					width: size,
					height: size,
					alignItems: 'center',
					justifyContent: 'center',
					position: 'absolute',
					bottom: 20,
					right: 20,
					...BOX_SHADOW.button,
					zIndex: 999,
				},
			]}
		>
			<Touchable onPress={onPress}>
				<AntDesign name="plus" size={24} color={COLORS.primaryContrast} />
			</Touchable>
		</View>
	);
};

ButtonFloat.propTypes = propTypes;

ButtonFloat.defaultProps = defaultProps;

export default ButtonFloat;
