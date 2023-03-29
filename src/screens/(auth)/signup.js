/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-03-27 00:49:34
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';

import SignUpScreen from 'src/containers/SignUpScreen';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const SignUp = () => {
	// const {  } = props;

	return (
		<SignUpScreen />
	);
};

SignUp.propTypes = propTypes;

SignUp.defaultProps = defaultProps;

export default SignUp;
