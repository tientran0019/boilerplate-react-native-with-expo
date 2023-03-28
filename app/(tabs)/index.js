/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-03-27 00:49:34
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';

import { StyleSheet } from 'react-native';

import EditScreenInfo from 'src/components/EditScreenInfo';
import Text from 'src/components/UIDisplay/Text';
import View from 'src/components/UIDisplay/View';
import ToggleTheme from 'src/components/Layout/ToggleTheme';

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
});

const TabOneScreen = (props) => {
	// const {  } = props;

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Tab One</Text>
			<ToggleTheme />
			<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
			<EditScreenInfo path="app/(tabs)/index.js" />
		</View>
	);
};

TabOneScreen.propTypes = propTypes;

TabOneScreen.defaultProps = defaultProps;

export default TabOneScreen;
