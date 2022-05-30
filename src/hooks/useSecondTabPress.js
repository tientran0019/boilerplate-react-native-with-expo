/* eslint-disable no-undef */
/* --------------------------------------------------------

* Author Tien Tran
* Email tientran@zellosoft.com
* Phone 0972970075
*
* Created: 2021-10-01 14:38:58
*------------------------------------------------------- */

import React from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';

const useSecondTabPress = (action = f => f) => {
	const isFocused = useIsFocused();
	const navigation = useNavigation();

	React.useEffect(() => {
		const unsubscribe = navigation.addListener('tabPress', (e, a) => {
			// Prevent default behavior
			if (isFocused) {
				e.preventDefault();

				action();
			}
		});

		return unsubscribe;
	}, [action, isFocused, navigation]);
};

export default useSecondTabPress;
