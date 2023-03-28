/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-03-29 14:29:29
*------------------------------------------------------- */

import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import dayjs from 'src/utils/moment';

import DateTimePicker from '@react-native-community/datetimepicker';

import useTheme from 'src/hooks/useTheme';

import { Platform } from 'react-native';

import { Ionicons, AntDesign } from '@expo/vector-icons';

import formatDate from 'src/utils/format-date';

import Touchable from 'src/components/UIControls/Touchable';
import Modal from 'src/components/UIControls/Modal';
import Text from 'src/components/UIDisplay/Text';
import View from 'src/components/UIDisplay/View';

const propTypes = {
	style: PropTypes.object,
	disabled: PropTypes.bool,
	error: PropTypes.bool,
	mode: PropTypes.oneOf(['time', 'date']),
	placeholder: PropTypes.string,
	value: PropTypes.any,
	size: PropTypes.oneOf(['small', 'default']),
	label: PropTypes.string,
	format: PropTypes.string,
	onChange: PropTypes.func,
	typeReturn: PropTypes.oneOf(['string', 'date']),
};

const defaultProps = {
	style: {},
	disabled: false,
	label: '',
	size: 'default',
	error: false,
	mode: 'date',
	placeholder: 'Select',
	value: undefined,
	format: 'YYYY/MM/DD',
	onChange: f => f,
	typeReturn: 'string',
};

const DatePicker = (props) => {
	// eslint-disable-next-line prefer-const
	let { style, error, disabled, label, size, mode, placeholder, value, format, onChange, typeReturn, ...attrs } = props;

	if (mode === 'time') {
		format = 'HH:mm';
	}

	const theme = useTheme();

	const [show, setShow] = useState(false);

	const handleShow = useCallback(() => {
		setShow(true);
	}, []);

	const handleHideModal = useCallback(() => {
		setShow(false);
	}, []);

	const handleChange = (event, selectedDate) => {
		setShow(false);

		if (!selectedDate) {
			return;
		}

		onChange(typeReturn === 'string' ? dayjs(selectedDate).format(format) : selectedDate);
	};

	const height = (size === 'small' ? theme.button_height_sm : theme.button_height);

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
					borderRadius: style.borderRadius || theme.radius_md,
					...(size === 'small' ? {
						shadowRadius: 2,
						shadowOpacity: 1,
						shadowOffset: {
							height: 2,
							width: 2,
						},
					} : {}),
				}}
			>
				<Touchable
					feedback={false}
					onPress={disabled ? f => f : handleShow}
					style={{
						backgroundColor: disabled ? theme.fill_disabled : theme.fill_base,
						borderColor: theme.border_color_component,
						borderWidth: 1,
						height,
						paddingRight: 10,
						paddingLeft: 15,
						borderRadius: style.borderRadius || theme.radius_md,
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<Text
						style={{
							flex: 1,
							color: value ? theme.color_text_base : theme.color_text_placeholder,
						}}
						numberOfLines={1}
					>
						{value ? formatDate(value) : placeholder}
					</Text>
					<Text
						color="note"
						style={{
							marginLeft: 10,
						}}
					>
						{
							mode === 'date' ?
								<AntDesign
									name="calendar"
									size={18}
								/> :
								<Ionicons
									name="time-outline"
									size={18}
								/>
						}
					</Text>
					{
						error ?
							<AntDesign name="exclamationcircleo" style={{ marginLeft: 5 }} size={18} color={theme.brand_error} /> :
							null
					}
				</Touchable>
			</View>
			{
				Platform.OS === 'android' && show ?
					<DateTimePicker
						is24Hour
						timeZoneOffsetInMinutes={0}
						{...attrs}
						value={value ? new Date(value) : new Date()}
						mode={mode}
						dateFormat={format}
						disabled={disabled}
						onChange={handleChange}
						themeVariant={theme.name}
					/> :
					null
			}
			{
				Platform.OS === 'ios' ?
					<Modal
						visible={show}
						onClose={handleHideModal}
					>
						<View
							style={{
								padding: 20,
								paddingBottom: 0,
							}}
						>
							<DateTimePicker
								is24Hour
								display={mode === 'date' ? 'inline' : 'spinner'}
								timeZoneOffsetInMinutes={0}
								{...attrs}
								value={value ? new Date(value) : new Date()}
								mode={mode}
								dateFormat={format}
								disabled={disabled}
								onChange={handleChange}
								accentColor={theme.brand_important}
								themeVariant={theme.name}
							/>
						</View>
					</Modal> :
					null
			}
		</View>
	);
};

DatePicker.propTypes = propTypes;

DatePicker.defaultProps = defaultProps;

export default React.memo(DatePicker);
