/* eslint-disable no-unused-expressions */
/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-03-27 14:40:43
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import { TextareaItem } from '@zellosoft/antd-react-native';
import { useTheme } from '@zellosoft/antd-react-native/lib/style';

import View from 'src/components/UIDisplay/View';

const propTypes = {
	rows: PropTypes.number,
	style: PropTypes.object,
	innerRef: PropTypes.any,
};

const defaultProps = {
	rows: 4,
	style: {},
	innerRef: null,
};

const Textarea = (props) => {
	const { rows, style, innerRef, ...restProps } = props;
	const theme = useTheme();

	return (
		<View
			inner
			style={{
				height: 6 * rows * 4,
				width: '100%',
				backgroundColor: theme.fill_base,
				borderRadius: theme.radius_md,
				justifyContent: 'center',
				borderWidth: 1,
				borderColor: theme.border_color_base,
				padding: 10,
				...style,
			}}
		>
			<TextareaItem
				style={{
					paddingTop: 10,
					backgroundColor: 'transparent',
					fontSize: 14,
				}}
				{...restProps}
				ref={innerRef}
				rows={rows}
				last
			/>
		</View>
	);
};

Textarea.propTypes = propTypes;

Textarea.defaultProps = defaultProps;

export default React.forwardRef((props, ref) => {
	return <Textarea {...props} innerRef={ref} />;
});
