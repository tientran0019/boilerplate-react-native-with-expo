/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
import React, { memo } from 'react';
import { View } from 'react-native';

const Notch = ({ theme, ...rest }) => {
	return (
		<View
			style={{
				width: 8,
				height: 8,
				borderLeftColor: 'transparent',
				borderRightColor: 'transparent',
				borderTopColor: theme.brand_primary,
				borderLeftWidth: 4,
				borderRightWidth: 4,
				borderTopWidth: 8,
			}}
			{...rest}
		/>
	);
};

export default memo(Notch);
