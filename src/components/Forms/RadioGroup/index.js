/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-12-30 09:23:56
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import useUpdateEffect from 'react-use/lib/useUpdateEffect';

import { View } from 'react-native';

import Item from './Item';

const propTypes = {
	children: PropTypes.any.isRequired,
	style: PropTypes.object,
	value: PropTypes.string,
	onChange: PropTypes.func,
	disable: PropTypes.bool,
	error: PropTypes.bool,
};

const defaultProps = {
	style: {},
	value: '',
	onChange: f => f,
	disable: false,
	error: false,
};

const RadioGroup = (props) => {
	const { children = [], style, disable, value, onChange, error, ...attr } = props;

	const [selectedVal, setSelectedVal] = React.useState(value);

	useUpdateEffect(() => {
		onChange(selectedVal);
	}, [selectedVal]);

	const handleSelect = React.useCallback((val, label) => {
		setSelectedVal(() => {
			return val;
		});
	}, []);

	return (
		<View
			{...attr}
			style={[
				{
					flexDirection: 'row',
					alignItems: 'center',
				},
				style,
			]}
		>
			{
				React.Children.map(children, (child) => {
					return React.cloneElement(
						child,
						{
							onPress: handleSelect,
							isSelected: child?.props?.value === selectedVal,
							disable,
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
