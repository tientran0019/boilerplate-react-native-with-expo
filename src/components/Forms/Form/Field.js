/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-04-27 17:33:32
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';
import { Field } from 'rc-field-form';

import COLORS from 'src/constants/colors';

import Text from 'src/components/Text';

const propTypes = {
	children: PropTypes.any.isRequired,
	style: PropTypes.object,
	showError: PropTypes.bool,
	label: PropTypes.string,
	helperText: PropTypes.string,
	shouldUpdate: PropTypes.any,
	dependencies: PropTypes.array,
};

const defaultProps = {
	style: {},
	showError: true,
	label: '',
	helperText: '',
	shouldUpdate: false,
	dependencies: [],
};

const FieldCpn = (props) => {
	const { style, children, showError, label, helperText, dependencies, shouldUpdate, ...attrs } = props;

	if ((shouldUpdate || dependencies?.length > 0) && typeof children === 'function') {
		return (
			<Field
				{...props}
			>
				{
					(control, meta, context) => {
						const node = children(context);
						return React.isValidElement(node) ? React.cloneElement(node, { error: meta?.errors?.length > 0, errorMessage: meta?.errors?.[0], ...control }) : node;
					}
				}
			</Field>
		);
	}

	return (
		<Field
			{...attrs}
		>
			{
				(control, meta, context) => {
					return (
						<View
							style={style}
						>
							{
								!!label &&
								<Text
									type="heading-6-sb"
									style={{
										marginBottom: 5,
										color: COLORS.gray1,
										fontSize: 13,
									}}
								>
									{label}
								</Text>
							}
							{React.cloneElement(children, { error: meta?.errors?.length > 0, errorMessage: meta?.errors?.[0], ...control })}
							{
								!!helperText &&
								<Text
									type="small-text"
									style={{
										marginTop: 5,
										color: COLORS.gray2,
									}}
								>
									{helperText}
								</Text>
							}
							{
								showError && meta.errors.length > 0 &&
								<Text
									type="small-text"
									style={{
										marginTop: 5,
										color: COLORS.errorBackground,
									}}
								>
									{meta?.errors?.[0]}
								</Text>
							}
						</View>
					);
				}
			}
		</Field>
	);
};

FieldCpn.propTypes = propTypes;

FieldCpn.defaultProps = defaultProps;

export default FieldCpn;
