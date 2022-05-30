/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-03-29 14:40:54
*------------------------------------------------------- */

import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import { Feather } from '@expo/vector-icons';

import Touchable from 'src/components/UIControls/Touchable';
import Text from 'src/components/UIDisplay/Text';
import View from 'src/components/UIDisplay/View';
import Modal from 'src/components/UIControls/Modal';

import Option from './Option';

const propTypes = {
	children: PropTypes.any,
	options: PropTypes.array,
	value: PropTypes.string,
	disable: PropTypes.bool,
	onChange: PropTypes.func,
	node: PropTypes.node,
	style: PropTypes.object,
	titleModal: PropTypes.any,
};

const defaultProps = {
	value: '',
	titleModal: '',
	disable: false,
	onChange: f => f,
	node: <Text><Feather name="more-vertical" size={20} /></Text>,
	style: {},
	options: undefined,
};

const Dropdown = (props) => {
	const { children = [], options, titleModal, style, disable, value, onChange, node, ...attr } = props;

	const [open, setOpen] = useState(false);

	const handlePressToggle = useCallback(() => {
		setOpen((val) => !val);
	}, []);

	return (
		<>
			<Touchable
				{...attr}
				style={[
					{
						padding: 5,
					},
					style,
				]}
				feedback={!disable}
				onPress={disable ? f => f : handlePressToggle}
			>
				{React.cloneElement(node, { onPress: disable ? f => f : handlePressToggle })}
			</Touchable>
			<Modal
				visible={open}
				onClose={() => setOpen(false)}
				title={titleModal}
			>
				<View
					style={{
						paddingVertical: 5,
					}}
				>
					{
						options && options.length > 0 ?
							options.map((el, i) => {
								return (
									<Option
										{...el}
										value={el.value}
										last={i === options.length - 1}
										key={el.value}
										onPress={(v, l) => {
											onChange(v, l);
											el?.onPress?.(v, l);
											setOpen(false);
										}}
										isSelected={value === el.value}
									>
										{el.label}
									</Option>
								);
							}) :
							React.Children.map(children, (child, i) => {
								return React.cloneElement(
									child,
									{
										onPress: (v, l) => {
											onChange(v, l);
											child.props?.onPress?.(v, l);
											setOpen(false);
										},
										isSelected: value === child?.props?.value,
										last: i === children.length - 1,
									},
								);
							})
					}
				</View>
			</Modal>
		</>
	);
};

Dropdown.Option = Option;

Dropdown.propTypes = propTypes;

Dropdown.defaultProps = defaultProps;

export default Dropdown;
