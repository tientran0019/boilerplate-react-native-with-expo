/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-03-18 10:22:08
*------------------------------------------------------- */
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from '@zellosoft.com/react-native-toast-message';

import useCachedResources from 'src/hooks/useCachedResources';
import useColorScheme from 'src/hooks/useColorScheme';
import Navigation from 'src/navigation';

import ReduxProvider from 'src/redux';

import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();// Ignore all log notifications

const App = () => {
	const colorScheme = useColorScheme();
	const [isLoadingComplete, loggedIn] = useCachedResources();

	if (!isLoadingComplete) {
		return null;
	}

	return (
		<>
			<SafeAreaProvider>
				<Navigation colorScheme={colorScheme} loggedIn={loggedIn} />
			</SafeAreaProvider>
			<Toast ref={(ref) => Toast.setRef(ref)} />
		</>
	);
};

const Wrapper = () => {
	return (
		<ReduxProvider>
			<App />
		</ReduxProvider>
	);
};

export default Wrapper;
