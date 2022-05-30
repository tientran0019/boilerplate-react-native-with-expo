/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-04-05 13:55:53
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import Text from 'src/components/UIDisplay/Text';
import View from 'src/components/UIDisplay/View';

import Item from './Item';

const propTypes = {
	style: PropTypes.object,
	children: PropTypes.any,
	title: PropTypes.string,
};

const defaultProps = {
	style: {},
	children: null,
	title: '',
};

const List = (props) => {
	const { children, style, title } = props;

	return (
		<View
			style={{
				...style,
			}}
		>
			{
				title ?
					<Text
						type="h3"
						style={{
							marginBottom: 20,
						}}
					>
						{title}
					</Text> :
					null
			}
			<View>
				{children}
			</View>
		</View>
	);
};

List.Item = Item;

List.propTypes = propTypes;

List.defaultProps = defaultProps;

export default List;
