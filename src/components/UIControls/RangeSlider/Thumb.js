/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
import React, { memo } from 'react';
import { View, Platform } from 'react-native';

const THUMB_RADIUS = 10;

const Thumb = ({ theme, mark, active }) => {
	if (!active) {
		return (
			<View
				style={{
					width: mark ? 10 : THUMB_RADIUS * 2,
					height: mark ? 10 : THUMB_RADIUS * 2,
					borderRadius: THUMB_RADIUS,
					borderWidth: 1,
					borderColor: mark ? theme.brand_primary : theme.fill_highlight,
					backgroundColor: theme.fill_base,
				}}
			/>
		);
	}
	return (
		<View
			style={{
				width: THUMB_RADIUS * 2,
				height: THUMB_RADIUS * 2,
				borderRadius: THUMB_RADIUS,
				borderWidth: 1,
				borderColor: theme.color_text_base_inverse,
				backgroundColor: theme.brand_primary,
				...Platform.select({
					android: {
						elevation: 2,
					},
					default: {
						shadowColor: 'rgba(0, 0, 0, 0.2)',
						shadowOffset: { height: 2, width: 2 },
						shadowOpacity: 0.8,
						shadowRadius: 4,
					},
				}),
			}}
		/>
	);
};

export default memo(Thumb);
