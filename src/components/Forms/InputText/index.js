/* eslint-disable prefer-const */
/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-04-08 19:35:57
*------------------------------------------------------- */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { TextInput, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import BOX_SHADOW from 'src/constants/box-shadow';
import COLORS from 'src/constants/colors';

const propTypes = {
	style: PropTypes.any,
	icon: PropTypes.string,
	rightIcon: PropTypes.any,
	IconType: PropTypes.any,
	multiline: PropTypes.bool,
	editable: PropTypes.bool,
	error: PropTypes.bool,
	disable: PropTypes.bool,
	onChangeText: PropTypes.func,
	onChange: PropTypes.func,
};

const defaultProps = {
	style: {},
	icon: null,
	IconType: Ionicons,
	multiline: false,
	error: false,
	editable: true,
	disable: false,
	onChangeText: f => f,
	onChange: f => f,
	rightIcon: null,
};

const InputText = forwardRef((props, ref) => {
	let { style, icon, rightIcon, IconType, multiline, editable, onChangeText, onChange, disable, error, ...attr } = props;

	if (disable) {
		editable = false;
	}
	if (onChange) {
		onChangeText = onChange;
	}

	return (
		<View
			style={[
				{
					height: 50,
					width: '100%',
					alignItems: 'center',
				},
				style,
				{
					borderWidth: 0.3,
					borderColor: !error ? COLORS.borderColorComponent : COLORS.errorBackground,
					borderRadius: 4,
					paddingHorizontal: 15,
					flexDirection: 'row',
					backgroundColor: editable ? '#fff' : '#F2F3F5',
					...BOX_SHADOW.component,
				},
				(multiline ? {
					alignItems: 'flex-start',
					padding: 10,
					height: 150,
				} : {}),
			]}
		>
			{
				icon &&
				<View
					style={{
						marginRight: 15,
					}}
				>
					<IconType
						name={icon}
						size={28}
						color="#666"
					/>
				</View>
			}
			<TextInput
				autoCapitalize="none"
				autoCompleteType="off"
				autoCorrect={false}
				returnKeyType="next"
				{...attr}
				ref={ref}
				multiline={multiline}
				editable={editable}
				onChangeText={onChangeText}
				placeholderTextColor="#afafaf"
				style={[
					{
						// fontFamily: 'SF-Pro-Text-Regular',
						fontSize: 14,
						flex: 1,
						height: '100%',
						color: !error ? '#000' : COLORS.errorBackground,
					},
					(multiline ? {
						textAlignVertical: 'top',
					} : {}),
				]}
			/>
			{
				rightIcon &&
				<View
					style={{
						marginLeft: 15,
					}}
				>
					{rightIcon}
				</View>
			}
		</View>
	);
});

InputText.propTypes = propTypes;

InputText.defaultProps = defaultProps;

export default InputText;
