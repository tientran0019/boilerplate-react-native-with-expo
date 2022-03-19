/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from 'expo-linking';

const linking = {
	prefixes: [Linking.makeUrl('/')],
	config: {
		screens: {
			Root: {
				screens: {
					HomeRoot: {
						screens: {
							Home: 'hone',
						},
					},
					LinksRoot: {
						screens: {
							Links: 'links',
						},
					},
					SettingsRoot: {
						screens: {
							Settings: 'settings',
						},
					},
				},
			},
			Modal: 'modal',
			NotFound: '*',
		},
	},
};

export default linking;
