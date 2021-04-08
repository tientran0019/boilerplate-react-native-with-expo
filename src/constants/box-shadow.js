/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-04-08 20:51:15
*------------------------------------------------------- */

import { Platform } from 'react-native';

export default {
	'component': {
		...Platform.select({
			android: {
				elevation: 0.4,
			},
			default: {
				shadowColor: 'rgba(0, 0, 0, 0.05)',
				shadowOffset: { height: 1, width: 1 },
				shadowOpacity: 0.8,
				shadowRadius: 2,
			},
		}),
	},
	'button': {
		...Platform.select({
			android: {
				elevation: 2,
			},
			default: {
				shadowColor: 'rgba(0, 0, 0, 0.2)',
				shadowOffset: { height: 2, width: 2 },
				shadowOpacity: 0.8,
				shadowRadius: 4,
			},
		}),
	},
	'card': {
		...Platform.select({
			android: {
				elevation: 8,
			},
			default: {
				shadowColor: 'rgba(0, 0, 0, 0.3)',
				shadowOffset: { height: 2, width: 2 },
				shadowOpacity: 0.8,
				shadowRadius: 8,
			},
		}),
	},
};
