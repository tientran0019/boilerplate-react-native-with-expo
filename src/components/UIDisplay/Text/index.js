/* eslint-disable no-nested-ternary */
/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-03-29 14:29:29
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import useTheme from 'src/hooks/useTheme';

import { Text } from 'react-native';

const fontWeights = {
	100: 'Roboto-Thin',
	300: 'Roboto-Light',
	400: 'Roboto',
	500: 'Roboto-Medium',
	700: 'Roboto-Bold',
	900: 'Roboto-Black',
	'bold': 'Roboto-Bold',
	'bolder': 'Roboto-Black',
	'lighter': 'Roboto-Light',
	'normal': 'Roboto',
};

const typesStyle = {
	'h1': {
		fontFamily: 'Roboto',
		fontSize: 22,
		fontWeight: 'bold',
		lineHeight: 30,
	},
	'h2': {
		fontFamily: 'Roboto',
		fontSize: 19,
		fontWeight: 'bold',
		lineHeight: 26,
	},
	'h3': {
		fontFamily: 'Roboto',
		fontSize: 17,
		fontWeight: 'bold',
		lineHeight: 22,
	},
	'h4': {
		fontFamily: 'Roboto',
		fontSize: 16,
		fontWeight: 'bold',
		lineHeight: 20,

	},
	'h5': {
		fontFamily: 'Roboto',
		fontSize: 14,
		fontWeight: 'bold',
		lineHeight: 20,
	},
	'strong': {
		fontFamily: 'Roboto',
		fontSize: 14,
		fontWeight: 'bold',
		lineHeight: 20,
	},
	'text': {
		fontFamily: 'Roboto',
		fontSize: 14,
		lineHeight: 20,
	},
	'paragraph': {
		fontFamily: 'Roboto',
		fontSize: 14,
		lineHeight: 18,
		marginBottom: 15,
	},
	'link': {
		fontFamily: 'Roboto',
		fontSize: 14,
		lineHeight: 18,
	},
	'note': {
		fontFamily: 'Roboto',
		fontSize: 12,
		lineHeight: 18,
	},
};

const propTypes = {
	style: PropTypes.any,
	innerRef: PropTypes.any,
	type: PropTypes.oneOf([
		'h1',
		'h2',
		'h3',
		'h4',
		'h5',
		'strong',
		'text',
		'paragraph',
		'link',
		'note',
	]),
	color: PropTypes.oneOf([
		'primary',
		'danger',
		'success',
		'warning',
		'important',
		'note',
		'normal',
		'inverse',
	]),
};

const defaultProps = {
	style: {},
	type: 'text',
	color: 'normal',
};

const TextComponent = (props) => {
	// eslint-disable-next-line prefer-const
	let { style, type, color, innerRef, ...rest } = props;

	const { fontWeight, fontStyle } = style;

	const theme = useTheme();

	if (type === 'link') {
		color = color !== 'normal' ? color : 'link';
	}

	const textColors = React.useMemo(() => {
		return {
			primary: theme.brand_primary,
			important: theme.brand_important,
			success: theme.brand_success,
			warning: theme.brand_warning,
			danger: theme.brand_error,
			note: theme.color_text_disabled,
			link: theme.brand_primary,
			inverse: theme.color_text_base_inverse,
		};
	}, [theme]);

	return (
		<Text
			{...rest}
			style={[
				{
					fontSize: 14,
				},
				typesStyle[type] ?? {},
				{
					color: textColors[color] || theme.color_text_base,
				},
				style,
				{
					fontFamily: (style?.fontFamily || fontWeights[fontWeight || typesStyle[type]?.fontWeight] || 'Roboto') + (fontStyle === 'italic' ? 'Italic' : ''),
				},
			]}
			ref={innerRef}
		/>
	);
};

TextComponent.propTypes = propTypes;

TextComponent.defaultProps = defaultProps;

export default React.forwardRef((props, ref) => {
	return <TextComponent {...props} innerRef={ref} />;
});
