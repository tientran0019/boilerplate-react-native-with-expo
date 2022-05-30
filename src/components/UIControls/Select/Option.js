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
	value: PropTypes.string.isRequired,
	children: PropTypes.any.isRequired,
	onPress: PropTypes.func,
	isSelected: PropTypes.bool,
	last: PropTypes.bool,
	disabled: PropTypes.bool,
	important: PropTypes.bool,
	icon: PropTypes.any,
	sub: PropTypes.string,
};

const defaultProps = {
	onPress: f => f,
	isSelected: false,
	last: false,
	disabled: false,
	important: false,
	icon: null,
	sub: null,
};

const SelectOption = (props) => {
	const { value, last, disabled, icon, sub, important, children, onPress, isSelected } = props;
	const theme = useTheme();

	return (
		<Touchable
			onPress={() => {
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

export default React.memo(SelectOption);
