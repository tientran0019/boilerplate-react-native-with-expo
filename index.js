import React from 'react';
import { registerRootComponent } from 'expo';
import { ExpoRoot } from 'expo-router';

export const App = () => {
	const ctx = require.context('./src/screens');
	return <ExpoRoot context={ctx} />;
};

registerRootComponent(App);
