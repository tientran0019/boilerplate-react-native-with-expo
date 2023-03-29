/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-03-29 11:22:08
*------------------------------------------------------- */

import * as React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'expo-router';

import { Image } from 'react-native';
import { Button } from '@zellosoft/antd-react-native';

import Text from 'src/components/UIDisplay/Text';
import Container from 'src/components/Layout/Container';

const propTypes = {
	// navigation: PropTypes.object.isRequired,
};

const defaultProps = {
	// navigation: {},
};

const NotFoundScreen = (props) => {
	// const { navigation } = props;

	return (
		<Container
			style={{
				justifyContent: 'center',
			}}
		>
			<Image
				style={{
					width: 225,
					marginBottom: 50,
					marginTop: 20,
					alignSelf: 'center',
				}}
				resizeMode="contain"
				source={require('./images/img.png')}
			/>
			<Text
				type="h1"
				style={{
					marginBottom: 5,
					textAlign: 'center',
				}}
			>
				Oops!
			</Text>
			<Text
				style={{
					marginBottom: 40,
					textAlign: 'center',
				}}
			>
				This screen doesn&apos;t exist.
			</Text>
			<Link href="/" asChild replace>
				<Button type="primary">Go to home screen!</Button>
			</Link>
		</Container>
	);
};

NotFoundScreen.propTypes = propTypes;

NotFoundScreen.defaultProps = defaultProps;

export default NotFoundScreen;
