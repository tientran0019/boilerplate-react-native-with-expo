/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-03-29 14:29:29
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import {
	// TouchableNativeFeedback,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Platform,
	View,
} from 'react-native';

const propTypes = {
	children: PropTypes.any.isRequired,
	feedback: PropTypes.bool,
	style: PropTypes.any,
};

const defaultProps = {
	feedback: true,
	style: {},
};

const Touchable = (props) => {
	const { children, feedback, style, ...attr } = props;

	const TouchableComponent = feedback ? Platform.select({
		android: TouchableOpacity,
		default: TouchableOpacity,
	}) : TouchableWithoutFeedback;

	return (
		<TouchableComponent
			{...attr}
			delayPressIn={0}
			activeOpacity={0.7}
			accessibilityRole="button"
			style={TouchableComponent === TouchableOpacity && style}
		>
			{
				TouchableComponent === TouchableOpacity ?
					children :
					<View
						style={style}
					>
						{children}
					</View>
			}
		</TouchableComponent>
	);
};

Touchable.propTypes = propTypes;

Touchable.defaultProps = defaultProps;

export default Touchable;
