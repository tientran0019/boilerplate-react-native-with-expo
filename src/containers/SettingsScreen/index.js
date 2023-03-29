/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-03-29 12:11:36
*------------------------------------------------------- */
/* eslint-disable react/prop-types */
import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { useDispatch } from 'react-redux';
import { useRouter } from 'expo-router';

import { Button, Toast } from '@zellosoft/antd-react-native';
import { actionLogout } from 'src/redux/actions/auth';

import { Alert } from 'react-native';

import Container from 'src/components/Layout/Container';

const SettingsScreen = (props) => {
	const dispatch = useDispatch();
	const router = useRouter();

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
								router.push('/login');
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
	}, [dispatch, router]);

	return (
		<Container
			scrollable={false}
			style={{
				padding: 15,
			}}
		>
			<ExpoConfigView />
			<Button
				type="primary"
				style={{
					marginTop: 15,
				}}
				onPress={handleLogout}
			>
				Logout
			</Button>
		</Container>
	);
};

export default SettingsScreen;
