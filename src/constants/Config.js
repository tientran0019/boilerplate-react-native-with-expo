/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email ductienas@gmail.com
* Phone 0972970075
*
* Created: 2019-01-30 13:03:40
*------------------------------------------------------- */

import { Platform } from 'react-native';

export default {
	rateUsUrl: Platform.OS === 'ios' ? 'https://apple.com' : 'https://google.com',
};
