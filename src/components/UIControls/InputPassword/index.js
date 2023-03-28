/* eslint-disable no-unused-expressions */
/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-03-27 14:40:43
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import { Feather } from '@expo/vector-icons';
import useTheme from 'src/hooks/useTheme';

import InputText from 'src/components/UIControls/InputText';

const propTypes = {
	innerRef: PropTypes.any,
};

const defaultProps = {
	// classes: {},
};

const InputPassword = (props) => {
	const { innerRef } = props;

	const [type, setType] = React.useState('password');

	const theme = useTheme();

	return (
		<InputText
			{...props}
			ref={innerRef}
			type={type}
			extra={
				type === 'password' ? <Feather name="eye" size={16} color={theme.color_text_placeholder} /> : <Feather name="eye-off" size={16} color={theme.color_text_placeholder} />
			}
			onExtraClick={() => {
				setType(type === 'password' ? 'text' : 'password');
			}}
		/>
	);
};

InputPassword.propTypes = propTypes;

InputPassword.defaultProps = defaultProps;

export default React.forwardRef((props, ref) => {
	return <InputPassword {...props} innerRef={ref} />;
});
