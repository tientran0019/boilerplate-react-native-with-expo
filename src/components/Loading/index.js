/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-05-14 11:27:19
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import { View, ActivityIndicator, Modal } from 'react-native';

import COLORS from 'src/constants/colors';

const propTypes = {
	color: PropTypes.string,
	size: PropTypes.string,
	showIndicator: PropTypes.bool,
	loading: PropTypes.bool,
};

const defaultProps = {
	color: '',
	size: 'large',
	showIndicator: true,
	loading: false,
};

const Loading = (props) => {
	const { color, size, showIndicator, loading, ...loadingProps } = props;

	return (
		<Modal
			transparent
			visible={loading}
		>
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
				}}
			>
				{
					showIndicator &&
					<ActivityIndicator
						color={color || COLORS.primary}
						size={size}
						{...loadingProps}
					/>
				}
			</View>
		</Modal>
	);
};

Loading.propTypes = propTypes;

Loading.defaultProps = defaultProps;

export default Loading;
