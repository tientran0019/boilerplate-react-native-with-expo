/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email ductienas@gmail.com
* Phone 0972970075
*
* Created: 2019-01-09 22:08:12
*------------------------------------------------------- */

import moment from 'moment';

moment.locale('vi');

moment.prototype.formatCustom = function (date) { // eslint-disable-line
	const diff = moment().diff(this, 'days');
	if (diff < 5) {
		return this.fromNow();
	}
	return this.format('D [Tháng] M [lúc] HH:mm');
};

export default moment;
