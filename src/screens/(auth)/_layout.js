/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-03-27 00:49:34
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';

import useNavConfigs from 'src/hooks/useNavConfigs';

import { Stack, Slot } from 'expo-router';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const AuthLayout = () => {
	const configs = useNavConfigs({ headerShown: false });

	return (
		<>
			<Stack.Screen options={configs} />
			<Slot />
		</>
	);
};

AuthLayout.propTypes = propTypes;

AuthLayout.defaultProps = defaultProps;

export default AuthLayout;
