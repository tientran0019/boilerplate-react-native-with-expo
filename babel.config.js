/* eslint-disable func-names */
module.exports = function (api) {
	api.cache(true);
	return {
		presets: [
			'babel-preset-expo',
		],
		plugins: [
			require.resolve('expo-router/babel'),
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
