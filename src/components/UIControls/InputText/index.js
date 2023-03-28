/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-04-04 10:16:54
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import { InputItem } from '@zellosoft/antd-react-native';
import useTheme from 'src/hooks/useTheme';

import View from 'src/components/UIDisplay/View';
import Text from 'src/components/UIDisplay/Text';

// import COLORS from 'src/constants/colors';

const propTypes = {
	// navigation: PropTypes.object.isRequired,
	style: PropTypes.object,
	icon: PropTypes.node,
	disabled: PropTypes.bool,
	label: PropTypes.string,
	innerRef: PropTypes.any,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	size: PropTypes.oneOf([
		'small',
		'default',
	]),
};

const defaultProps = {
	style: {},
	icon: null,
	value: '',
	innerRef: null,
	label: '',
	size: 'default',
};

const InputText = (props) => {
	const { style, icon, label, size, disabled, value, innerRef, ...restProps } = props;
	const theme = useTheme();

	const height = React.useMemo(() => {
		return size === 'small' ? theme.button_height_sm : theme.button_height;
	}, [size, theme.button_height, theme.button_height_sm]);

	return (
		<View
			style={{
				width: '100%',
				...style,
			}}
		>
			{
				label ?
					<Text
						type="strong"
						color="note"
						style={{
							marginBottom: 5,
							fontSize: 12,
						}}
					>
						{label}
					</Text> :
					null
			}
			<View
				style={{
					height,
					width: style.width ?? '100%',
					backgroundColor: disabled ? theme.fill_disabled : theme.fill_base,
					borderRadius: style.borderRadius || theme.radius_md,
					borderWidth: 0.5,
					borderColor: theme.border_color_component,
					// justifyContent: 'center',
					// borderColor: '#2E1B48',
					// borderWidth: 1,
				}}
			>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						height,
					}}
				>
					{
						icon ?
							<Text
								style={{
									lineHeight: 30,
									paddingLeft: 15,
								}}
								color="note"
							>
								{
									React.isValidElement(icon) &&
									React.cloneElement(icon, {
										style: {
											...icon.props.style || {},
										},
										size: size === 'small' ? 16 : 22,
									})
								}
							</Text> :
							null
					}
					<View
						style={{
							marginLeft: icon ? -10 : 0,
							width: '100%',
						}}
					>
						<InputItem
							style={{
								paddingVertical: 5,
								flex: 1,
								fontSize: 14,
							}}
							returnKeyType="next"
							clear
							styles={{

							}}
							{...restProps}
							value={value ? value + '' : null}
							ref={innerRef}
							last
							disabled={disabled}
						/>
					</View>
				</View>
			</View>
		</View>
	);
};

InputText.propTypes = propTypes;

InputText.defaultProps = defaultProps;

export default React.forwardRef((props, ref) => {
	return <InputText {...props} innerRef={ref} />;
});
