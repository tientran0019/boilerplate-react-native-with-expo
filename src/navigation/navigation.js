/* eslint-disable no-unused-expressions */
/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-03-23 17:27:24
*------------------------------------------------------- */

import React from 'react';
import { StackActions } from '@react-navigation/native';

export const isReadyRef = React.createRef();

export const navigationRef = React.createRef();

export default {
	navigate: (name, params) => {
		if (isReadyRef.current && navigationRef.current) {
			navigationRef.current?.navigate(name, params);
		}
	},
	push: (...args) => {
		if (isReadyRef.current && navigationRef.current) {
			navigationRef.current?.dispatch(StackActions.push(...args));
		}
	},
};
