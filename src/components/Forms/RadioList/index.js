/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-03-27 14:40:43
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import useUpdateEffect from 'react-use/lib/useUpdateEffect';

import List from 'src/components/List';

import Item from './Item';

const propTypes = {
	children: PropTypes.any.isRequired,
	style: PropTypes.object,
	value: PropTypes.string,
	onChange: PropTypes.func,
	disabled: PropTypes.bool,
};

const defaultProps = {
	style: {},
	value: '',
	onChange: f => f,
	disabled: false,
	error: false,
};

const RadioList = (props) => {
	const { children = [], style, disabled, value, onChange } = props;

	const [selectedVal, setSelectedVal] = React.useState(value || children[0]?.props?.value);

	useUpdateEffect(() => {
		onChange(selectedVal);
	}, [selectedVal]);

	const handleSelect = React.useCallback((val) => {
		setSelectedVal(() => {
			return val;
		});
	}, []);

	return (
		<List
			style={style}
		>
			{
				React.Children.map(children, (child) => {
					return React.cloneElement(
						child,
						{
							onPress: handleSelect,
							selectedVal,
							disabled,
						},
					);
				})
			}
		</List>
	);
};

RadioList.Item = Item;

RadioList.propTypes = propTypes;

RadioList.defaultProps = defaultProps;

export default RadioList;
