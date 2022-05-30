/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-03-29 14:40:54
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

// import useUpdateEffect from 'react-use/lib/useUpdateEffect';

import { View } from 'react-native';

import Item from './Item';

const propTypes = {
	children: PropTypes.any.isRequired,
	style: PropTypes.object,
	value: PropTypes.string,
	onChange: PropTypes.func,
	disabled: PropTypes.bool,
	readOnly: PropTypes.bool,
	size: PropTypes.oneOf(['small', 'default']),
	error: PropTypes.bool,
};

const defaultProps = {
	style: {},
	value: '',
	onChange: f => f,
	disabled: false,
	readOnly: false,
	size: 'default',
	error: false,
};

const RadioGroup = (props) => {
	const { children = [], size, style, disabled, readOnly, value, onChange, error, ...attr } = props;

	const handleSelect = React.useCallback((val, label) => {
		onChange(val);
	}, [onChange]);

	return (
		<View
			{...attr}
			style={[
				{
					flexDirection: 'row',
					alignItems: 'center',
					width: '100%',
				},
				style,
			]}
		>
			{
				React.Children.map(children, (child) => {
					return React.cloneElement(
						child,
						{
							onPress: (readOnly || disabled) ? f => f : (v, l) => {
								handleSelect(v, l);
								child?.props?.onPress(v, l);
							},
							isSelected: child?.props?.value === value,
							disabled,
							size,
						},
					);
				})
			}
		</View>
	);
};

RadioGroup.Item = Item;

RadioGroup.propTypes = propTypes;

RadioGroup.defaultProps = defaultProps;

export default RadioGroup;
