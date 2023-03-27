/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2023-03-27 00:49:34
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet } from 'react-native';

import Text from 'src/components/UIDisplay/Text';
import View from 'src/components/UIDisplay/View';
import ExternalLink from 'src/components/UIControls/ExternalLink';

const propTypes = {
	path: PropTypes.string.isRequired,
};

const defaultProps = {
	path: '',
};

const styles = StyleSheet.create({
	getStartedContainer: {
		alignItems: 'center',
		marginHorizontal: 50,
	},
	homeScreenFilename: {
		marginVertical: 7,
	},
	codeHighlightContainer: {
		borderRadius: 3,
		paddingHorizontal: 4,
	},
	getStartedText: {
		fontSize: 17,
		lineHeight: 24,
		textAlign: 'center',
	},
	helpContainer: {
		marginTop: 15,
		marginHorizontal: 20,
		alignItems: 'center',
	},
	helpLink: {
		paddingVertical: 15,
	},
	helpLinkText: {
		textAlign: 'center',
	},
});

const EditScreenInfo = (props) => {
	const { path } = props;

	return (
		<View>
			<View style={styles.getStartedContainer}>
				<Text
					style={styles.getStartedText}
					lightColor="rgba(0,0,0,0.8)"
					darkColor="rgba(255,255,255,0.8)"
				>
					Open up the code for this screen:
				</Text>

				<View
					style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
					darkColor="rgba(255,255,255,0.05)"
					lightColor="rgba(0,0,0,0.05)"
				>
					<Text style={{ fontFamily: 'SpaceMono' }}>{path}</Text>
				</View>

				<Text
					style={styles.getStartedText}
					lightColor="rgba(0,0,0,0.8)"
					darkColor="rgba(255,255,255,0.8)"
				>
					Change any of the text, save the file, and your app will automatically update.
				</Text>
			</View>

			<View style={styles.helpContainer}>
				<ExternalLink
					style={styles.helpLink}
					href="https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet"
				>
					<Text style={styles.helpLinkText} color="primary">
						Tap here if your app doesn&apos;t automatically update after making changes
					</Text>
				</ExternalLink>
			</View>
		</View>
	);
};

EditScreenInfo.propTypes = propTypes;

EditScreenInfo.defaultProps = defaultProps;

export default EditScreenInfo;
