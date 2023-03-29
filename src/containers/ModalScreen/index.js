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
import { Link, useNavigation } from "expo-router";

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
	const navigation = useNavigation();
	// If the page was reloaded or navigated to directly, then the modal should be presented as
	// a full screen page. You may need to change the UI to account for this.
	const isPresented = navigation.canGoBack();

	return (
		<Container style={styles.container}>
			<Text style={styles.title}>Modal</Text>
			<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
			<EditScreenInfo path="app/modal.js" />
			{/* Use `../` as a simple way to navigate to the root. This is not analogous to "goBack". */}
			{isPresented && <Link href="../"><Text color="danger">Dismiss</Text></Link>}
			{/* Use a light status bar on iOS to account for the black space above the modal */}
			{/* <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} /> */}
		</Container>
	);
};

ModalScreen.propTypes = propTypes;

ModalScreen.defaultProps = defaultProps;

export default ModalScreen;
