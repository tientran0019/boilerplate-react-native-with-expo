/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-03-29 14:29:29
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';
import { StatusBar } from 'expo-status-bar';

import { useIsFocused } from '@react-navigation/native';

// import { View } from 'react-native';

const propTypes = {
	// style: PropTypes.object.isRequired,
};

const defaultProps = {
	// style: {},
};

const FocusAwareStatusBar = (props) => {
	const isFocused = useIsFocused();

	return isFocused ? <StatusBar {...props} /> : <StatusBar {...props} />;
};

FocusAwareStatusBar.propTypes = propTypes;

FocusAwareStatusBar.defaultProps = defaultProps;

export default FocusAwareStatusBar;
