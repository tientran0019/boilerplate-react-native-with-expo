/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-03-18 11:07:32
*------------------------------------------------------- */

// import { useDispatch } from 'react-redux';

import useAsync from 'react-use/lib/useAsync';

import AuthStorage from 'src/utils/auth-storage';

// import { actionGetUserAuth } from 'src/redux/actions/auth';

export default function useCachedDataApi() {
	// const auth = useSelector(state => state.auth);
	// const dispatch = useDispatch();

	// Load any resources or data that we need prior to rendering the app
	const state = useAsync(async () => {
		try {
			// check login
			const loggedIn = await AuthStorage.loggedIn;
			// global.authId = await AuthStorage.userId;

			if (loggedIn) {
				// const res = await dispatch(await actionGetUserAuth());

				// global.currentUser = res || {};

				// await dispatch(await actionCountUnread());
			}

			return {
				loggedIn,
			};
		} catch (e) {
			// We might want to provide this error information to an error reporting service
			// eslint-disable-next-line no-console
			console.warn('DEV ~ file: useCachedDataApi.js:40 ~ state ~ e:', e);
			throw e;
		}
	}, []);

	return state;
}
