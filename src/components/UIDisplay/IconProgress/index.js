/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-04-24 22:00:02
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';
import useTheme from 'src/hooks/useTheme';

import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { View } from 'react-native';

import Text from 'src/components/UIDisplay/Text';

const propTypes = {
	children: PropTypes.any,
	style: PropTypes.object,
	value: PropTypes.number,
	size: PropTypes.oneOf(['small', 'default', 'large']),
};

const defaultProps = {
	children: null,
	size: 'default',
	value: 0,
	style: {},
};

const configs = {
	small: {
		size: 50,
		width: 3,
		iconSize: 18,
	},
	default: {
		size: 100,
		width: 4,
		iconSize: 32,
	},
	large: {
		size: 150,
		width: 5,
		iconSize: 46,
	},
};

const IconProgress = (props) => {
	const { children, size, value, style } = props;
	const theme = useTheme();

	return (
		<View
			style={{
				...style,
			}}
		>
			<AnimatedCircularProgress
				{...configs[size]}
				fill={value}
				tintColor={theme.brand_primary}
				backgroundColor={theme.border_color_component}
				rotation={0}
			>
				{
					() => {
						return (
							<Text
								color="primary"
								style={{
									lineHeight: configs[size].iconSize,
								}}
							>
								{
									React.isValidElement(children) &&
									React.cloneElement(children, { size: configs[size].iconSize })
								}
							</Text>
						);
					}
				}
			</AnimatedCircularProgress>
		</View>
	);
};

IconProgress.propTypes = propTypes;

IconProgress.defaultProps = defaultProps;

export default IconProgress;
