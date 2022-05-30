/* --------------------------------------------------------

* Author Tien Tran
* Email tientran@zellosoft.com
* Phone 0972970075
*
* Created: 2022-03-29 14:40:54
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';

import Text from 'src/components/UIDisplay/Text';

import Item from './Item';

const propTypes = {
	children: PropTypes.any.isRequired,
	style: PropTypes.object,
	value: PropTypes.array,
	label: PropTypes.any,
	onChange: PropTypes.func,
	disabled: PropTypes.bool,
	showAll: PropTypes.bool,
	size: PropTypes.oneOf(['small', 'default']),
	error: PropTypes.bool,
};

const defaultProps = {
	style: {},
	value: undefined,
	label: null,
	onChange: f => f,
	disabled: false,
	showAll: false,
	size: 'default',
	error: false,
};

const CheckBoxGroup = (props) => {
	const { children = [], label, size, style, disabled, showAll, value, onChange, error, ...attr } = props;

	const [selectedValue, setSelectedValue] = React.useState({});

	React.useEffect(() => {
		setSelectedValue(() => {
			return (value || []).reduce((preVal, el) => {
				return {
					...preVal,
					[el]: true,
				};
			}, {
				all: value?.length === children.length,
			});
		});
	}, [children.length, value]);

	const handleChange = React.useCallback((val) => {
		if (!val || val.length === 0) {
			onChange();
			return;
		}
		onChange(val);
	}, [onChange]);

	const handleSelect = React.useCallback((key, checked) => {
		if (checked) {
			handleChange([...(value || []), key]);
		} else {
			handleChange((value || []).filter(el => {
				return el !== key;
			}));
		}
	}, [handleChange, value]);

	const handleSelectAll = React.useCallback((key, checked) => {
		if (checked) {
			handleChange(children.map((el) => {
				return el?.props?.value;
			}));
		} else {
			handleChange([]);
		}
	}, [children, handleChange]);

	return (
		<View
			style={style}
		>
			{
				label ?
					<Text
						type="strong"
						color={error ? 'error' : 'normal'}
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
						// marginTop: 5,
						// marginBottom: 5,
					},
				]}
			>
				{
					React.Children.map(children, (child) => {
						return React.cloneElement(
							child,
							{
								onPress: (v, c) => {
									handleSelect(v, c);
									child?.props?.onPress?.(v, c);
								},
								isSelected: selectedValue[child?.props?.value],
								disabled,
								size,
							},
						);
					})
				}
				{
					showAll ?
						<Item value="all" key="all" onPress={handleSelectAll} isSelected={selectedValue.all}>All</Item> :
						null
				}
			</View>
		</View>
	);
};

CheckBoxGroup.Item = Item;

CheckBoxGroup.propTypes = propTypes;

CheckBoxGroup.defaultProps = defaultProps;

export default CheckBoxGroup;
