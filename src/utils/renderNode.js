/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email ductienas@gmail.com
* Phone 0972970075
*
* Created: 2018-12-31 14:45:26
*------------------------------------------------------- */

import React from 'react';

export default (Component, content, defaultProps) => {
	if (content == null || content === false) {
		return null;
	}
	if (React.isValidElement(content)) {
		return content;
	}
	if (typeof content === 'function') {
		return content();
	}
	// Just in case
	if (content === true) {
		return <Component {...defaultProps} />;
	}
	if (typeof content === 'string') {
		return <Component {...defaultProps}>{content}</Component>;
	}
	return <Component {...defaultProps} {...content} />;
};
