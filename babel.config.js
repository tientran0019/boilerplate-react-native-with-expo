/* eslint-disable func-names */
/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email ductienas@gmail.com
* Phone 0972970075
*
* Created: 2019-01-30 10:55:33
*------------------------------------------------------- */

module.exports = function (api) {
	api.cache(true);
	return {
		presets: [
			'babel-preset-expo',
			'module:react-native-dotenv',
		],
		plugins: [
			[
				'module-resolver',
				{
					'root': [
						'./',
					],
					'alias': {
						'src': './src',
						'assets': './assets',
					},
					'extensions': [
						'.ios.js',
						'.android.js',
						'.js',
						'.jsx',
						'.json',
					],
				},
			],
		],
	};
};