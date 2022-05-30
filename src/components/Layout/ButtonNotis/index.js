/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-04-05 07:58:08
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';

import Touchable from 'src/components/UIControls/Touchable';
import Text from 'src/components/UIDisplay/Text';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const ButtonNotis = (props) => {
	// const {  } = props;
	const navigation = useNavigation();

	return (
		<Touchable onPress={() => navigation.navigate('Notification')}>
			<Text
				style={{
					lineHeight: 22,
				}}
			>
				<Ionicons name="notifications" size={22} />
			</Text>
		</Touchable>
	);
};

ButtonNotis.propTypes = propTypes;

ButtonNotis.defaultProps = defaultProps;

export default ButtonNotis;
