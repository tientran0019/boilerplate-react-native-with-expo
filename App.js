/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-05-30 21:51:55
*------------------------------------------------------- */
import 'intl';
import 'intl/locale-data/jsonp/vi';

import React from 'react';
import { useSelector } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SystemUI from 'expo-system-ui';

import viVN from 'src/locales/vi_VN';
import { Provider } from '@zellosoft/antd-react-native';

import useCachedResources from 'src/hooks/useCachedResources';
import useCachedDataApi from 'src/hooks/useCachedDataApi';
import Loading from 'src/components/Layout/Loading';
import Navigation from 'src/navigation';
import getTheme from 'src/themes';

import ReduxProvider from 'src/redux';

import { LogBox, View } from 'react-native';

LogBox.ignoreLogs(['Warning: ...', 'Non-serializable values were found in the navigation state']); // Ignore log notification by message
LogBox.ignoreAllLogs();// Ignore all log notifications
// eslint-disable-next-line react/prop-types
const App = ({ caching }) => {
	const [isLoadingComplete, loggedIn] = useCachedDataApi();

	const settings = useSelector(state => state.settings);
	const theme = getTheme(settings.theme);

	React.useEffect(() => {
		SystemUI.setBackgroundColorAsync(theme.fill_body);
	}, [theme.fill_body]);

	if (caching) {
		return (
			<View
				style={{
					flex: 1,
					backgroundColor: theme.fill_body,
				}}
			/>
		);
	}

	if (!isLoadingComplete) {
		return (
			<View
				style={{
					flex: 1,
					backgroundColor: theme.fill_body,
				}}
			>
				<Loading loading />
			</View>
		);
	}

	return (
		<Provider locale={viVN} theme={{ ...theme }}>
			<SafeAreaProvider>
				<Navigation colorScheme={settings.theme} loggedIn={loggedIn} />
			</SafeAreaProvider>
		</Provider>
	);
};

const Wrapper = () => {
	const [caching] = useCachedResources();

	return (
		<ReduxProvider>
			<App caching={caching} />
		</ReduxProvider>
	);
};

export default Wrapper;

// global catch error to avoid crash
global.ErrorUtils?.setGlobalHandler((e, isFatal) => {
	if (isFatal) {
		console.log('DEV ~ file: App.js ~ line 68 ~ global.ErrorUtils?.setGlobalHandler ~ e', e);

		// eslint-disable-next-line no-alert
		alert(`${e.name}: ${e.message}`)
	}
})
