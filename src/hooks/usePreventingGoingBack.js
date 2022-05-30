/* eslint-disable no-undef */
/* --------------------------------------------------------

* Author Tien Tran
* Email tientran@zellosoft.com
* Phone 0972970075
*
* Created: 2021-10-01 14:38:58
*------------------------------------------------------- */

import React from 'react';

import { Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const usePreventingGoingBack = (unsavedChanges, message = 'You have unsaved changes. Are you sure to discard them and leave the screen?', title = 'Discard changes?') => {
	const navigation = useNavigation();

	const [force, setForce] = React.useState(false);

	React.useEffect(() => navigation.addListener('beforeRemove', (e) => {
		if (!unsavedChanges || force) {
			// If we don't have unsaved changes, then we don't need to do anything
			return;
		}

		// Prevent default behavior of leaving the screen
		e.preventDefault();

		// Prompt the user before leaving the screen
		Alert.alert(
			title,
			message,
			[
				{ text: "Don't leave", style: 'cancel', onPress: () => { } },
				{
					text: 'Discard',
					style: 'destructive',
					// If the user confirmed, then we dispatch the action we blocked earlier
					// This will continue the action that had triggered the removal of the screen
					onPress: () => navigation.dispatch(e.data.action),
				},
			],
		);
	}), [force, message, navigation, title, unsavedChanges]);

	React.useEffect(() => {
		if (force) {
			navigation.goBack();
		}
	}, [force, navigation]);

	const forceGoBack = React.useCallback(() => {
		setForce(true);
	}, []);

	return forceGoBack;
};

export default usePreventingGoingBack;
