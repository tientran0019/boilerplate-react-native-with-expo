/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-03-18 11:07:32
*------------------------------------------------------- */
import React from 'react';

import { useSelector } from 'react-redux';

import getTheme from 'src/themes';

// import { actionGetUserAuth } from 'src/redux/actions/auth';

export default function useTheme() {
	const settings = useSelector(state => state.settings);
	console.log('DEV ~ file: useTheme.js:17 ~ useTheme ~ settings:', settings);

	const [theme, setTheme] = React.useState(getTheme(settings.theme));

	React.useEffect(() => {
		setTheme(getTheme(settings.theme));
	}, [settings.theme]);

	return theme;
}
