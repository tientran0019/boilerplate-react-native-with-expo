/* eslint-disable import/no-extraneous-dependencies */
/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-04-07 17:33:54
*------------------------------------------------------- */
import AsyncStorage from '@react-native-async-storage/async-storage';

import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer, { initialState } from 'src/redux/reducers';
import apiMiddleware from 'src/redux/thunk/middleware';

import Constants from 'expo-constants';

// eslint-disable-next-line no-unused-vars
const logger = createLogger({
	collapsed: (getState, action, logEntry) => !logEntry.error,
	// predicate: (getState, action) => !['@@redux-form/CHANGE', '@@redux-form/REGISTER_FIELD'].includes(action.type),
});

const persistConfig = {
	// transforms: [],
	blacklist: ['loader'],
	key: Constants.manifest?.slug ?? 'root',
	storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const composeMiddleware = !__DEV__ ?
	compose(
		applyMiddleware(apiMiddleware),
		applyMiddleware(thunk),
	) :
	composeWithDevTools({
		// Options: https://github.com/jhen0409/react-native-debugger#options
	})(compose(
		applyMiddleware(apiMiddleware),
		applyMiddleware(thunk),
		// applyMiddleware(logger),
	));

export default () => {
	const store = createStore(
		persistedReducer,
		initialState,
		composeMiddleware,
	);
	const persistor = persistStore(store);

	return { store, persistor };
};
