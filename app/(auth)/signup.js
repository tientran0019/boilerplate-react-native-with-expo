/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-03-27 00:49:34
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';

import LoginScreen from 'src/screens/LoginScreen';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const Login = () => {
	// const {  } = props;

	return (
		<LoginScreen />
	);
};

Login.propTypes = propTypes;

Login.defaultProps = defaultProps;

export default Login;
