/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-04-05 13:55:53
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';
import useTheme from 'src/hooks/useTheme';

import { View } from 'react-native';

const propTypes = {
	color: PropTypes.string,
	padding: PropTypes.number,
	size: PropTypes.number,
	style: PropTypes.object,
	vertical: PropTypes.bool,
};

const defaultProps = {
	color: undefined,
	padding: 20,
	size: 1,
	style: {},
	vertical: false,
};

const Divider = (props) => {
	const { color, size, style, vertical, padding, ...attrs } = props;
	const theme = useTheme();

	return (
		<View
			{...attrs}
			style={{
				...style,
				...(
					vertical ? {
						width: size,
						height: 20,
						marginHorizontal: padding,
					} : {
						height: size,
						width: '100%',
						marginVertical: padding,
					}
				),
				backgroundColor: color || theme.border_color_base,
			}}
		/>
	);
};

Divider.propTypes = propTypes;

Divider.defaultProps = defaultProps;

export default Divider;
