/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-12-29 08:16:52
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import { View, ActivityIndicator } from 'react-native';

import COLORS from 'src/constants/colors';
import Text from 'src/components/Text';

const propTypes = {
	children: PropTypes.any.isRequired,
	action: PropTypes.any,
	style: PropTypes.any,
	title: PropTypes.string,
	loading: PropTypes.bool,
};

const defaultProps = {
	children: null,
	title: null,
	action: null,
	style: {},
	loading: false,
};

const Box = (props) => {
	const { children, style, loading, title, action } = props;

	return (
		<View
			style={[
				{
					borderRadius: 10,
					backgroundColor: '#F6F6F6',
					padding: 15,
				},
				style,
			]}
		>
			<View
				style={{
					marginBottom: title ? 15 : 0,
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				{
					title ?
						<Text
							style={{
								fontWeight: 'bold',
								color: COLORS.primary,
							}}
						>
							{title}
						</Text> :
						null
				}
				{
					action
				}
			</View>
			{
				loading ?
					<ActivityIndicator
						color={COLORS.primary}
						size="small"
					/> :
					children
			}
		</View>
	);
};

Box.propTypes = propTypes;

Box.defaultProps = defaultProps;

export default Box;
