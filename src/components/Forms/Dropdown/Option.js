/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-04-12 15:28:21
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import Text from 'src/components/Text';
import Touchable from 'src/components/Touchable';

import COLORS from 'src/constants/colors';

const propTypes = {
	value: PropTypes.string,
	children: PropTypes.string,
	onPress: PropTypes.func,
	onClose: PropTypes.func,
};

const defaultProps = {
	value: null,
	children: null,
	onPress: f => f,
	onClose: f => f,
};

const SelectOption = (props) => {
	const { value, children, onPress, onClose } = props;

	return (
		<Touchable
			onPress={() => {
				onClose();
				setTimeout(() => {
					onPress(value, children);
				}, 100);
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
					// fontFamily: 'SF-Pro-Text-Regular',
					fontSize: 16,
					color: COLORS.gray1,
				}}
			>
				{children}
			</Text>
		</Touchable>
	);
};

SelectOption.propTypes = propTypes;

SelectOption.defaultProps = defaultProps;

export default SelectOption;
