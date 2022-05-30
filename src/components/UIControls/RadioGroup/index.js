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

import Text from 'src/components/UIDisplay/Text';

import Item from './Item';

const propTypes = {
	children: PropTypes.any.isRequired,
	style: PropTypes.object,
	value: PropTypes.string,
	label: PropTypes.any,
	onChange: PropTypes.func,
	disabled: PropTypes.bool,
	size: PropTypes.oneOf(['small', 'default']),
	error: PropTypes.bool,
	inline: PropTypes.bool,
};

const defaultProps = {
	style: {},
	value: '',
	label: null,
	onChange: f => f,
	disabled: false,
	size: 'default',
	error: false,
	inline: false,
};

const RadioGroup = (props) => {
	const { children = [], inline, label, size, style, disabled, value, onChange, error, ...attr } = props;

	const handleSelect = React.useCallback((val, l) => {
		onChange(val);
	}, [onChange]);

	return (
		<View
			style={{
				...style,
			}}
		>
			{
				label ?
					<Text
						type="strong"
						style={{
							marginBottom: 10,
						}}
					>
						{label}
					</Text> :
					null
			}
			<View
				{...attr}
				style={[
					{
						width: '100%',
						flexDirection: inline ? 'row' : 'column',
						flexWrap: 'wrap',
					},
				]}
			>
				{
					React.Children.map(children, (child, index) => {
						return React.cloneElement(
							child,
							{
								onPress: (v, l) => {
									handleSelect(v, l);
									child?.props?.onPress(v, l);
								},
								isSelected: child?.props?.value === value,
								disabled,
								size,
								inline,
								error,
								last: index === children.length - 1,
							},
						);
					})
				}
			</View>
		</View>
	);
};

RadioGroup.Item = Item;

RadioGroup.propTypes = propTypes;

RadioGroup.defaultProps = defaultProps;

export default RadioGroup;
