/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-04-17 18:48:56
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import { useTheme } from '@zellosoft/antd-react-native/lib/style';

import { LinearGradient } from 'expo-linear-gradient';

const propTypes = {
	children: PropTypes.any,
};

const defaultProps = {
	children: null,
};

const Gradient = (props) => {
	const { children, ...restProps } = props;

	const theme = useTheme();

	return (
		<LinearGradient
			colors={theme.gradient_bg || []}
			{...restProps}
		>
			{children}
		</LinearGradient>
	);
};

Gradient.propTypes = propTypes;

Gradient.defaultProps = defaultProps;

export default Gradient;
