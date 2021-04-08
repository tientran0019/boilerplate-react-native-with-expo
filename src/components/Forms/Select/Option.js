/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-04-12 15:28:21
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import { Feather } from '@expo/vector-icons';

import Text from 'src/components/Text';
import Touchable from 'src/components/Touchable';

import COLORS from 'src/constants/colors';

const propTypes = {
	value: PropTypes.string.isRequired,
	children: PropTypes.string.isRequired,
	onPress: PropTypes.func,
	isSelected: PropTypes.bool,
};

const defaultProps = {
	onPress: f => f,
	isSelected: false,
};

const SelectOption = (props) => {
	const { value, children, onPress, isSelected } = props;

	return (
		<Touchable
			onPress={() => {
				onPress(value, children);
			}}
			style={{
				minHeight: 50,
				paddingVertical: 10,
				paddingHorizontal: 20,
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between',
			}}
		>
			<Text
				style={{
					flex: 1,
					// fontFamily: isSelected ? 'SF-Pro-Text-Semibold' : 'SF-Pro-Text-Regular',
					fontWeight: isSelected ? 'bold' : 'normal',
					fontSize: 16,
					color: isSelected ? COLORS.black : COLORS.gray1,
				}}
			>
				{children}
			</Text>
			{
				isSelected &&
				<Feather
					name="check"
					size={20}
					color={COLORS.successBackground}
				/>
			}
		</Touchable>
	);
};

SelectOption.propTypes = propTypes;

SelectOption.defaultProps = defaultProps;

export default SelectOption;
