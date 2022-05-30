/* eslint-disable react/prop-types */
import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { useDispatch } from 'react-redux';

import { Button, Toast } from '@zellosoft/antd-react-native';
import { actionLogout } from 'src/redux/actions/auth';

import { Alert } from 'react-native';

import Container from 'src/components/Layout/Container';

const SettingsScreen = (props) => {
	const { navigation } = props;

	const dispatch = useDispatch();

	const handleLogout = React.useCallback(async () => {
		Alert.alert(
			'Are you sure!',
			'',
			[
				{ text: 'Cancel', onPress: () => { } },
				{
					text: 'Ok',
					onPress: async () => {
						try {
							await dispatch(await actionLogout());

							Toast.loading('Loading...', 0.3, () => {
								navigation.reset({
									index: 0,
									routes: [{ name: 'Login' }],
								});
							});
						} catch (error) {
							Toast.fail({
								content: error.message || error.toString,
							});
						}
					},
				},
			],
		);
	}, [dispatch, navigation]);

	return (
		<Container>
			<ExpoConfigView />
			<Button
				type="primary"
				style={{
					marginTop: 20,
				}}
				onPress={handleLogout}
			>
				Logout
			</Button>
		</Container>
	);
};

SettingsScreen.navigationOptions = {
	title: 'app.json',
	header: null,
};

export default SettingsScreen;
