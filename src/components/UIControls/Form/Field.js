/* --------------------------------------------------------

* Author Tien Tran
* Email tientran@zellosoft.com
* Phone 0972970075
*
* Created: 2022-03-29 14:40:38
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';
import { Field } from 'rc-field-form';

import Text from 'src/components/UIDisplay/Text';

const propTypes = {
	children: PropTypes.any.isRequired,
	style: PropTypes.object,
	showError: PropTypes.bool,
	noStyle: PropTypes.bool,
	label: PropTypes.string,
	helperText: PropTypes.string,
	shouldUpdate: PropTypes.any,
	dependencies: PropTypes.array,
};

const defaultProps = {
	style: {},
	showError: true,
	noStyle: false,
	label: '',
	helperText: '',
	shouldUpdate: false,
	dependencies: [],
};

const FieldCpn = (props) => {
	const { style, children, noStyle, showError, label, helperText, dependencies, shouldUpdate, ...attrs } = props;

	if ((shouldUpdate || dependencies?.length > 0) && typeof children === 'function') {
		return (
			<Field
				{...props}
			>
				{
					(control, meta, context) => {
						const node = children(context);
						return (
							<View
								style={noStyle ? {} : {
									marginBottom: 20,
									...style,
								}}
							>
								{
									!!label &&
									<Text
										type="strong"
										style={{
											marginBottom: 5,
											fontSize: 12,
										}}
									>
										{label}
									</Text>
								}
								{
									React.isValidElement(node) ?
										React.cloneElement(
											node,
											{
												error: meta?.errors?.length > 0,
												errorMessage: meta?.errors?.[0],
												...control,
												onChange: (...args) => {
													control.onChange(...args);
													node.props?.onChange?.(...args);
												},
											},
										) :
										node
								}
								{
									!!helperText &&
									<Text
										type="note"
										color="note"
										style={{
											marginTop: 10,
											fontStyle: 'italic',
										}}
									>
										{helperText}
									</Text>
								}
								{
									showError && meta.errors.length > 0 &&
									<Text
										type="note"
										color="danger"
										style={{
											marginTop: 10,
											fontStyle: 'italic',
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
	}

	return (
		<Field
			{...attrs}
		>
			{
				(control, meta, context) => {
					return (
						<View
							style={noStyle ? {} : {
								marginBottom: 20,
								...style,
							}}
						>
							{
								!!label &&
								<Text
									type="strong"
									style={{
										marginBottom: 5,
										fontSize: 12,
									}}
								>
									{label}
								</Text>
							}
							{
								React.isValidElement(children) ?
									React.cloneElement(
										children,
										{
											error: meta?.errors?.length > 0,
											errorMessage: meta?.errors?.[0],
											...control,
											onChange: (...args) => {
												control.onChange(...args);
												children.props?.onChange?.(...args);
											},
										},
									) :
									children
							}
							{
								!!helperText &&
								<Text
									type="note"
									color="note"
									style={{
										marginTop: 10,
										fontStyle: 'italic',
									}}
								>
									{helperText}
								</Text>
							}
							{
								showError && meta.errors.length > 0 &&
								<Text
									type="note"
									color="danger"
									style={{
										marginTop: 10,
										fontStyle: 'italic',
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
