/* eslint-disable no-nested-ternary */
/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-04-10 19:51:32
*------------------------------------------------------- */

import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import useUpdateEffect from 'react-use/lib/useUpdateEffect';

import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import BOX_SHADOW from 'src/constants/box-shadow';
import COLORS from 'src/constants/colors';

import Touchable from 'src/components/Touchable';

const propTypes = {
	style: PropTypes.object,
	innerStyle: PropTypes.object,
	onChange: PropTypes.func,
	value: PropTypes.bool,
	disabled: PropTypes.bool,
	readOnly: PropTypes.bool,
};

const defaultProps = {
	style: {},
	innerStyle: {},
	onChange: f => f,
	value: false,
	disabled: false,
	readOnly: false,
};

const CheckBox = (props) => {
	const { style, innerStyle, onChange = f => f, value, disabled, readOnly } = props;

	const [isChecked, setIsCheck] = useState(value);

	useUpdateEffect(() => {
		onChange(isChecked);
	}, [isChecked]);

	useUpdateEffect(() => {
		setIsCheck(value);
	}, [value]);

	const handleCheck = useCallback(() => {
		setIsCheck((val) => {
			return !val;
		});
	}, []);

	return (
		<Touchable
			onPress={(disabled || readOnly) ? f => f : handleCheck}
			feedback={!(disabled || readOnly)}
		>
			<View
				style={[
					style,
					{
						...BOX_SHADOW.component,
					},
				]}
			>
				<View
					style={[
						{
							backgroundColor: disabled ? COLORS.bgDisableComponent : isChecked ? COLORS.primary : '#fff',
							borderColor: '#E4E4E4',
							borderWidth: 1,
							borderRadius: 6,
							width: 24,
							height: 24,
							alignItems: 'center',
							justifyContent: 'center',
						},
						innerStyle,
					]}
				>
					<Feather
						name="check"
						size={16}
						color="#fff"
						style={{
							// lineHeight: 25,
						}}
					/>
				</View>
			</View>
		</Touchable>
	);
};

CheckBox.propTypes = propTypes;

CheckBox.defaultProps = defaultProps;

export default CheckBox;
