/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-04-14 12:05:52
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@zellosoft/antd-react-native/lib/style';

import View from 'src/components/UIDisplay/View';

const propTypes = {
	size: PropTypes.oneOf(['small', 'default']),
	style: PropTypes.object,
	value: PropTypes.number,
};

const defaultProps = {
	size: 'default',
	style: {},
	value: 0,
};

const ProgressBar = (props) => {
	const { style, size, value } = props;

	const theme = useTheme();

	const height = size === 'small' ? 10 : 15;

	return (
		<View
			style={{
				...style,
			}}
		>
			<View
				inner
				style={{
					height,
					borderRadius: height / 2,
					backgroundColor: theme.fill_base,
					shadowRadius: 1,
					elevation: 1,
					shadowOpacity: 0.5,
					shadowOffset: {
						height: 1,
						width: 1,
					},
					justifyContent: 'center',
				}}
			>
				<View
					style={{
						borderRadius: !value || value === 0 ? height / 2 : 0,
						width: !value || value === 0 ? height : value + '%',
						overflow: 'hidden',
						height,
						borderTopLeftRadius: height / 2,
						borderBottomLeftRadius: height / 2,
						backgroundColor: theme.brand_primary,

					}}
				/>
			</View>
		</View>
	);
};

ProgressBar.propTypes = propTypes;

ProgressBar.defaultProps = defaultProps;

export default ProgressBar;
