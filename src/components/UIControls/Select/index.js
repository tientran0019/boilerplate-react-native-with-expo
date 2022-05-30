/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-03-29 14:40:54
*------------------------------------------------------- */

import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import { ActivityIndicator, TouchableWithoutFeedback } from 'react-native';

import useUpdateEffect from 'react-use/lib/useUpdateEffect';

import { Feather, AntDesign } from '@expo/vector-icons';

import { useTheme } from '@zellosoft/antd-react-native/lib/style';

import Text from 'src/components/UIDisplay/Text';
import View from 'src/components/UIDisplay/View';
import Touchable from 'src/components/UIControls/Touchable';
import Modal from 'src/components/UIControls/Modal';

import Option from './Option';

const propTypes = {
	children: PropTypes.any,
	style: PropTypes.object,
	options: PropTypes.array,
	size: PropTypes.oneOf(['small', 'default']),
	label: PropTypes.string,
	titleModal: PropTypes.string,
	placeholder: PropTypes.string,
	value: PropTypes.any,
	disabled: PropTypes.bool,
	error: PropTypes.bool,
	loading: PropTypes.bool,
	onChange: PropTypes.func,
	multiple: PropTypes.bool,
};

const defaultProps = {
	style: {},
	placeholder: 'Select',
	label: '',
	titleModal: '',
	size: 'default',
	value: null,
	disabled: false,
	error: false,
	multiple: false,
	loading: false,
	onChange: f => f,
	options: undefined,
};

const Select = (props) => {
	// eslint-disable-next-line prefer-const
	let { children = [], multiple, titleModal, label, options, style, size, disabled, loading, placeholder, value, onChange, error, ...attrs } = props;

	const [open, setOpen] = useState(false);
	const [selectedList, setSelectedList] = useState([]);
	const [selectedListTemp, setSelectedListTemp] = useState([]);

	const theme = useTheme();

	const height = (size === 'small' ? theme.button_height_sm : theme.button_height) - 2;

	React.useEffect(() => {
		if (!value) {
			setSelectedList([]);
			return;
		}
		setSelectedList(multiple ? value : [value]);
		setSelectedListTemp(multiple ? value : [value]);
	}, [multiple, value]);

	const labels = React.useMemo(() => {
		return selectedList.map((val) => {
			const opt = options ? options.find(el => {
				return el.value === val;
			})?.label : React.Children.toArray(children).find(el => {
				return el.props?.value === val;
			})?.props?.children;

			return opt || val;
		});
	}, [children, options, selectedList]);

	const handlePress = useCallback(() => {
		setOpen(true);
	}, []);

	const handleSelect = useCallback((val, isRemove) => {
		if (!multiple) {
			setSelectedList(() => {
				setOpen(false);
				return [val];
			});

			onChange(val);

			return;
		}

		setSelectedListTemp((old) => {
			return !isRemove ? [...old, val] : old.filter(el => {
				return el !== val;
			});
		});
	}, [multiple, onChange]);

	const handleOk = React.useCallback(() => {
		setSelectedList(selectedListTemp);
		onChange(selectedListTemp);
		setOpen(false);
	}, [onChange, selectedListTemp]);

	const handleCancel = React.useCallback(() => {
		setSelectedListTemp(selectedList);
		setOpen(false);
	}, [selectedList]);

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
						color="note"
						style={{
							marginBottom: 5,
							fontSize: 12,
						}}
					>
						{label}
					</Text> :
					null
			}
			<View
				style={{
					height,
					width: '100%',
					// backgroundColor: theme.fill_base, // '#F4F4F4',
				}}
			>
				<Touchable
					{...attrs}
					feedback={false}
					onPress={disabled ? f => f : handlePress}
					style={{
						backgroundColor: disabled ? theme.fill_disabled : theme.fill_base,
						borderRadius: style.borderRadius || theme.radius_md,
						borderWidth: 0.5,
						borderColor: theme.border_color_component,
						height,
						paddingRight: 10,
						paddingLeft: 15,
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					{
						selectedList.length > 0 ?
							<Text
								style={{
									flex: 1,
								}}
								numberOfLines={1}
							>
								{labels.join(', ')}
							</Text> :
							<Text
								style={{
									flex: 1,
									color: theme.color_text_placeholder,
								}}
								numberOfLines={1}
							>
								{placeholder}
							</Text>
					}
					<Text
						color="note"
						style={{
							marginLeft: 10,
						}}
					>
						<Feather name="chevron-down" size={18} />
					</Text>
					{
						error ?
							<AntDesign name="exclamationcircleo" style={{ marginLeft: 5 }} size={18} color={theme.brand_error} /> :
							null
					}
				</Touchable>
			</View>
			<Modal
				visible={open}
				onClose={handleCancel}
				title={titleModal || label}
				footer={
					multiple ?
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								padding: 20,
							}}
						>
							<Text
								style={{
									textAlign: 'center',
									flex: 1,
								}}
								onPress={handleCancel}
							>
								Cancel
							</Text>
							<Text
								type="link"
								style={{
									textAlign: 'center',
									flex: 1,
								}}
								onPress={handleOk}
							>
								Ok
							</Text>
						</View> :
						null
				}
			>
				{
					loading ?
						<View
							style={{
								paddingVertical: 50,
							}}
						>
							<ActivityIndicator
								color={theme.brand_primary}
								size="small"
							/>
						</View> :
						<TouchableWithoutFeedback>
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
													onPress={el.disabled ? f => f : handleSelect}
													disabled={el.disabled}
													isSelected={selectedListTemp.includes(el.value)}
												>
													{el.label}
												</Option>
											);
										}) :
										React.Children.map(children, (child, i) => {
											return React.cloneElement(
												child,
												{
													onPress: child?.props?.disabled ? f => f : handleSelect,
													isSelected: selectedListTemp.includes(child?.props?.value),
													last: i === children.length - 1,
												},
											);
										})
								}
							</View>
						</TouchableWithoutFeedback>
				}
			</Modal>
		</View>
	);
};

Select.Option = Option;

Select.propTypes = propTypes;

Select.defaultProps = defaultProps;

export default React.memo(Select);
