/* eslint-disable func-names */
module.exports = function (api) {
	api.cache(true);
	return {
		presets: [
			'babel-preset-expo',
		],
		plugins: [
			['transform-inline-environment-variables', {
				'include': [
					'NODE_ENV',
				],
			}],
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
			['import', { libraryName: '@zellosoft/antd-react-native' }],
		],
	};
};
