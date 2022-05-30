/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-03-18 11:15:32
*------------------------------------------------------- */
export default (theme) => {
	return {
		headerTitleAlign: 'center',
		headerBackTitleVisible: false,
		headerTransparent: false,
		// headerShown: true,
		headerStyle: {
			shadowColor: 'transparent',
			borderBottomWidth: 0,
			borderBottomColor: 'transparent',
			elevation: 0,
			shadowRadius: 0,
			shadowOffset: {
				height: 0,
			},
			shadowOpacity: 0,
			backgroundColor: theme.fill_body,
		},
		headerShadowVisible: false,
		headerTitleStyle: {
			fontSize: 20,
			fontWeight: 'bold',
			fontFamily: 'Roboto-Bold',
			color: theme.color_text_base,
		},
		headerTintColor: theme.color_text_base,
		headerRightContainerStyle: {
			marginEnd: 20,
			marginBottom: 10,
		},
		headerLeftContainerStyle: {
			marginStart: 20,
		},
	};
};
