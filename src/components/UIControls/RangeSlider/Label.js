/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React, { memo } from 'react';

import Text from 'src/components/UIDisplay/Text';
import View from 'src/components/UIDisplay/View';

const Label = ({ text, theme, ...restProps }) => {
	return (
		<View
			style={{
				alignItems: 'center',
				padding: 8,
				backgroundColor: theme.brand_primary,
				borderRadius: 4,
			}}
			{...restProps}
		>
			<Text
				style={{
					color: theme.color_text_base_inverse,
				}}
			>
				{text}
			</Text>
		</View>
	);
};

export default memo(Label);
