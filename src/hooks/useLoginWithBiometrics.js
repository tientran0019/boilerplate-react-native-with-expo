/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-03-18 11:07:32
*------------------------------------------------------- */
import React from 'react';

import { useDispatch } from 'react-redux';
import useAsyncRetry from 'react-use/lib/useAsyncRetry';
import * as LocalAuthentication from 'expo-local-authentication';
import { useNavigation } from '@react-navigation/native';

import Modal from 'src/components/UIControls/Modal/Portal';
import { actionLogout } from 'src/redux/actions/auth';
import useCheckLogin from 'src/hooks/useCheckLogin';

export default function useLoginWithBiometrics(options = { auto: false, silence: false }) {
	const navigation = useNavigation();
	const dispatch = useDispatch();
	const { loading, loggedIn } = useCheckLogin();

	const handleLoginBio = React.useCallback(async () => {
		if (!loggedIn) {
			Modal.error('', 'Please login with password first.');

			return;
		}

		try {
			// Check if hardware supports biometrics
			const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();

			// Check Biometrics types available (Fingerprint, Facial recognition, Iris recognition)
			// const supportedBiometrics = await LocalAuthentication.supportedAuthenticationTypesAsync();

			if (loggedIn && !isBiometricAvailable) {
				Modal.error('', 'Your device does not support Biometrics. Please login with password.');

				await dispatch(await actionLogout(() => {
					// navigation.reset({
					// 	index: 0,
					// 	routes: [{ name: 'Welcome' }],
					// });
				}));
			}
			// Check Biometrics are saved locally in user's device
			const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
			if (loggedIn && !savedBiometrics) {
				Modal.error('', 'Your device has not registered any Biometric methods. Please login with password.');
				await dispatch(await actionLogout(() => {
					// navigation.reset({
					// 	index: 0,
					// 	routes: [{ name: 'Welcome' }],
					// });
				}));
			}

			if (loggedIn && isBiometricAvailable && savedBiometrics) {
				// Authenticate use with Biometrics (Fingerprint, Facial recognition, Iris recognition)
				const biometricAuth = await LocalAuthentication.authenticateAsync({
					promptMessage: 'Login with Biometrics',
					cancelLabel: 'Cancel',
					disableDeviceFallback: false, // Sau nhiều lần thử k thành công thì có cho nhập password hay k
					// fallbackLabel: '',
				});

				if (biometricAuth.error) {
					Modal.error('', 'Login with Biometrics failed.');
				}
				// Log the user in on success
				if (biometricAuth.success) {
					navigation.reset({
						index: 0,
						routes: [{ name: 'Root' }],
					});
				}
			}
		} catch (e) {
			Modal.error('', 'Login with Biometrics failed.');
		}
	}, [dispatch, loggedIn, navigation]);

	// Load any resources or data that we need prior to rendering the app
	const { value: data = {}, loading: loadBio } = useAsyncRetry(async () => {
		// Check if hardware supports biometrics
		const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();

		// Check Biometrics types available (Fingerprint, Facial recognition, Iris recognition)
		const supportedBiometrics = await LocalAuthentication.supportedAuthenticationTypesAsync();

		if (loggedIn && !isBiometricAvailable) {
			await dispatch(await actionLogout(() => {
				// navigation.reset({
				// 	index: 0,
				// 	routes: [{ name: 'Welcome' }],
				// });
			}));
		}

		// Check Biometrics are saved locally in user's device
		const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
		if (loggedIn && !savedBiometrics) {
			await dispatch(await actionLogout(() => {
				// navigation.reset({
				// 	index: 0,
				// 	routes: [{ name: 'Welcome' }],
				// });
			}));
		}

		if (loggedIn && isBiometricAvailable && savedBiometrics) {
			// Authenticate use with Biometrics (Fingerprint, Facial recognition, Iris recognition)
			const biometricAuth = await LocalAuthentication.authenticateAsync({
				promptMessage: 'Login with Biometrics',
				cancelLabel: 'Cancel',
				disableDeviceFallback: false, // Sau nhiều lần thử k thành công thì có cho nhập password hay k
				// fallbackLabel: '',
			});

			if (biometricAuth.error) {
				Modal.error('', 'Login with Biometrics failed.');
			}
			// Log the user in on success
			if (biometricAuth.success) {
				navigation.reset({
					index: 0,
					routes: [{ name: 'Root' }],
				});
			}
		}

		return {
			isBiometricAvailable,
			authenticationType: supportedBiometrics?.[0],
		};
	}, [loggedIn]);

	return {
		...data,
		loggedInByPassword: loggedIn,
		retry: handleLoginBio,
		loading: loading || loadBio,
	};
}
