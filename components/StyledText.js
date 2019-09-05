/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2019-09-04 10:29:15
*------------------------------------------------------- */
import React from 'react';
import { Text } from 'react-native';

export function MonoText(props) {
	return (
		<Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />
	);
}
