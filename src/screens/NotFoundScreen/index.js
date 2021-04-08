/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-12-26 11:16:11
*------------------------------------------------------- */

import * as React from 'react';
// import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';

import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';

import Text from 'src/components/Text';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
	},
	title: {
		fontSize: 20,
		fontWeight: '500',
		marginTop: 30,
	},
	link: {
		marginTop: 15,
		marginBottom: 20,
	},
});

const propTypes = {
	// navigation: PropTypes.object.isRequired,
};

const defaultProps = {
	// navigation: {},
};

const NotFoundScreen = (props) => {
	// const { navigation } = props;
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Image
				style={{
					width: '100%',
				}}
				resizeMode="contain"
				source={require('./images/img.png')}
			/>
			<Text style={styles.title}>This screen doesn't exist.</Text>
			<TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
				<Text color="primary">Go to home screen!</Text>
			</TouchableOpacity>
		</View>
	);
};

NotFoundScreen.propTypes = propTypes;

NotFoundScreen.defaultProps = defaultProps;

export default NotFoundScreen;
