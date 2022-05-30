/* eslint-disable react/style-prop-object */
/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-03-29 14:29:29
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import { AntDesign } from '@expo/vector-icons';

import Text from 'src/components/UIDisplay/Text';
import Touchable from 'src/components/UIControls/Touchable';

const propTypes = {
	style: PropTypes.object,
	show: PropTypes.bool,
};

const defaultProps = {
	style: {},
	show: true,
};

const ButtonToTop = (props) => {
	const { style, show, ...attrs } = props;

	if (!show) {
		return null;
	}

	return (
		<Touchable
			{...attrs}
			style={{
				position: 'absolute',
				alignItems: 'center',
				justifyContent: 'center',
				bottom: 30,
				zIndex: 9999,
				right: 20,
				width: 30,
				height: 30,
				borderRadius: 15,
				backgroundColor: '#6FCF97',
				...style,
			}}
		>
			<Text
				color="primary"
			>
				<AntDesign name="totop" size={18} />
			</Text>
		</Touchable>
	);
};

ButtonToTop.propTypes = propTypes;

ButtonToTop.defaultProps = defaultProps;

export default ButtonToTop;
