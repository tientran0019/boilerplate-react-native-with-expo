/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-04-05 13:55:53
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import View from 'src/components/UIDisplay/View';

import Item from './Item';

const propTypes = {
	style: PropTypes.object,
	children: PropTypes.any,
};

const defaultProps = {
	style: {},
	children: null,
};

const List = (props) => {
	const { children, style } = props;

	return (
		<View
			style={{
				...style,
			}}
		>
			{children}
		</View>
	);
};

List.Item = Item;

List.propTypes = propTypes;

List.defaultProps = defaultProps;

export default List;
