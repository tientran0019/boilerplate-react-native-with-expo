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

import useUpdateEffect from 'react-use/lib/useUpdateEffect';

import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import BOX_SHADOW from 'src/constants/box-shadow';
import COLORS from 'src/constants/colors';

import Text from 'src/components/Text';
import Touchable from 'src/components/Touchable';

import Option from './Option';

const propTypes = {
	children: PropTypes.any.isRequired,
	style: PropTypes.object,
	icon: PropTypes.string,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	IconType: PropTypes.any,
	disable: PropTypes.bool,
	error: PropTypes.bool,
	onChange: PropTypes.func,
};

const defaultProps = {
	style: {},
	icon: null,
	placeholder: '',
	value: '',
	IconType: Ionicons,
	disable: false,
	error: false,
	onChange: f => f,
};

const Select = (props) => {
	const { children = [], style, icon, IconType, disable, placeholder, value, onChange, error, ...attr } = props;

	const [open, setOpen] = useState(false);
	const [selectedVal, setSelectedVal] = useState(value);

	useUpdateEffect(() => {
		setSelectedVal(value);
	}, [value]);

	useUpdateEffect(() => {
		onChange(selectedVal);
	}, [selectedVal]);

	const findLabel = useCallback((val) => {
		const opt = React.Children.toArray(children).find(el => {
			return el.props?.value === val;
		});

		return opt?.props?.children || val;
	}, [children]);

	const handlePress = useCallback(() => {
		setOpen(true);
	}, []);

	const handleSelect = useCallback((val, label) => {
		setSelectedVal(() => {
			setOpen(false);
			// onChange(val);
			return val;
		});
	}, []);

	return (
		<>
			<Touchable feedback={!disable} onPress={disable ? f => f : handlePress}>
				<View
					{...attr}
					style={[
						{
							height: 50,
							width: '100%',
							alignItems: 'center',
						},
						style,
						{
							borderWidth: 0.3,
							borderColor: !error ? COLORS.borderColorComponent : COLORS.errorBackground,
							borderRadius: 5,
							paddingHorizontal: 15,
							flexDirection: 'row',
							backgroundColor: !disable ? '#fff' : '#F2F3F5',
							...BOX_SHADOW.component,
						},
					]}
				>

					{
						icon &&
						<View
							style={{
								marginRight: 15,
							}}
						>
							<IconType
								name={icon}
								size={28}
								color="#666"
							/>
						</View>
					}
					{
						selectedVal ?
							<Text
								style={{
									flex: 1,
									// fontFamily: 'SF-Pro-Text-Regular',
									fontSize: 14,
									color: '#000',
								}}
								numberOfLines={1}
							>
								{findLabel(selectedVal)}
							</Text> :
							<Text
								style={{
									flex: 1,
									// fontFamily: 'SF-Pro-Text-Regular',
									fontSize: 14,
									color: '#afafaf',
								}}
								numberOfLines={1}
							>
								{placeholder}
							</Text>
					}
					<View
						style={{
							marginLeft: 15,
						}}
					>
						<MaterialIcons name="arrow-drop-down" size={28} color="gray" />
					</View>
				</View>
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
												onPress: handleSelect,
												isSelected: child?.props?.value === selectedVal,
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

Select.Option = Option;

Select.propTypes = propTypes;

Select.defaultProps = defaultProps;

export default Select;
