/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-07-16 13:45:05
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';

import COLORS from 'src/constants/colors';
import BOX_SHADOW from 'src/constants/box-shadow';

import Item from './Item';

const propTypes = {
	children: PropTypes.any.isRequired,
	style: PropTypes.object.isRequired,
};

const defaultProps = {
	children: null,
	style: {},
};

const Collapse = (props) => {
	const { children, style, ...attr } = props;

	return (
		<View
			style={{
				// borderRadius: 6,
				// borderWidth: 1,
				// borderColor: COLORS.borderColorComponent,
				// ...BOX_SHADOW.component,
				...style,
			}}
			{...attr}
		>
			{children}
		</View>
	);
};

Collapse.Item = Item;

Collapse.propTypes = propTypes;

Collapse.defaultProps = defaultProps;

export default Collapse;
