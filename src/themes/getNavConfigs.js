/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-03-18 11:15:32
*------------------------------------------------------- */
import { Platform } from 'react-native';

export default (theme) => {
	return {
		animation: 'slide_from_right',
		headerMode: 'screen',
		freezeOnBlur: true,
		headerTitleAlign: 'center',
		headerBackTitleVisible: false,
		headerTransparent: false,
		headerShown: false,
		headerStyle: {
			// borderWidth: 0.5,
			borderBottomColor: theme.name === 'dark' ? '#3e4667' : theme.border_color_base,
			// borderRightColor: theme.name === 'dark' ? '#3e4667' : theme.border_color_base,
			// borderLeftColor: theme.name === 'dark' ? '#3e4667' : theme.border_color_base,
			...Platform.select({
				android: {
					elevation: 6,
				},
				default: {
					shadowColor: theme.name === 'dark' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(111, 207, 151, 0.3)',
					shadowOffset: { height: 4, width: 4 },
					shadowOpacity: 0.6,
					shadowRadius: 4,
				},
			}),
			backgroundColor: theme.fill_base,
			// borderBottomLeftRadius: 20,
			// borderBottomRightRadius: 20,
		},
		headerBackgroundContainerStyle: {
			backgroundColor: theme.fill_base,
		},
		headerShadowVisible: true,
		headerTitleStyle: {
			fontSize: 14,
			fontWeight: 'bold',
			color: theme.color_text_base,
			marginBottom: 10,
		},
		headerTintColor: theme.color_text_base,
		headerRightContainerStyle: {
			marginBottom: Platform.OS === 'android' ? -3 : 8,
		},
		headerLeftContainerStyle: {
			marginBottom: Platform.OS === 'android' ? -3 : 8,
		},
	};
};
