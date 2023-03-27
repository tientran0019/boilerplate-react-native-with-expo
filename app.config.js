/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-05-30 21:52:31
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
			'infoPlist': {
				'NSCameraUsageDescription': 'This app uses your camera to scan barcodes, take a picture or take an avatar for your profile.',
				'NSPhotoLibraryUsageDescription': 'This app uses your library to allow you to upload pictures of your items.',
				'NSPhotoLibraryAddUsageDescription': 'This app uses your camera roll to allow you to upload pictures of your items.',
			},
		},
		'android': {
			'userInterfaceStyle': 'light',
			'adaptiveIcon': {
				'foregroundImage': './src/assets/images/adaptive-icon.png',
				'backgroundColor': '#ffffff',
			},
			'package': identifier,
			'versionCode': buildNumber,
			'permissions': [
				'CAMERA',
				'CAMERA_ROLL',
				'READ_INTERNAL_STORAGE',
				'WRITE_INTERNAL_STORAGE',
			],
		},
		'web': {
			'bundler': 'metro',
			'favicon': './src/assets/images/favicon.png',
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
