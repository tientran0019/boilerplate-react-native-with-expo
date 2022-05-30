/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-03-29 14:29:29
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import { View, ActivityIndicator, ImageBackground } from 'react-native';

import { useTheme } from '@zellosoft/antd-react-native/lib/style';

import Text from 'src/components/UIDisplay/Text';

const propTypes = {
	children: PropTypes.any.isRequired,
	action: PropTypes.any,
	style: PropTypes.any,
	innerStyle: PropTypes.any,
	title: PropTypes.string,
	loading: PropTypes.bool,
	bgImg: PropTypes.bool,
};

const defaultProps = {
	children: null,
	title: null,
	action: null,
	style: {},
	innerStyle: {},
	loading: false,
	bgImg: false,
};

const Card = (props) => {
	const { children, bgImg, innerStyle, style, loading, title, action, ...restProps } = props;

	const theme = useTheme();

	const img = React.useMemo(() => {
		return theme.name === 'light' ? require('./images/bg.jpg') : require('./images/bg-dark.jpg');
	}, [theme.name]);

	const BG = bgImg ? ImageBackground : View;

	return (
		<View
			{...restProps}
			style={{
				...theme.shadow_base,
				borderRadius: theme.radius_md,
				backgroundColor: theme.fill_base,
				...style,
			}}
		>
			<BG
				style={{
					padding: 15,
					borderRadius: style.borderRadius ?? theme.radius_md,
					overflow: 'hidden',
					borderWidth: 1,
					borderColor: theme.border_color_base,
					...innerStyle,
				}}
				source={img}
				resizeMode="cover"
			>
				<View
					style={{
						marginBottom: title ? 20 : 0,
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					{
						title ?
							<Text
								type="h4"
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
							color={theme.brand_primary}
							size="small"
						/> :
						children
				}
			</BG>
		</View>
	);
};

Card.propTypes = propTypes;

Card.defaultProps = defaultProps;

export default Card;
