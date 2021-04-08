/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-03-23 16:47:02
*------------------------------------------------------- */
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';

import dayjs from 'dayjs';

dayjs.locale('en');

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

export default dayjs;
