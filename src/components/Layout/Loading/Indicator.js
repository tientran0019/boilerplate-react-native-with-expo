/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-03-29 14:29:29
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@zellosoft/antd-react-native/lib/style';

import { ActivityIndicator, View } from 'react-native';

const propTypes = {
	size: PropTypes.string,
	loading: PropTypes.bool,
	absolute: PropTypes.bool,
};

const defaultProps = {
	size: 'small',
	loading: false,
	absolute: false,
};

const Indicator = (props) => {
	const { size, loading, absolute, ...attrs } = props;
	const theme = useTheme();

	if (absolute) {
		return (
			<View
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					position: 'absolute',
					top: 0,
					right: 0,
					bottom: 0,
					left: 0,
					zIndex: 999999,
					elevation: 999999,
				}}
			>
				<ActivityIndicator
					color={theme.brand_primary}
					size={size}
					{...attrs}
				/>
			</View>
		);
	}

	return (
		<ActivityIndicator
			color={theme.brand_primary}
			size={size}
			{...attrs}
		/>
	);
};

Indicator.propTypes = propTypes;

Indicator.defaultProps = defaultProps;

export default Indicator;
