/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-04-04 12:34:18
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import { useTheme } from '@zellosoft/antd-react-native/lib/style';

import { ImageBackground } from 'react-native';

const propTypes = {
	children: PropTypes.any.isRequired,
};

const defaultProps = {
	// classes: {},
};

const BackgroundPrimary = (props) => {
	const { children } = props;

	const theme = useTheme();

	const bgImg = React.useMemo(() => {
		return theme.name === 'light' ? require('./images/bg.jpg') : require('./images/bg-dark.jpg');
	}, [theme.name]);

	return (
		<ImageBackground
			style={{
				flex: 1,
			}}
			source={bgImg}
			resizeMode="cover"
		>
			{children}
		</ImageBackground>
	);
};

BackgroundPrimary.propTypes = propTypes;

BackgroundPrimary.defaultProps = defaultProps;

export default BackgroundPrimary;
