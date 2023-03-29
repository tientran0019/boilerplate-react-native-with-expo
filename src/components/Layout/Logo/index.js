/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-03-29 14:29:29
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import { Image } from 'react-native';

const propTypes = {
	style: PropTypes.object,
	size: PropTypes.number,
	fullText: PropTypes.bool,
	contrast: PropTypes.bool,
};

const defaultProps = {
	style: {},
	size: 50,
	fullText: true,
	contrast: false,
};

const Logo = (props) => {
	const { style, size, fullText, contrast } = props;

	const src = require('./images/logo.png');

	// if (contrast) {
	// 	src = require('./images/logo-contrast.png');
	// }

	// if (fullText) {
	// 	src = require('./images/logo-fulltext.png');

	// 	if (contrast) {
	// 		src = require('./images/logo-fulltext-contrast.png');
	// 	}
	// }

	return (
		<Image
			style={[
				{
					width: 'auto',
					height: size,
				},
				style,
			]}
			resizeMode="contain"
			source={src}
		/>
	);
};

Logo.propTypes = propTypes;

Logo.defaultProps = defaultProps;

export default Logo;
