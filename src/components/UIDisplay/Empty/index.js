/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-03-29 14:29:29
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import { View, Image } from 'react-native';

import Text from 'src/components/UIDisplay/Text';

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
					// flex: 1,
					justifyContent: 'center',
					paddingVertical: 20,
					minHeight: 200,
				},
				style,
			]}
		>
			<Image
				style={{
					width: size,
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
