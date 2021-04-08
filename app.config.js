/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-06-26 10:14:11
*------------------------------------------------------- */
const isDev = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development');

// eslint-disable-next-line import/no-extraneous-dependencies
const { parsed: env } = require('dotenv').config({ path: isDev ? '.env' : '.env.' + process.env.NODE_ENV });

const buildNumber = 1;
const identifier = 'com.codebase.test.example';

export default ({ config }) => {
	const configDefault = {
		'name': 'CodeBase',
		'slug': 'codebase',
		'privacy': 'unlisted',
		'version': '1.0.0',
		'description': 'Codebase description.',
		'userInterfaceStyle': 'automatic',
		'platforms': [
			'ios',
			'android',
		],
		'orientation': 'portrait',
		'icon': isDev ? './src/assets/images/icon-dev.png' : './src/assets/images/icon.png',
		'scheme': 'share-space',
		'splash': {
			'image': isDev ? './src/assets/images/splash-dev.png' : './src/assets/images/splash.png',
			'resizeMode': 'contain',
			'backgroundColor': '#fff',
		},
		'updates': {
			'enabled': true,
			'fallbackToCacheTimeout': 30000,
		},
		'assetBundlePatterns': [
			'**/*',
		],
		'ios': {
			'supportsTablet': false,
			'buildNumber': buildNumber.toString(),
			'bundleIdentifier': identifier,
			'userInterfaceStyle': 'light',
		},
		'android': {
			'userInterfaceStyle': 'light',
			'adaptiveIcon': {
				'foregroundImage': './src/assets/images/adaptive-icon.png',
				'backgroundColor': '#ffffff',
			},
			'package': identifier,
			'versionCode': buildNumber,
		},
	};

	return {
		...config,
		...configDefault,
		extra: {
			...env,
			NODE_ENV: process.env.NODE_ENV,
		},
	};
};
