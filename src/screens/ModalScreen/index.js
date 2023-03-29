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
import Container from 'src/components/Layout/Container';

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

const ModalScreen = (props) => {
	// const {  } = props;

	return (
		<Container style={styles.container}>
			<Text style={styles.title}>Modal</Text>
			<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
			<EditScreenInfo path="app/modal.js" />

			{/* Use a light status bar on iOS to account for the black space above the modal */}
			{/* <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} /> */}
		</Container>
	);
};

ModalScreen.propTypes = propTypes;

ModalScreen.defaultProps = defaultProps;

export default ModalScreen;
