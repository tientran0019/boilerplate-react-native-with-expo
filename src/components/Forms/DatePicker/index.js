/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-04-08 19:35:57
*------------------------------------------------------- */

import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import dayjs from 'src/utils/moment';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useUpdateEffect from 'react-use/lib/useUpdateEffect';

import { View, Modal, Platform } from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

import { Ionicons, AntDesign } from '@expo/vector-icons';

import BOX_SHADOW from 'src/constants/box-shadow';
import COLORS from 'src/constants/colors';
import formatDate from 'src/utils/format-date';

import Touchable from 'src/components/Touchable';
import Button from 'src/components/Forms/Button';
import Text from 'src/components/Text';

const propTypes = {
	style: PropTypes.object,
	icon: PropTypes.string,
	IconType: PropTypes.any,
	disable: PropTypes.bool,
	error: PropTypes.bool,
	mode: PropTypes.string,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	format: PropTypes.string,
	onChange: PropTypes.func,
	typeReturn: PropTypes.oneOf(['string', 'date']),
};

const defaultProps = {
	style: {},
	icon: null,
	IconType: Ionicons,
	disable: false,
	error: false,
	mode: 'date',
	placeholder: 'Select date...',
	value: dayjs().format('MM/DD/YYYY') + ' 23:59',
	format: 'DD/MM/YYYY',
	onChange: f => f,
	typeReturn: 'string',
};

const DatePicker = (props) => {
	// eslint-disable-next-line prefer-const
	let { style, icon, IconType, error, disable, mode, placeholder, value, format, onChange, typeReturn, ...attr } = props;

	if (mode === 'time') {
		format = 'HH:mm';
		value = '01/01/1999 ' + value;
	}

	const insets = useSafeAreaInsets();

	const [show, setShow] = useState(false);
	const [date, setDate] = useState(new Date(value));
	const [dateIOS, setDateIOS] = useState(new Date(value));

	useUpdateEffect(() => {
		onChange(typeReturn === 'string' ? dayjs(date).format('MM/DD/YYYY HH:mm') : date);
	}, [date, typeReturn]);

	const handleShow = useCallback(() => {
		setShow(true);
	}, []);

	const handleHideModal = useCallback(() => {
		setDateIOS(date);
		setShow(false);
	}, [date]);

	const handleChange = (event, selectedDate) => {
		setShow(Platform.OS === 'ios');

		if (!selectedDate) {
			return;
		}

		if (Platform.OS === 'ios') {
			setDateIOS(selectedDate);
			return;
		}

		setDate(selectedDate);
	};

	return (
		<>
			<Touchable
				feedback={!disable}
				onPress={disable ? f => f : handleShow}
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
						backgroundColor: !disable ? '#fff' : COLORS.bgDisableComponent,
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
				<Text
					style={{
						// fontFamily: 'SF-Pro-Text-Regular',
						fontSize: 14,
						flex: 1,
						color: date ? '#000' : '#bdbdbd',
					}}
				>
					{date ? formatDate(date, 'YYYY.MM.DD') : placeholder}
				</Text>
				{
					mode === 'date' ?
						<AntDesign
							name="calendar"
							size={22}
							color={COLORS.gray3}
						/> :
						<Ionicons
							name="md-time"
							size={22}
							color={COLORS.gray3}
						/>
				}
			</Touchable>
			{
				Platform.OS === 'ios' &&
				<Modal
					visible={show}
					transparent
					// animationType="slide"
					onRequestClose={handleHideModal}
				>
					<Text
						onPress={handleHideModal}
						style={{
							flex: 1,
							backgroundColor: 'rgba(0, 0, 0, 0.6)',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					/>
					<View
						style={{
							backgroundColor: '#fff',
							paddingBottom: insets.bottom,
						}}
					>
						<DateTimePicker
							is24Hour
							display="spinner"
							timeZoneOffsetInMinutes={0}
							{...attr}
							value={dateIOS}
							mode={mode}
							onChange={handleChange}
							style={{
								backgroundColor: '#fff',
							}}
						/>
						<View
							style={{
								marginTop: 10,
								flexDirection: 'row',
							}}
						>
							<Button
								type="clear"
								style={{
									flex: 1,
								}}
								onPress={handleHideModal}
								color="primary"
							>
								Cancel
							</Button>
							<Button
								type="clear"
								style={{
									flex: 1,
								}}
								onPress={() => {
									setDate(dateIOS);
									setShow(false);
								}}
								color="primary"
							>
								OK
							</Button>
						</View>
					</View>
				</Modal>
			}
			{
				show && Platform.OS === 'android' &&
				<DateTimePicker
					is24Hour
					display="spinner"
					timeZoneOffsetInMinutes={0}
					{...attr}
					value={date}
					mode={mode}
					onChange={handleChange}
					style={{
						backgroundColor: '#fff',
						paddingBottom: insets.bottom,
					}}
				/>
			}
		</>
	);
};

DatePicker.propTypes = propTypes;

DatePicker.defaultProps = defaultProps;

export default DatePicker;
