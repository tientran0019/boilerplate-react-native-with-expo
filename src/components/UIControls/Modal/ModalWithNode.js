/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-03-29 14:29:29
*------------------------------------------------------- */

import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import Touchable from 'src/components/UIControls/Touchable';
import Text from 'src/components/UIDisplay/Text';
import Modal from 'src/components/UIControls/Modal';

const propTypes = {
	style: PropTypes.object,
	disabled: PropTypes.bool,
	children: PropTypes.any,
	content: PropTypes.any,
	onOpen: PropTypes.func,
	onClose: PropTypes.func,
};

const defaultProps = {
	style: {},
	disabled: false,
	content: null,
	children: null,
	onOpen: f => f,
	onClose: f => f,
};

const ModalWithNode = (props) => {
	// eslint-disable-next-line prefer-const
	let { style, disabled, onOpen, onClose, content, children, ...attrs } = props;

	const [show, setShow] = useState(false);

	const handleShow = useCallback(() => {
		setShow(true);
		onOpen();
	}, [onOpen]);

	const handleClose = useCallback(() => {
		setShow(false);
		onClose();
	}, [onClose]);

	return (
		<>
			<Touchable
				feedback={false}
				onPress={disabled ? f => f : handleShow}
				style={{
					...style,
				}}
			>
				{
					children ?
						React.cloneElement(children, { onPress: disabled ? f => f : () => { handleShow(); children.props?.onPress?.(); } }) :
						<Text type="link">
							Click to view more
						</Text>
				}
			</Touchable>
			<Modal
				{...attrs}
				onClose={handleClose}
				visible={show}
				disabled={disabled}
			>
				{typeof content === 'function' ? content({ close: handleClose }) : content}
			</Modal>
		</>
	);
};

ModalWithNode.propTypes = propTypes;

ModalWithNode.defaultProps = defaultProps;

export default ModalWithNode;
