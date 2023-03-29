/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-03-18 11:07:32
*------------------------------------------------------- */

import * as Font from 'expo-font';

import { Toast } from '@zellosoft/antd-react-native';

import useAsync from 'react-use/lib/useAsync';

export default function useCachedResources() {
	// Load any resources or data that we need prior to rendering the app
	const { loading, value: success, error } = useAsync(async () => {
		try {
			Toast.config({
				duration: 2,
				mask: false,
				stackable: false,
			});

			// Load fonts
			await Font.loadAsync({
				SpaceMono: require('src/assets/fonts/SpaceMono-Regular.ttf'),
				'Roboto': require('src/assets/fonts/Roboto/Roboto-Regular.ttf'),
				'RobotoItalic': require('src/assets/fonts/Roboto/Roboto-Italic.ttf'),
				'Roboto-Thin': require('src/assets/fonts/Roboto/Roboto-Thin.ttf'),
				'Roboto-ThinItalic': require('src/assets/fonts/Roboto/Roboto-ThinItalic.ttf'),
				'Roboto-Light': require('src/assets/fonts/Roboto/Roboto-Light.ttf'),
				'Roboto-Medium': require('src/assets/fonts/Roboto/Roboto-Medium.ttf'),
				'Roboto-LightItalic': require('src/assets/fonts/Roboto/Roboto-LightItalic.ttf'),
				'Roboto-Bold': require('src/assets/fonts/Roboto/Roboto-Bold.ttf'),
				'Roboto-BoldItalic': require('src/assets/fonts/Roboto/Roboto-BoldItalic.ttf'),
				'Roboto-MediumItalic': require('src/assets/fonts/Roboto/Roboto-MediumItalic.ttf'),
				'Roboto-Black': require('src/assets/fonts/Roboto/Roboto-Black.ttf'),
				'Roboto-BlackItalic': require('src/assets/fonts/Roboto/Roboto-BlackItalic.ttf'),
			});

			await Font.loadAsync(
				'IcoMoon',
				// eslint-disable-next-line
				require('src/assets/fonts/icomoon/icomoon.ttf')
			);

			await Font.loadAsync(
				'antoutline',
				// eslint-disable-next-line
				require('@ant-design/icons-react-native/fonts/antoutline.ttf')
			);

			await Font.loadAsync(
				'antfill',
				// eslint-disable-next-line
				require('@ant-design/icons-react-native/fonts/antfill.ttf')
			);

			return true;
		} catch (e) {
			// We might want to provide this error information to an error reporting service
			// eslint-disable-next-line no-console
			console.warn('DEV ~ file: useCachedResources.js:64 ~ const{loading,value:success,error}=useAsync ~ e:', e);
			throw e;
		}
	}, []);

	return { loading, error, success };
}
