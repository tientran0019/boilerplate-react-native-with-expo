/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-03-29 14:29:29
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';
import useTheme from 'src/hooks/useTheme';

import { View, Modal, ActivityIndicator } from 'react-native';

import Text from 'src/components/UIDisplay/Text';

const propTypes = {
	size: PropTypes.string,
	showIndicator: PropTypes.bool,
	loading: PropTypes.bool,
	style: PropTypes.object,
};

const defaultProps = {
	size: 'large',
	showIndicator: true,
	loading: false,
	style: {},
};

const Loading = (props) => {
	const { size, showIndicator, loading, style } = props;

	const theme = useTheme();

	return (
		<Modal
			transparent
			visible={loading}
		>
			<View
				style={{
					...style,
					justifyContent: 'center',
					alignItems: 'center',
					position: 'absolute',
					top: 0,
					right: 0,
					bottom: 0,
					left: 0,
					zIndex: 999999,
				}}
			>
				{
					showIndicator &&
					<>
						<ActivityIndicator
							color={theme.brand_primary}
							size={size}
						/>
						<Text>Loading...</Text>
					</>
				}
			</View>
		</Modal>
	);
};

Loading.propTypes = propTypes;

Loading.defaultProps = defaultProps;

export default Loading;
