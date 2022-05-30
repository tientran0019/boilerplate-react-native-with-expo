/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-03-29 14:40:46
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';
import Form, { List } from 'rc-field-form';

import FieldCpn from './Field';

const propTypes = {
	children: PropTypes.any.isRequired,
	style: PropTypes.object,
};

const defaultProps = {
	style: {},
};

const FormCpn = (props) => {
	const { style, children, ...attrs } = props;

	return (
		<Form
			component={View}
			{...attrs}
			style={[
				{
					width: '100%',
				},
				style,
			]}
		>
			{children}
		</Form>
	);
};

FormCpn.Field = FieldCpn;
FormCpn.List = List;

FormCpn.useForm = Form.useForm;

FormCpn.propTypes = propTypes;

FormCpn.defaultProps = defaultProps;

export default FormCpn;
