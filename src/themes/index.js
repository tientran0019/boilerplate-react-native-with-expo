/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-04-01 21:36:35
*------------------------------------------------------- */

import light from './default';
import dark from './dark';

const getTheme = (theme = 'light') => {
	if (theme === 'dark') {
		return dark;
	}

	return light;
};

export default getTheme;
