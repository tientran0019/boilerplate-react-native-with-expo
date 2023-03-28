/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-03-18 11:07:32
*------------------------------------------------------- */
import { useSelector } from 'react-redux';

import getTheme from 'src/themes';

export default function useTheme() {
	const settings = useSelector(state => state.settings);

	return getTheme(settings.theme);
}
