/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-04-17 23:05:47
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';
import Range from 'rn-range-slider';

import { View } from 'react-native';
import { useTheme } from '@zellosoft/antd-react-native/lib/style';

import Text from 'src/components/UIDisplay/Text';

import Thumb from './Thumb';
import Rail from './Rail';
import RailSelected from './RailSelected';
import Notch from './Notch';
import Label from './Label';

const propTypes = {
	style: PropTypes.object,
	unit: PropTypes.string,
	onChange: PropTypes.func,
	value: PropTypes.array,
	marks: PropTypes.array,
	min: PropTypes.number.isRequired,
	max: PropTypes.number.isRequired,
};

const defaultProps = {
	style: {},
	unit: null,
	onChange: f => f,
	value: [0, 100],
	marks: [0, 100],
	min: 0,
	max: 100,
};

const RangeSlider = (props) => {
	const { style, min, max, unit, onChange, value, marks, ...attrs } = props;
	const theme = useTheme();

	const renderThumb = React.useCallback(() => <Thumb active theme={theme} />, [theme]);
	const renderRail = React.useCallback(() => <Rail theme={theme} marks={marks} max={max} min={min} unit={unit} />, [unit, theme, marks, max, min]);
	const renderRailSelected = React.useCallback(() => <RailSelected theme={theme} />, [theme]);
	const renderLabel = React.useCallback(v => <Label text={v} theme={theme} />, [theme]);
	const renderNotch = React.useCallback(() => <Notch theme={theme} />, [theme]);
	const handleValueChange = React.useCallback((low, high) => {
		onChange([low, high]);
	}, [onChange]);

	return (
		<View
			style={{
				...style,
			}}
		>
			<Range
				min={min}
				max={max}
				step={1}
				floatingLabel
				allowLabelOverflow
				renderThumb={renderThumb}
				renderRail={renderRail}
				renderRailSelected={renderRailSelected}
				renderLabel={renderLabel}
				renderNotch={renderNotch}
				{...attrs}
				low={value[0]}
				high={value[1]}
				onTouchEnd={handleValueChange}
			/>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}
			>
				<Text
					type="strong"
					style={{
						fontSize: 10,
					}}
				>
					{0} {unit}
				</Text>
				<Text
					type="strong"
					style={{
						fontSize: 10,
					}}
				>
					{max} {unit}
				</Text>
			</View>
		</View>
	);
};

RangeSlider.propTypes = propTypes;

RangeSlider.defaultProps = defaultProps;

export default React.memo(RangeSlider);
