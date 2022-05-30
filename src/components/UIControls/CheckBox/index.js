/* eslint-disable no-nested-ternary */
/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-03-29 14:29:29
*------------------------------------------------------- */

import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import useUpdateEffect from 'react-use/lib/useUpdateEffect';
import { useTheme } from '@zellosoft/antd-react-native/lib/style';

import { View, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Touchable from 'src/components/UIControls/Touchable';
import Text from 'src/components/UIDisplay/Text';

const propTypes = {
	style: PropTypes.object,
	innerStyle: PropTypes.object,
	onChange: PropTypes.func,
	value: PropTypes.bool,
	label: PropTypes.any,
	disabled: PropTypes.bool,
	error: PropTypes.bool,
	readOnly: PropTypes.bool,
};

const defaultProps = {
	style: {},
	innerStyle: {},
	onChange: f => f,
	value: false,
	disabled: false,
	label: null,
	error: false,
	readOnly: false,
};

const CheckBox = (props) => {
	const { style, innerStyle, label, error, onChange = f => f, value, disabled, readOnly } = props;

	const [isChecked, setIsCheck] = useState(value);
	const theme = useTheme();

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
			style={{
				...style,
				flexDirection: 'row',
				alignItems: 'center',
			}}
		>
			<View
				style={[
					{
						...Platform.select({
							android: {
								elevation: 1,
							},
							default: {
								shadowColor: 'rgba(0, 0, 0, 0.2)',
								shadowOffset: { height: 2, width: 2 },
								shadowOpacity: 0.5,
								shadowRadius: 2,
							},
						}),
						opacity: disabled ? 0.5 : 1,
					},
				]}
			>
				<View
					style={[
						{
							backgroundColor: disabled ? theme.fill_disabled : isChecked ? theme.brand_primary : theme.fill_base,
							borderColor: error ? theme.brand_error : theme.border_color_base,
							borderWidth: 1,
							borderRadius: 6,
							width: 20,
							height: 20,
							alignItems: 'center',
							justifyContent: 'center',
						},
						innerStyle,
					]}
				>
					<Feather
						name="check"
						size={16}
						color={isChecked ? theme.color_text_base_inverse : theme.fill_base}
						style={{
							// lineHeight: 25,
						}}
					/>
				</View>
			</View>
			{
				label ?
					<Text
						style={{
							marginLeft: 10,
						}}
					>
						I have read and understood this agreement
					</Text> :
					null
			}
		</Touchable>
	);
};

CheckBox.propTypes = propTypes;

CheckBox.defaultProps = defaultProps;

export default CheckBox;
