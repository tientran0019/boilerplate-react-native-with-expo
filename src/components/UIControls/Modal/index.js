/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-03-29 14:29:29
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import useTheme from 'src/hooks/useTheme';
import { SafeAreaView } from 'react-native-safe-area-context';
import Modal from 'react-native-modal';
// import { Modal } from '@zellosoft/antd-react-native';
import { ScrollView, Dimensions, ActivityIndicator, TouchableWithoutFeedback } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Text from 'src/components/UIDisplay/Text';
import Empty from 'src/components/UIDisplay/Empty';
import View from 'src/components/UIDisplay/View';

const propTypes = {
	style: PropTypes.object,
	disabled: PropTypes.bool,
	visible: PropTypes.bool,
	loading: PropTypes.bool,
	closable: PropTypes.bool,
	isEmpty: PropTypes.bool,
	swipeToClose: PropTypes.bool,
	children: PropTypes.any,
	title: PropTypes.any,
	footer: PropTypes.any,
	onClose: PropTypes.func,
};

const defaultProps = {
	style: {},
	disabled: false,
	loading: false,
	isEmpty: false,
	swipeToClose: true,
	visible: false,
	closable: true,
	title: null,
	footer: null,
	children: null,
	onClose: f => f,
};

const ModalCpn = (props) => {
	const { style, footer, disabled, swipeToClose, closable, loading, isEmpty, title, visible, children, onClose, ...attrs } = props;

	const theme = useTheme();

	if (!visible) {
		return null;
	}

	return (
		<Modal
			onBackdropPress={closable ? onClose : f => f}
			onSwipeComplete={closable && swipeToClose ? onClose : f => f}
			{...attrs}
			swipeDirection={['down']}
			propagateSwipe
			transparent
			isVisible={visible}
			animationOut="slideOutUp"
			animationIn="slideInUp"
			useNativeDriverForBackdrop
			style={{
				...style,
				justifyContent: 'flex-end',
				margin: 0,
			}}
		>
			<SafeAreaView
				style={{
					maxHeight: Dimensions.get('window').height - 200,
					backgroundColor: theme.fill_base,
					borderTopLeftRadius: 30,
					borderTopRightRadius: 30,
				}}
			>
				<View
					style={{
						height: 5,
						width: 60,
						borderRadius: 5,
						backgroundColor: '#dbdbdb',
						marginTop: 10,
						marginBottom: 10,
						alignSelf: 'center',
					}}
				/>
				{
					title ?
						<Text
							type="h3"
							style={{
								paddingRight: 40,
								paddingLeft: 20,
								paddingBottom: 20,
							}}
						>
							{title}
						</Text> :
						null
				}
				{
					title && closable ?
						<View
							style={{
								position: 'absolute',
								alignItems: 'center',
								justifyContent: 'center',
								bottom: 150,
								zIndex: 9999,
								top: 20,
								right: 15,
								width: 30,
								height: 30,
								borderRadius: 15,
								backgroundColor: theme.fill_disabled,
							}}
						>
							<Text
								onPress={onClose}
							>
								<AntDesign name="close" size={18} />
							</Text>
						</View> :
						null
				}
				{
					!loading && isEmpty ?
						<ScrollView>
							<Empty />
						</ScrollView> :
						<ScrollView>
							{
								loading ?
									<View
										style={{
											paddingVertical: 50,
										}}
									>
										<ActivityIndicator
											color={theme.brand_primary}
											size="small"
										/>
									</View> :
									<TouchableWithoutFeedback>
										<View
											style={{

											}}
										>
											{children}
										</View>
									</TouchableWithoutFeedback>
							}
						</ScrollView>
				}
				{
					footer ?
						<View
							style={{
								borderTopColor: theme.border_color_base,
								borderTopWidth: 1,
							}}
						>
							{footer}
						</View> :
						null
				}
			</SafeAreaView>
		</Modal>
	);
};

ModalCpn.propTypes = propTypes;

ModalCpn.defaultProps = defaultProps;

export default React.memo(ModalCpn);
