/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-03-27 00:49:34
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';

// import { Stack } from 'expo-router';

import HomeScreen from 'src/screens/HomeScreen';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const Home = (props) => {
	// const {  } = props;

	return (
		<>
			{/* <Stack.Screen options={{}} /> */}
			<HomeScreen />
		</>
	);
};

Home.propTypes = propTypes;

Home.defaultProps = defaultProps;

export default Home;
