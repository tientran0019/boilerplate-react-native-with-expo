/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email ductienas@gmail.com
* Phone 0972970075
*
* Created: 2017-12-16 00:42:57
*------------------------------------------------------- */
import auth, { initialState as initialAuth } from './auth';
import loader, { initialState as initialLoader } from './loader';

import example, { initialState as initialExample } from './example';

export const initialState = {
	auth: initialAuth,
	loader: initialLoader,

	example: initialExample,
};

export default {
	auth,
	loader,

	example,
};
