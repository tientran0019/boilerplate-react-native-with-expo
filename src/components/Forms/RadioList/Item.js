/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-12-30 09:23:56
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import List from 'src/components/List';
import CheckBox from 'src/components/Forms/CheckBox';

const propTypes = {
	value: PropTypes.string.isRequired,
	children: PropTypes.string.isRequired,
	onPress: PropTypes.func,
	disabled: PropTypes.bool,
	selectedVal: PropTypes.string,
	left: PropTypes.any,
};

const defaultProps = {
	onPress: f => f,
	children: '',
	disabled: false,
	selectedVal: '',
	left: null,
};

const Item = (props) => {
	const { value, children, onPress, disabled, left, selectedVal } = props;

	const handleSelect = React.useCallback((checked) => {
		if (disabled || !checked) {
			return;
		}

		onPress(value, children);
	}, [children, disabled, onPress, value]);

	return (
		<List.Item
			right={
				<CheckBox
					onChange={handleSelect}
					readOnly={selectedVal === value}
					disabled={disabled}
					innerStyle={{
						borderRadius: 50,
					}}
					value={selectedVal === value}
				/>
			}
			left={left}
		>
			{children}
		</List.Item>
	);
};

Item.propTypes = propTypes;

Item.defaultProps = defaultProps;

export default Item;
