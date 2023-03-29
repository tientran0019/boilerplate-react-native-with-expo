/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-03-18 11:07:32
*------------------------------------------------------- */
import { useSelector } from 'react-redux';

import getNavConfigs from 'src/themes/getNavConfigs';
import getTheme from 'src/themes';

export default function useNavConfigs(configs = {}) {
	const settings = useSelector(state => state.settings);

	return { ...getNavConfigs(getTheme(settings.theme)), ...configs };
}
