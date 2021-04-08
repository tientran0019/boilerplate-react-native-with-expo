/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-04-10 12:02:09
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import { Text, Image, View } from 'react-native';

import COLORS from 'src/constants/colors';

import formatS3Url from 'src/utils/format-s3-url';

const propTypes = {
	style: PropTypes.object,
	size: PropTypes.number,
	image: PropTypes.string,
	name: PropTypes.string,
};

const defaultProps = {
	style: {},
	size: 50,
	image: '',
	name: '',
};

const Avatar = (props) => {
	const { style, size, image, name } = props;

	return (
		<View
			style={[
				{
					borderRadius: size / 2,
				},
				style,
				{
					width: size,
					height: size,
					borderWidth: 1,
					borderColor: COLORS.primary,
					backgroundColor: COLORS.borderColor,
					overflow: 'hidden',
					alignItems: 'center',
					justifyContent: 'center',
				},
			]}
		>
			{
				image ?
					<Image
						style={{
							height: size - 2,
							width: size - 2,
							borderRadius: style.borderRadius || size / 2,
						}}
						resizeMode="cover"
						source={image ? { uri: formatS3Url(image) } : {}}
					/> :
					<Text
						style={{
							textAlign: 'center',
							color: COLORS.gray2,
							textTransform: 'capitalize',
						}}
					>
						{name?.slice(0, 2)}
					</Text>
			}
		</View>
	);
};

Avatar.propTypes = propTypes;

Avatar.defaultProps = defaultProps;

export default Avatar;
