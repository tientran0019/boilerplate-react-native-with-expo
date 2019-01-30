/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email ductienas@gmail.com
* Phone 0972970075
*
* Created: 2019-01-30 13:04:20
*------------------------------------------------------- */

import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
	window: {
		width,
		height,
	},
	isSmallDevice: width < 375,
};
