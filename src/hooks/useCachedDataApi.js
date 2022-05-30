/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-03-18 11:07:32
*------------------------------------------------------- */

import * as React from 'react';

import { useDispatch } from 'react-redux';

import useAsync from 'react-use/lib/useAsync';

import AuthStorage from 'src/utils/auth-storage';

// import { actionGetUserAuth } from 'src/redux/actions/auth';

export default function useCachedDataApi() {
	const [loggedIn, setLoggedIn] = React.useState(false);
	const [isLoadingComplete, setLoadingComplete] = React.useState(false);

	// const auth = useSelector(state => state.auth);
	const dispatch = useDispatch();

	// Load any resources or data that we need prior to rendering the app
	useAsync(async () => {
		try {
			// check login
			const isLogin = await AuthStorage.loggedIn;
			// global.authId = await AuthStorage.userId;
			setLoggedIn(isLogin);

			if (isLogin) {
				// const res = await dispatch(await actionGetUserAuth());

				global.currentUser = res || {};

				// await dispatch(await actionCountUnread());
			}
		} catch (e) {
			// We might want to provide this error information to an error reporting service
			// eslint-disable-next-line no-console
			console.warn(e);
		} finally {
			setLoadingComplete(true);
		}
	}, []);

	return [isLoadingComplete, loggedIn];
}
