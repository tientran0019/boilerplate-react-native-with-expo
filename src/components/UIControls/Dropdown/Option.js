/* eslint-disable no-nested-ternary */
/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-03-29 14:40:54
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@zellosoft/antd-react-native/lib/style';

import { Feather } from '@expo/vector-icons';

import Text from 'src/components/UIDisplay/Text';
import View from 'src/components/UIDisplay/View';
import Touchable from 'src/components/UIControls/Touchable';

const propTypes = {
	value: PropTypes.string,
	children: PropTypes.any,
	icon: PropTypes.any,
	onPress: PropTypes.func,
	isSelected: PropTypes.bool,
	last: PropTypes.bool,
	disabled: PropTypes.bool,
	important: PropTypes.bool,
	sub: PropTypes.string,
};

const defaultProps = {
	value: null,
	children: null,
	icon: null,
	onPress: f => f,
	last: false,
	isSelected: false,
	disabled: false,
	important: false,
	sub: null,
};

const SelectOption = (props) => {
	const { value, children, icon, sub, important, disabled, onPress, last, isSelected } = props;
	const theme = useTheme();

	return (
		<Touchable
			onPress={disabled ? f => f : () => {
				onPress(value, isSelected);
			}}
			style={{
				minHeight: 50,
				paddingVertical: 10,
				paddingHorizontal: 20,
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between',
				borderBottomColor: theme.border_color_base,
				borderBottomWidth: last ? 0 : 1,
				opacity: disabled ? 0.5 : 1,
			}}
		>
			{
				icon ?
					<Text
						color={important ? 'danger' : 'normal'}
						style={{
							lineHeight: 30,
							marginRight: 15,
						}}
					>
						{icon}
					</Text> :
					null
			}
			<View
				style={{
					flex: 1,
				}}
			>
				<View
					type={isSelected || important ? 'strong' : 'text'}
					color={important ? 'danger' : isSelected ? 'primary' : 'normal'}
				>
					{children}
				</View>
				{
					sub ?
						<Text
							type="note"
							color="note"
							style={{
								marginTop: 0,
							}}
						>
							{sub}
						</Text> :
						null
				}
			</View>
			{
				isSelected &&
				<Text
					color="success"
				>
					<Feather
						name="check"
						size={20}
					/>
				</Text>
			}
		</Touchable>
	);
};

SelectOption.propTypes = propTypes;

SelectOption.defaultProps = defaultProps;

export default SelectOption;
