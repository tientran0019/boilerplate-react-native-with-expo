/* eslint-disable no-nested-ternary */
/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-04-14 12:05:52
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@zellosoft/antd-react-native/lib/style';

import View from 'src/components/UIDisplay/View';

const propTypes = {
	children: PropTypes.node.isRequired,
	type: PropTypes.oneOf(['primary', 'ghost', 'danger']),
};

const defaultProps = {
	children: {},
	type: 'primary',
};

const BlockIcon = (props) => {
	const { children, type } = props;
	const theme = useTheme();

	return (
		<View
			style={{
				width: 40,
				height: 40,
				borderRadius: 40,
				backgroundColor: type === 'primary' ? theme.brand_primary : type === 'danger' ? theme.brand_error : theme.fill_base,
				borderColor: theme.brand_primary,
				borderWidth: type === 'ghost' ? 1 : 0,
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			{
				React.isValidElement(children) &&
				React.cloneElement(children, {
					size: 20,
					color: type === 'ghost' ? theme.brand_primary : theme.color_text_base_inverse,
				})
			}
		</View>
	);
};

BlockIcon.propTypes = propTypes;

BlockIcon.defaultProps = defaultProps;

export default BlockIcon;
