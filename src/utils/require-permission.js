/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-06-18 20:38:32
*------------------------------------------------------- */
import { Alert, Platform, Linking } from 'react-native';

export default (message) => {
	if (Platform.OS === 'ios') {
		Alert.alert(
			'Oops!',
			message || 'Sorry, we need this permissions to make this work!',
			[
				{
					text: 'Setting',
					onPress: () => {
						Linking.openURL('app-settings:');
					},
				},
				{
					text: 'Ok',
				},
			],
		);

		return;
	}
	Alert.alert('Oops!', message || 'Sorry, we need this permissions to make this work!');
};
