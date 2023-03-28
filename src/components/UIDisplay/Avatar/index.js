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

import { Text, Image, View } from 'react-native';

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
	const theme = useTheme();

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
					borderColor: theme.brand_primary,
					backgroundColor: theme.border_color_base,
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
						source={image ? { uri: image } : {}}
					/> :
					<Text
						style={{
							textAlign: 'center',

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
