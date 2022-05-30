/* --------------------------------------------------------

* Author Tien Tran
* Email tientran@zellosoft.com
* Phone 0972970075
*
* Created: 2021-09-28 22:42:09
*------------------------------------------------------- */

import dayjs from 'src/utils/moment';

const formatDate = (date, format = 'DD/MM/YYYY') => {
	if (!date) {
		return '--';
	}

	return dayjs(date).format(format);
};

export default formatDate;
