/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-03-29 14:40:54
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

// import useUpdateEffect from 'react-use/lib/useUpdateEffect';
import useTheme from 'src/hooks/useTheme';

import { Switch } from 'react-native';

const propTypes = {
	style: PropTypes.object,
	onChange: PropTypes.func,
	value: PropTypes.bool,
};

const defaultProps = {
	style: {},
	onChange: f => f,
	value: false,
};

const SwitchCpn = (props) => {
	const { style, onChange = f => f, value, ...attrs } = props;

	const theme = useTheme();

	return (
		<Switch
			trackColor={{ false: theme.switch_unchecked, true: theme.switch_fill }}
			thumbColor="#fff"
			ios_backgroundColor="#fff"
			onValueChange={onChange}
			value={value}
			style={[
				style,
				{
					borderColor: '#E4E4E4',
					borderWidth: 0.5,
					transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
				},
			]}
			{...attrs}
		/>
	);
};

SwitchCpn.propTypes = propTypes;

SwitchCpn.defaultProps = defaultProps;

export default SwitchCpn;
