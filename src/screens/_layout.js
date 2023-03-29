/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-03-27 00:49:34
*------------------------------------------------------- */
import 'intl';
import 'intl/locale-data/jsonp/vi';

import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';

// import { useColorScheme } from 'react-native';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { SplashScreen, Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SystemUI from 'expo-system-ui';

import viVN from 'src/locales/vi_VN';
import { Provider } from '@zellosoft/antd-react-native';

import useCachedResources from 'src/hooks/useCachedResources';
import useCachedDataApi from 'src/hooks/useCachedDataApi';
import useTheme from 'src/hooks/useTheme';

import ReduxProvider from 'src/redux';

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: '(tabs)',
	auth: {
		initialRouteName: 'login',
	},
};

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const RootLayoutNav = ({ colorScheme, loggedIn }) => {
	// const colorScheme = useColorScheme();

	return (
		<ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
			<Stack>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				<Stack.Screen name="(auth)" options={{ headerShown: false }} />
				<Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
			</Stack>
		</ThemeProvider>
	);
};

const App = (props) => {
	const { loading, error } = useCachedResources();
	const { loading: loadingApi, error: e, value: { loggedIn } = {} } = useCachedDataApi();

	const theme = useTheme();

	useEffect(() => {
		SystemUI.setBackgroundColorAsync(theme.fill_body);
	}, [theme.fill_body]);

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) throw error;
		if (e) throw e;
	}, [error, e]);

	return (
		<>
			{/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
			{
				(loading || loadingApi) ?
					<SplashScreen /> :
					<Provider locale={viVN} theme={{ ...theme }}>
						<SafeAreaProvider>
							<RootLayoutNav colorScheme={theme.name} loggedIn={loggedIn} />
						</SafeAreaProvider>
					</Provider>
			}
		</>
	);
};

const RootLayout = (props) => {
	return (
		<ReduxProvider>
			<App />
		</ReduxProvider>
	);
};

RootLayout.propTypes = propTypes;

RootLayout.defaultProps = defaultProps;

export default React.memo(RootLayout);

// global catch error to avoid crash
global.ErrorUtils?.setGlobalHandler((e, isFatal) => {
	if (isFatal) {
		console.log('DEV ~ file: App.js ~ line 68 ~ global.ErrorUtils?.setGlobalHandler ~ e', e);

		// eslint-disable-next-line no-alert
		alert(`${e.name}: ${e.message}`)
	}
})
