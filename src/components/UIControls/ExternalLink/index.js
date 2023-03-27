/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-03-27 07:36:57
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import { Platform } from 'react-native';

const propTypes = {
	href: PropTypes.string.isRequired,
};

const defaultProps = {
	href: '#',
};

const ExternalLink = (props) => {
	// const {  } = props;

	return (
		<Link
			hrefAttrs={{
				// On web, launch the link in a new tab.
				target: '_blank',
			}}
			{...props}
			onPress={(e) => {
				if (Platform.OS !== 'web') {
					// Prevent the default behavior of linking to the default browser on native.
					e.preventDefault();
					// Open the link in an in-app browser.
					WebBrowser.openBrowserAsync(props.href);
				}
			}}
		/>
	);
};

ExternalLink.propTypes = propTypes;

ExternalLink.defaultProps = defaultProps;

export default ExternalLink;
