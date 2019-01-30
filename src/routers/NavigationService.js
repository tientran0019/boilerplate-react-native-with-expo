/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email ductienas@gmail.com
* Phone 0972970075
*
* Created: 2018-12-25 16:51:29
*------------------------------------------------------- */

import { NavigationActions, StackActions } from 'react-navigation';

/**
 * Caution: Do not use any method name same as below.
 * May cause javascript release bundling to currupt with method names.
 */

let _navigator;

function setTopLevelNavigator(navigatorRef) {
	_navigator = navigatorRef;
}

function navigate(routeName, params) {
	_navigator.dispatch(
		NavigationActions.navigate({
			routeName,
			params,
		}),
	);
}

function reset(routeName) {
	const resetAction = StackActions.reset({
		index: 0,
		actions: [
			NavigationActions.navigate({ routeName }),
		],
	});
	_navigator.dispatch(resetAction);
}

function goBack() {
	const popAction = StackActions.pop({
		n: 1,
	});
	_navigator.dispatch(popAction);
}

// add other navigation functions that you need and export them

export default {
	setTopLevelNavigator,
	navigate,
	reset,
	goBack,
};
