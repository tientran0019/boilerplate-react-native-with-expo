/* --------------------------------------------------------

* Author Tien Tran
* Email tientran@zellosoft.com
* Phone 0972970075
*
* Created: 2021-09-28 22:42:09
*------------------------------------------------------- */
import 'dayjs/locale/vi';

import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';

import dayjs from 'dayjs';

dayjs.locale('vi');

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

dayjs.tz.setDefault('Asia/Ho_Chi_Minh');

export const FORMAT_DATE = 'DD/MM/YYYY';

export default dayjs;
