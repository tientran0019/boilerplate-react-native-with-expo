/* --------------------------------------------------------

* Author Tien Tran
* Email tientran@zellosoft.com
* Phone 0972970075
*
* Created: 2021-10-02 22:52:27
*------------------------------------------------------- */

const LOCAL = 'vi-VN';

const format = (val, showUnit = true, digits = 2) => {
	if (!val && val !== 0) {
		return '--';
	}
	return (new Intl.NumberFormat('').format((val * 1).toFixed(digits))) + (showUnit ? ' đ' : '');
};

const formatNumber = (val, digits = 2) => {
	if (!val && val !== 0) {
		return '--';
	}
	return new Intl.NumberFormat(LOCAL).format((val * 1).toFixed(digits));
};

const formatShort = (num, digits = 2) => {
	if (!num && num !== 0) {
		return '--';
	}
	const lookup = [
		{ value: 1, symbol: 'đ' },
		{ value: 1e3, symbol: 'Ngàn' },
		{ value: 1e6, symbol: 'Triệu' },
		{ value: 1e9, symbol: 'Tỷ' },
		{ value: 1e12, symbol: 'Ngàn tỷ' },
		{ value: 1e15, symbol: 'Triệu tỷ' },
		{ value: 1e18, symbol: 'Tỷ tỷ' },
	];

	const item = lookup.slice().reverse().find((el) => {
		return num >= el.value;
	});

	return item ? new Intl.NumberFormat(LOCAL).format((num / item.value).toFixed(digits)) + ' ' + item.symbol : '0';
};

const formatShortMillion = (num, unit = true, digits = 2) => {
	if (!num && num !== 0) {
		return '--';
	}
	return new Intl.NumberFormat(LOCAL).format((num / 1e6).toFixed(digits)) + (unit ? ' Triệu đồng' : '');
};

const currency = {
	formatShort,
	format,
	formatShortMillion,
	formatNumber,
};

export default currency;
