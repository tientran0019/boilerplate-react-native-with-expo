/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-04-08 19:35:57
*------------------------------------------------------- */

import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import { View, Modal, ScrollView, TouchableWithoutFeedback } from 'react-native';

import { Feather } from '@expo/vector-icons';

import BOX_SHADOW from 'src/constants/box-shadow';
import COLORS from 'src/constants/colors';

import Touchable from 'src/components/Touchable';

import Option from './Option';

const propTypes = {
	children: PropTypes.any.isRequired,
	value: PropTypes.string,
	disable: PropTypes.bool,
	onChange: PropTypes.func,
	node: PropTypes.node,
	style: PropTypes.object,
};

const defaultProps = {
	value: '',
	disable: false,
	onChange: f => f,
	node: <Feather name="more-vertical" size={20} color={COLORS.gray3} />,
	style: {},
};

const Dropdown = (props) => {
	const { children = [], style, disable, value, onChange, node, ...attr } = props;

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
				transparent
				// animationType="fade"
				onRequestClose={() => setOpen(false)}
			>
				<Touchable
					onPress={() => setOpen(false)}
					style={{
						flex: 1,
						backgroundColor: 'rgba(0, 0, 0, 0.6)',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<ScrollView
						directionalLockEnabled
						style={{
							backgroundColor: '#fff',
							borderWidth: 1,
							borderColor: COLORS.borderColorComponent,
							borderRadius: 5,
							...BOX_SHADOW.component,
							width: '90%',
							maxHeight: '70%',
							flexGrow: 0,
						}}
					>
						<TouchableWithoutFeedback>
							<View
								style={{
									paddingVertical: 10,
								}}
							>
								{
									React.Children.map(children, (child) => {
										return React.cloneElement(
											child,
											{
												onClose: handlePressToggle,
											},
										);
									})
								}
							</View>
						</TouchableWithoutFeedback>
					</ScrollView>
				</Touchable>
			</Modal>
		</>
	);
};

Dropdown.Option = Option;

Dropdown.propTypes = propTypes;

Dropdown.defaultProps = defaultProps;

export default Dropdown;
