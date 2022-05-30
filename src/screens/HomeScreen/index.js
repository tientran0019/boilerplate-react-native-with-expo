import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
	Image,
	Platform,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';

import Text from 'src/components/UIDisplay/Text';
import View from 'src/components/UIDisplay/View';
import Container from 'src/components/Layout/Container';
import ToggleTheme from 'src/components/Layout/ToggleTheme';

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	developmentModeText: {
		marginBottom: 20,
		fontSize: 14,
		lineHeight: 19,
		textAlign: 'center',
	},
	contentContainer: {
		paddingTop: 30,
	},
	welcomeContainer: {
		alignItems: 'center',
		marginTop: 10,
		marginBottom: 20,
	},
	welcomeImage: {
		width: 100,
		height: 80,
		resizeMode: 'contain',
		marginTop: 3,
		marginLeft: -10,
	},
	getStartedContainer: {
		alignItems: 'center',
		marginHorizontal: 50,
	},
	homeScreenFilename: {
		marginVertical: 7,
	},
	codeHighlightText: {
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
	tabBarInfoContainer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		...Platform.select({
			ios: {
				shadowColor: 'black',
				shadowOffset: { width: 0, height: -3 },
				shadowOpacity: 0.1,
				shadowRadius: 3,
			},
			android: {
				elevation: 20,
			},
		}),
		alignItems: 'center',
		paddingVertical: 20,
	},
	tabBarInfoText: {
		fontSize: 17,
		textAlign: 'center',
	},
	navigationFilename: {
		marginTop: 5,
	},
	helpContainer: {
		marginTop: 15,
		alignItems: 'center',
	},
	helpLink: {
		paddingVertical: 15,
	},
	helpLinkText: {
		fontSize: 14,
	},
});

function handleLearnMorePress() {
	WebBrowser.openBrowserAsync(
		'https://docs.expo.io/versions/latest/workflow/development-mode/',
	);
}

function handleHelpPress() {
	WebBrowser.openBrowserAsync(
		'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes',
	);
}

const DevelopmentModeNotice = () => {
	if (__DEV__) {
		const learnMoreButton = (
			<Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
				Learn more
			</Text>
		);

		return (
			<Text style={styles.developmentModeText}>
				Development mode is enabled: your app will be slower but you can use
				useful development tools. {learnMoreButton}
			</Text>
		);
	}
	return (
		<Text style={styles.developmentModeText}>
			You are not in development mode: your app will run at full speed.
		</Text>
	);
};

const HomeScreen = () => {
	return (
		<Container
			scrollable={false}
		>
			<ScrollView
				style={styles.container}
				contentContainerStyle={styles.contentContainer}
			>
				<View
					style={{
						alignSelf: 'center',
						marginBottom: 20,
					}}
				>
					<ToggleTheme />
				</View>
				<View style={styles.welcomeContainer}>
					<Image
						source={
							__DEV__
								? require('src/assets/images/robot-dev.png')
								: require('src/assets/images/robot-prod.png')
						}
						style={styles.welcomeImage}
					/>
				</View>

				<View style={styles.getStartedContainer}>
					<DevelopmentModeNotice />

					<Text style={styles.getStartedText}>Get started by opening</Text>

					<View
						style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
					>
						<Text>screens/HomeScreen.js</Text>
					</View>

					<Text style={styles.getStartedText}>
						Change this text and your app will automatically reload.
					</Text>
				</View>

				<View style={styles.helpContainer}>
					<TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
						<Text style={styles.helpLinkText}>
							Help, it didn’t automatically reload!
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>

			<View style={styles.tabBarInfoContainer}>
				<Text style={styles.tabBarInfoText}>
					This is a tab bar. You can edit it in:
				</Text>

				<View
					style={[styles.codeHighlightContainer, styles.navigationFilename]}
				>
					<Text style={styles.codeHighlightText}>
						navigation/MainTabNavigator.js
					</Text>
				</View>
			</View>
		</Container>
	);
};

HomeScreen.navigationOptions = {
	header: null,
};

export default HomeScreen;
