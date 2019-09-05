/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email ductienas@gmail.com
* Phone 0972970075
*
* Created: 2019-01-30 13:09:01
*------------------------------------------------------- */
import { AsyncStorage } from 'react-native';

import { Iterable } from 'immutable';
import { persistStore, persistReducer } from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import { composeWithDevTools } from 'redux-devtools-extension';

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { createLogger } from 'redux-logger';

import rootReducer, { initialState } from 'src/redux/reducers';
import rootSaga from 'src/redux/sagas';

import { expo } from '../../../app.json';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const stateTransformer = (state) => {
	const newState = {};

	Object.keys(state).forEach((key) => {
		newState[key] = Iterable.isIterable(state[key]) ? state[key].toJS() : state[key];
	});

	return newState;
};

const logger = createLogger({
	stateTransformer,
	collapsed: (getState, action, logEntry) => !logEntry.error,
	// predicate: (getState, action) => !['@@redux-form/CHANGE', '@@redux-form/REGISTER_FIELD'].includes(action.type),
});

const persistConfig = {
	transforms: [immutableTransform()],
	blacklist: ['loader'],
	key: expo.name,
	storage: AsyncStorage,
};

const reducers = combineReducers(rootReducer);
const persistedReducer = persistReducer(persistConfig, reducers);

const composeMiddleware = !__DEV__ ?
	applyMiddleware(sagaMiddleware) :
	composeWithDevTools({
		// Options: https://github.com/jhen0409/react-native-debugger#options
	})(compose(
		applyMiddleware(sagaMiddleware),
		applyMiddleware(logger),
	));

const store = createStore(
	persistedReducer,
	initialState,
	composeMiddleware,
);

store.runSagaTask = () => {
	store.sagaTask = sagaMiddleware.run(rootSaga);
};

// run the rootSaga initially
store.runSagaTask();

persistStore(store, {});

export default store;
