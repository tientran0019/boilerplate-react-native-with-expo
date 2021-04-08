/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-04-08 20:51:02
*------------------------------------------------------- */

import { Dimensions } from 'react-native';
import Constants from 'expo-constants';

const { width, height } = Dimensions.get('window');

export default {
	statusBarHeight: Constants.statusBarHeight,
	window: {
		width,
		height,
	},
	isSmallDevice: width < 375,
};
