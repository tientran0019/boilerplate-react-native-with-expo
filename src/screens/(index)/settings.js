/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-03-27 00:49:34
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';

import SettingsScreen from 'src/containers/SettingsScreen';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const Settings = (props) => {
	// const {  } = props;

	return (
		<SettingsScreen />
	);
};

Settings.propTypes = propTypes;

Settings.defaultProps = defaultProps;

export default Settings;
