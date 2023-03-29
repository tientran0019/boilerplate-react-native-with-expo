/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-03-18 11:07:32
*------------------------------------------------------- */

import { useSelector } from 'react-redux';
import useAsyncRetry from 'react-use/lib/useAsyncRetry';

import AuthStorage from 'src/utils/auth-storage';

export default function useCheckLogin() {
	const auth = useSelector(state => state.auth);

	// Load any resources or data that we need prior to rendering the app
	const { value: loggedIn = false, loading, retry } = useAsyncRetry(async () => {
		try {
			// check login
			const isLogin = await AuthStorage.loggedIn && !!auth.id;

			return isLogin;
		} catch (e) {
			// We might want to provide this error information to an error reporting service
			// eslint-disable-next-line no-console
			console.warn(e);
		}
	}, [auth.id]);

	return {
		retry,
		loading,
		loggedIn,
	};
}
