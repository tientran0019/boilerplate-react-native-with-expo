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

import { Switch } from 'react-native';

import BOX_SHADOW from 'src/constants/box-shadow';
import COLORS from 'src/constants/colors';


const propTypes = {
	style: PropTypes.object,
	onChange: PropTypes.func,
	value: PropTypes.bool,
};

const defaultProps = {
	style: {},
	onChange = f => f: f => f,
	value: false,
};

const SwitchCpn = (props) => {
	const { style, onChange = f => f, value } = props;

	const [isChecked, setIsCheck] = useState(value);

	useUpdateEffect(() => {
		onChange(isChecked);
	}, [isChecked]);

	const handleToggleSwitch = useCallback(() => {
		setIsCheck((val) => {
			return !val;
		});
	}, []);

	return (
		<Switch
			trackColor={{ false: '#ecebeb', true: '#ecebeb' }}
			thumbColor={isChecked ? COLORS.primary : COLORS.gray4}
			ios_backgroundColor="#fff"
			onValueChange={handleToggleSwitch}
			value={isChecked}
			style={[
				style,
				{
					...BOX_SHADOW.component,
					borderColor: '#E4E4E4',
					borderWidth: 0.5,
					transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
				},
			]}
		/>
	);
};

SwitchCpn.propTypes = propTypes;

SwitchCpn.defaultProps = defaultProps;

export default SwitchCpn;
