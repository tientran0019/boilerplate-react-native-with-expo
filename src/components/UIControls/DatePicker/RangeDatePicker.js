/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-03-29 14:29:29
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import dayjs from 'src/utils/moment';

import Text from 'src/components/UIDisplay/Text';
import View from 'src/components/UIDisplay/View';

import DatePicker from './index';

const propTypes = {
	style: PropTypes.object,
	componentStyle: PropTypes.object,
	label: PropTypes.string,
	format: PropTypes.string,
	value: PropTypes.array,
	onChange: PropTypes.func,
	typeReturn: PropTypes.oneOf(['string', 'date']),
	mode: PropTypes.oneOf(['time', 'date']),
};

const defaultProps = {
	style: {},
	componentStyle: {},
	label: '',
	value: [],
	format: 'YYYY/MM/DD',
	onChange: f => f,
	typeReturn: 'string',
	mode: 'date',
};

const RangeDatePicker = (props) => {
	// eslint-disable-next-line prefer-const
	let { style, componentStyle, label, mode, value, typeReturn, format, onChange, ...attrs } = props;

	if (mode === 'time') {
		format = 'HH:mm';
	}

	const handleChange = React.useCallback((selectedDate, type) => {
		if (!selectedDate) {
			return;
		}

		if (type === 'start') {
			onChange([typeReturn === 'string' ? dayjs(selectedDate).format(format) : selectedDate, value[1]]);
		} else {
			onChange([value[0], typeReturn === 'string' ? dayjs(selectedDate).format(format) : selectedDate]);
		}
	}, [format, onChange, typeReturn, value]);

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
					flexDirection: 'row',
					alignItems: 'center',
				}}
			>
				<DatePicker
					{...attrs}
					typeReturn="date"
					format={format}
					mode={mode}
					style={{
						...componentStyle,
						flex: 1,
					}}
					value={value[0]}
					maximumDate={value[1] ? new Date(value[1]) : undefined}
					onChange={(v) => handleChange(v, 'start')}
				/>
				<Text
					style={{
						paddingLeft: 10,
						paddingRight: 10,
					}}
				>
					đến
				</Text>
				<DatePicker
					{...attrs}
					typeReturn="date"
					format={format}
					mode={mode}
					style={{
						...componentStyle,
						flex: 1,
					}}
					value={value[1]}
					minimumDate={value[0] ? new Date(value[0]) : undefined}
					onChange={(v) => handleChange(v, 'end')}
				/>
			</View>
		</View>
	);
};

RangeDatePicker.propTypes = propTypes;

RangeDatePicker.defaultProps = defaultProps;

export default React.memo(RangeDatePicker);
