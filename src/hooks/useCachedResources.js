/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-12-26 11:09:31
*------------------------------------------------------- */
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import useAsync from 'react-use/lib/useAsync';

import AuthStorage from 'src/utils/auth-storage';

import { actionGetUserAuth } from 'src/redux/actions/auth';

export default function useCheckLogin() {
	const [loggedIn, setLoggedIn] = React.useState(false);
	const [isLoadingComplete, setLoadingComplete] = React.useState(false);

	const auth = useSelector(state => state.auth);
	const dispatch = useDispatch();

	// Load any resources or data that we need prior to rendering the app
	useAsync(async () => {
		try {
			SplashScreen.preventAutoHideAsync();

			// Load fonts
			await Font.loadAsync({
				...Ionicons.font,
				'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
			});

			// check login
			const isLogin = await AuthStorage.loggedIn;
			setLoggedIn(isLogin);

			if (isLogin) {
				await dispatch(await actionGetUserAuth());
				// await dispatch(await actionCountUnread());
			}
		} catch (e) {
			// We might want to provide this error information to an error reporting service
			console.warn(e);
		} finally {
			setLoadingComplete(true);
			SplashScreen.hideAsync();
		}
	}, [auth.userId]);

	return [isLoadingComplete, loggedIn];
}
