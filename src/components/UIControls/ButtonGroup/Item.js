/* eslint-disable no-nested-ternary */
/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-03-29 14:40:54
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@zellosoft/antd-react-native/lib/style';

import { Badge } from '@zellosoft/antd-react-native';

import Text from 'src/components/UIDisplay/Text';
import View from 'src/components/UIDisplay/View';
import Touchable from 'src/components/UIControls/Touchable';

import Gradient from 'src/components/UIDisplay/Gradient';

const propTypes = {
	value: PropTypes.string.isRequired,
	children: PropTypes.any.isRequired,
	onPress: PropTypes.func,
	disabled: PropTypes.bool,
	isSelected: PropTypes.bool,
	badge: PropTypes.number,
	last: PropTypes.bool,
	style: PropTypes.object,
	innerStyle: PropTypes.object,
	size: PropTypes.oneOf(['small', 'default']),
};

const defaultProps = {
	onPress: f => f,
	children: '',
	disabled: false,
	last: false,
	isSelected: false,
	size: 'default',
	badge: 0,
	style: {},
	innerStyle: {},
};

const Item = (props) => {
	const { value, innerStyle, badge, style, size, children, onPress, isSelected, disabled, last } = props;

	const theme = useTheme();
	const height = (size === 'small' ? theme.button_height_sm + 10 : theme.button_height) - 2;

	const [layout, setLayout] = React.useState({
		height,
		width: 'auto',
	});

	const borderRadius = (style?.borderRadius ?? (layout.height / 2));

	const Compo = isSelected ? Gradient : View;

	return (
		<View
			style={{
				...layout,
				backgroundColor: isSelected ? theme.brand_primary : disabled ? theme.fill_disabled : theme.fill_base,
				borderRadius,
				marginRight: last ? 0 : 10,
				...style,
				...(size === 'small' ? {
					shadowRadius: 2,
					shadowOpacity: 1,
					shadowOffset: {
						height: 2,
						width: 2,
					},
				} : {}),
			}}
		>
			<View
				onLayout={(event) => {
					setLayout(event.nativeEvent.layout);
				}}
			>
				<Compo
					style={{
						borderRadius: borderRadius - 2,
					}}
				>
					<Touchable
						onPress={disabled ? f => f : () => {
							onPress(value, children);
						}}
						feedback={!disabled}
						style={{
							// ...layout,
							minHeight: 32,
							paddingHorizontal: badge > 0 ? 10 : 20,
							paddingVertical: badge > 0 ? 7 : 5,
							borderRadius: borderRadius - 2,
							alignItems: 'center',
							justifyContent: badge > 0 ? 'space-around' : 'center',
							backgroundColor: 'transparent',
							flexDirection: 'row',
							...innerStyle,
						}}
					>
						<Text
							style={{
								fontSize: 12,
								lineHeight: 16,
								color: isSelected ? theme.color_text_base_inverse : theme.color_text_base,
								textAlign: badge > 0 ? 'left' : 'center',
								// flex: 1,
							}}
						>
							{children}
						</Text>
						{
							badge > 0 ?
								<Badge
									text={1}
									size="small"
									styles={{
										textDom: {
											top: -0,
											right: -0,
											position: 'static',
										},
									}}
								/> : null
						}
					</Touchable>
				</Compo>
			</View>
		</View>
	);
};

Item.propTypes = propTypes;

Item.defaultProps = defaultProps;

export default Item;
