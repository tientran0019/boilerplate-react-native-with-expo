/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-05-06 16:34:29
*------------------------------------------------------- */
import React from 'react';
import PropTypes from 'prop-types';
import useTheme from 'src/hooks/useTheme';

import View from 'src/components/UIDisplay/View';

const propTypes = {
	children: PropTypes.any,
	style: PropTypes.object,
};

const defaultProps = {
	children: {},
	style: {},
};

const Item = (props) => {
	const { children, style } = props;
	const theme = useTheme();

	return (
		<View style={{ borderRadius: theme.radius_md, ...style }}>{children}</View>
	);
};

Item.displayName = 'SkeletonPlaceholderItem';

Item.propTypes = propTypes;

Item.defaultProps = defaultProps;

export default Item;
