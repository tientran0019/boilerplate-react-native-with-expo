/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-12-30 09:23:56
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import COLORS from 'src/constants/colors';

import Text from 'src/components/Text';
import Touchable from 'src/components/Touchable';

const propTypes = {
	value: PropTypes.string.isRequired,
	children: PropTypes.string.isRequired,
	onPress: PropTypes.func,
	disable: PropTypes.bool,
	isSelected: PropTypes.bool,
};

const defaultProps = {
	onPress: f => f,
	children: '',
	disable: false,
	isSelected: false,
};

const Item = (props) => {
	const { value, children, onPress, isSelected, disable } = props;

	return (
		<Touchable
			onPress={disable ? f => f : () => {
				onPress(value, children);
			}}
			feedback={!disable}
			style={{
				borderRadius: 4,
				borderWidth: 1,
				borderColor: isSelected ? COLORS.primary : COLORS.borderColor,
				marginLeft: 5,
				paddingHorizontal: 15,
				paddingVertical: 3,
				backgroundColor: disable ? COLORS.bgDisableComponent : '#fff',
			}}
		>
			<Text
				style={{
					fontSize: 12,
					color: isSelected ? COLORS.primary : COLORS.gray1,
				}}
			>
				{children}
			</Text>
		</Touchable>
	);
};

Item.propTypes = propTypes;

Item.defaultProps = defaultProps;

export default Item;
