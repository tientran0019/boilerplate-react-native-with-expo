/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
import React, { memo } from 'react';
import { View } from 'react-native';

const RailSelected = ({ theme }) => {
	return (
		<View
			style={{
				height: 8,
				backgroundColor: theme.brand_primary,
				borderRadius: 8,
			}}
		/>

	);
};

export default memo(RailSelected);
