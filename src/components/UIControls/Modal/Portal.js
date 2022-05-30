/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-03-29 14:29:29
*------------------------------------------------------- */

import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { Portal } from '@zellosoft/antd-react-native';

import Modal from 'src/components/UIControls/Modal';
import View from 'src/components/UIDisplay/View';
import Text from 'src/components/UIDisplay/Text';

const propTypes = {
	style: PropTypes.object,
	disabled: PropTypes.bool,
	title: PropTypes.any,
	content: PropTypes.any,
	actions: PropTypes.any,
	onBackHandler: PropTypes.func,
};

const defaultProps = {
	style: {},
	disabled: false,
	title: null,
	content: null,
};

const ModalContainer = (props) => {
	// eslint-disable-next-line prefer-const
	let { actions, title, content, onBackHandler, ...attrs } = props;

	const [show, setShow] = useState(true);

	const onBackAndroid = React.useCallback(() => {
		if (typeof onBackHandler === 'function') {
			const flag = onBackHandler();
			if (flag) {
				setShow(false);
			}
			return flag;
		}
		if (show) {
			setShow(false);
			return true;
		}
		return false;
	}, [onBackHandler, show]);

	const footer = React.useMemo(() => {
		return actions?.map((el) => {
			// tslint:disable-next-line:only-arrow-functions
			const orginPress = el.onPress || function () { };

			return {
				...el,
				onPress: () => {
					const res = orginPress();
					if (res && res.then) {
						res.then(() => {
							setShow(false);
						});
					} else {
						setShow(false);
					}
				},
			};
		});
	}, [actions]);

	return (
		<Modal
			{...attrs}
			onClose={() => setShow(false)}
			visible={show}
			title={title}
			footer={footer}
			onRequestClose={onBackAndroid}
		>
			{content}
		</Modal>
	);
};

ModalContainer.propTypes = propTypes;

ModalContainer.defaultProps = defaultProps;

const open = ({ title, content, actions, onBackHandler, ...attrs }) => {
	const key = Portal.add(
		<ModalContainer
			{...attrs}
			title={title}
			content={content}
			actions={actions}
			onAnimationEnd={(visible) => {
				if (!visible) {
					Portal.remove(key);
				}
			}}
			onBackHandler={onBackHandler}
		/>,
	);
	return key;
};

Modal.open = open;

Modal.error = (
	title,
	content,
	actions = [
		{
			text: 'OK',
			onPress: () => { },
		},
	],
) => {
	const key = Portal.add(
		<ModalContainer
			title={title}
			type="popup"
			content={
				<View
					style={{
						padding: 20,
						alignItems: 'center',
					}}
				>
					<AntDesign name="exclamationcircleo" size={60} color="red" />
					<View
						style={{
							textAlign: 'center',
							marginTop: 20,
							marginBottom: 10,
						}}
						type="h4"
					>
						{content}
					</View>
					<Text
						style={{
							textAlign: 'center',
							marginBottom: 0,
						}}
					>
						Quý Nhà Đầu Tư vui lòng thử lại{'\n'}hoặc liên hệ với AZA HOLDINGS để được phục vụ
					</Text>
				</View>
			}
			actions={actions}
		/>,
	);
	return key;
};

Modal.success = (
	title,
	content,
	actions = [
		{
			text: 'OK',
			onPress: () => { },
		},
	],
) => {
	const key = Portal.add(
		<ModalContainer
			title={title}
			type="popup"
			content={
				<View
					style={{
						padding: 20,
						alignItems: 'center',
					}}
				>
					<AntDesign name="checkcircleo" size={60} color="green" />
					<View
						style={{
							textAlign: 'center',
							marginTop: 30,
							marginBottom: 10,
						}}
					>
						{content}
					</View>
				</View>
			}
			actions={actions}
		/>,
	);
	return key;
};

export default Modal;
