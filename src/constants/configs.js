/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-04-08 20:51:09
*------------------------------------------------------- */
import Constants from 'expo-constants';

console.log('env', Constants.manifest?.extra);

export default {
	...Constants.manifest?.extra || {},
};
