/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-04-14 08:55:16
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import Popover from 'react-native-popover-view';
import { useTheme } from '@zellosoft/antd-react-native/lib/style';

import { TouchableOpacity, Platform } from 'react-native';

const propTypes = {
	content: PropTypes.any.isRequired,
	children: PropTypes.any.isRequired,
	style: PropTypes.object,
};

const defaultProps = {
	content: null,
	children: null,
	style: {},
};

const PopoverCpn = (props) => {
	const { content, children, style, ...attrs } = props;

	const theme = useTheme();

	return (
		<Popover
			{...attrs}
			from={(
				<TouchableOpacity>
					{children}
				</TouchableOpacity>
			)}
			popoverStyle={{
				backgroundColor: theme.fill_base,
				padding: 15,
				borderRadius: theme.radius_sm,
				...Platform.select({
					android: {
						elevation: 4,
					},
					default: {
						shadowColor: 'rgba(0, 0, 0, 0.8)',
						shadowOffset: { height: 3, width: 3 },
						shadowOpacity: 0.8,
						shadowRadius: 4,
					},
				}),
				...style,
			}}
		>
			{content}
		</Popover>
	);
};

PopoverCpn.propTypes = propTypes;

PopoverCpn.defaultProps = defaultProps;

export default PopoverCpn;
