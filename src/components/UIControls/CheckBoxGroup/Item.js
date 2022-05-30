/* eslint-disable no-nested-ternary */
/* --------------------------------------------------------

* Author Tien Tran
* Email tientran@zellosoft.com
* Phone 0972970075
*
* Created: 2022-03-29 14:40:54
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import CheckBox from 'src/components/UIControls/CheckBox';

const propTypes = {
	value: PropTypes.string.isRequired,
	children: PropTypes.any.isRequired,
	onPress: PropTypes.func,
	disabled: PropTypes.bool,
	isSelected: PropTypes.bool,
	error: PropTypes.bool,
	style: PropTypes.object,
};

const defaultProps = {
	onPress: f => f,
	children: '',
	error: false,
	disabled: false,
	isSelected: false,
	style: {},
};

const Item = (props) => {
	const { value, style, children, onPress, isSelected, error, disabled, ...attrs } = props;

	return (
		<CheckBox
			{...attrs}
			onChange={(disabled) ? f => f : (checked) => onPress(value, checked, children)}
			value={isSelected}
			error={error}
			label={children}
			disabled={disabled}
			style={{
				paddingVertical: 10,
				...style,
			}}
		/>
	);
};

Item.propTypes = propTypes;

Item.defaultProps = defaultProps;

export default React.memo(Item);
