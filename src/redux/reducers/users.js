/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-10-02 19:32:20
*------------------------------------------------------- */

export const initialState = [
	{
		id: 'demo@gmail.com',
		firstName: 'Tien',
		lastName: 'Tran',
		email: 'demo@gmail.com',
		password: '123123',
		phoneNumber: '987123',
	},
];

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CREATE_USER_SUCCESS': {
			return [
				{
					...action.payload,
				},
				...state,
			];
		}
		case 'EDIT_USER_SUCCESS': {
			return state.map(el => {
				if (el.id === action.payload?.id) {
					return {
						...el,
						...action.payload,
					};
				}
				return {
					...el,
				};
			});
		}
		case 'DELETE_USER_SUCCESS': {
			return state.filter(el => {
				return el.id !== action.payload?.id;
			});
		}
		default:
			return state;
	}
};

export default reducer;
