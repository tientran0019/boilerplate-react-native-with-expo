/* eslint-disable no-nested-ternary */
/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-04-08 12:14:02
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import { Text } from 'react-native';

import COLORS from 'src/constants/colors';

const typesStyle = {
	'heading-1-sb': {
		fontFamily: 'space-mono',
		fontSize: 34,
		lineHeight: 41,
		color: COLORS.black,
		fontWeight: 'bold',
	},
	'heading-1-r': {
		fontFamily: 'space-mono',
		fontSize: 34,
		lineHeight: 41,
		color: COLORS.black,
	},
	'heading-2-r': {
		fontFamily: 'space-mono',
		fontSize: 28,
		lineHeight: 34,
		color: COLORS.black,
	},
	'heading-3-r': {
		fontFamily: 'space-mono',
		fontSize: 22,
		lineHeight: 28,
		color: COLORS.black,
	},
	'heading-3-sb': {
		fontFamily: 'space-mono',
		fontSize: 22,
		lineHeight: 28,
		color: COLORS.black,
		fontWeight: 'bold',
	},
	'heading-4-r': {
		fontFamily: 'space-mono',
		fontSize: 20,
		lineHeight: 25,
		color: COLORS.black,
	},
	'heading-4-sb': {
		fontFamily: 'space-mono',
		fontSize: 20,
		lineHeight: 25,
		color: COLORS.black,
		fontWeight: 'bold',
	},
	'heading-5-sb': {
		fontFamily: 'space-mono',
		fontSize: 17,
		lineHeight: 22,
		color: COLORS.gray1,
		fontWeight: 'bold',
	},
	'heading-5-l': {
		fontFamily: 'space-mono',
		fontSize: 16,
		lineHeight: 20,
		color: COLORS.gray1,
	},
	'heading-6-sb': {
		fontFamily: 'space-mono',
		fontSize: 15,
		lineHeight: 20,
		color: COLORS.gray1,
		fontWeight: 'bold',
	},
	'heading-6-r': {
		fontFamily: 'space-mono',
		fontSize: 15,
		lineHeight: 20,
		color: COLORS.gray1,
	},
	'heading-6-l': {
		fontFamily: 'space-mono',
		fontSize: 15,
		lineHeight: 20,
		color: COLORS.gray1,
		fontWeight: 'bold',
	},
	'small-text': {
		fontFamily: 'space-mono',
		fontSize: 11,
		lineHeight: 13,
		color: COLORS.gray1,
	},
	'mid-text': {
		fontFamily: 'space-mono',
		fontSize: 13,
		lineHeight: 16,
		color: COLORS.gray1,
	},
};

const propTypes = {
	style: PropTypes.object,
	type: PropTypes.oneOf([
		'heading-1-sb',
		'heading-1-r',
		'heading-2-r',
		'heading-3-sb',
		'heading-3-r',
		'heading-4-r',
		'heading-5-sb',
		'heading-5-l',
		'heading-6-sb',
		'heading-6-r',
		'heading-6-l',
		'small-text',
		'mid-text',
	]),
	color: PropTypes.oneOf([
		'primary',
		'note',
		'normal',
	]),
};

const defaultProps = {
	style: {},
	type: 'heading-5-l',
	color: 'normal',
};

const TextComponent = (props) => {
	const { style, type, color, ...rest } = props;

	return (
		<Text
			{...rest}
			style={[
				{
					fontFamily: 'space-mono',
					fontSize: 16,
					lineHeight: 20,
				},
				typesStyle[type] ?? {},
				{
					color: color === 'primary' ? COLORS.primary : (color === 'note' ? COLORS.gray3 : COLORS.gray1),
				},
				style,
			]}
		/>
	);
};

TextComponent.propTypes = propTypes;

TextComponent.defaultProps = defaultProps;

export default TextComponent;
