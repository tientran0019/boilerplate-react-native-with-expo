/* eslint-disable react/style-prop-object */
/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-03-29 14:29:29
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';

import { useTheme } from '@zellosoft/antd-react-native/lib/style';

import { RefreshControl as RefreshControlRN } from 'react-native';

const propTypes = {
};

const defaultProps = {
};

const RefreshControl = (props) => {
	const theme = useTheme();

	return (
		<RefreshControlRN
			colors={[theme.brand_primary]}
			tintColor={theme.brand_primary}
			{...props}
		/>
	);
};

RefreshControl.propTypes = propTypes;

RefreshControl.defaultProps = defaultProps;

export default React.memo(RefreshControl);
