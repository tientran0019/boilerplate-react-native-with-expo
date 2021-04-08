/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-06-15 00:53:57
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import { View, Image } from 'react-native';

import Text from 'src/components/Text';

const propTypes = {
	style: PropTypes.object,
	size: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	text: PropTypes.string,
};

const defaultProps = {
	style: {},
	size: 300,
	text: 'No data to show',
};

const Empty = (props) => {
	const { style, size, text } = props;

	return (
		<View
			style={[
				{
					alignItems: 'center',
					flex: 1,
					justifyContent: 'center',
				},
				style,
			]}
		>
			<Image
				style={{
					height: size,
				}}
				resizeMode="contain"
				source={require('./images/img.png')}
			/>
			<Text
				color="note"
				style={{
					marginTop: 20,
					textAlign: 'center',
					fontSize: 12,
				}}
			>
				{text}
			</Text>
		</View>
	);
};

Empty.propTypes = propTypes;

Empty.defaultProps = defaultProps;

export default Empty;
