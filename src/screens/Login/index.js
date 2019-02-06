/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email ductienas@gmail.com
* Phone 0972970075
*
* Created: 2019-01-30 16:54:22
*------------------------------------------------------- */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	StyleSheet,
	View,
	Animated,
	Dimensions,
} from 'react-native';
import { Input, Button } from 'react-native-elements';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-around',
		padding: 20,
	},
	backgroundImage: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
		paddingHorizontal: 30,
	},
	section: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	middle: {
		flex: 2,
		justifyContent: 'flex-start',
		alignSelf: 'stretch',
	},
	last: {
		justifyContent: 'flex-end',
	},
	Input: {
		alignSelf: 'stretch',
		marginTop: 20,
	},
	logo: {
		height: 150,
	},
	socialLoginContainer: {
		flexDirection: 'row',
		alignSelf: 'stretch',
		marginTop: 15,
		justifyContent: 'space-between',
	},
	socialButton: {
		flex: 1,
	},
	socialButtonCenter: {
		marginLeft: 10,
		marginRight: 10,
	},
});

export default class Login extends Component {
	static propTypes = {
		navigation: PropTypes.object.isRequired,
	}

	static defaultProps = {}

	state = {
		anim: new Animated.Value(0),
	}

	componentDidMount() {
		Animated.timing(this.state.anim, { toValue: 3000, duration: 3000 }).start();
	}

	fadeIn(delay, from = 0) {
		const { anim } = this.state;
		return {
			opacity: anim.interpolate({
				inputRange: [delay, Math.min(delay + 500, 3000)],
				outputRange: [0, 1],
				extrapolate: 'clamp',
			}),
			transform: [{
				translateY: anim.interpolate({
					inputRange: [delay, Math.min(delay + 500, 3000)],
					outputRange: [from, 0],
					extrapolate: 'clamp',
				}),
			}],
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={[styles.section, { paddingTop: 30 }]}>
					<Animated.Image
						resizeMode="contain"
						style={[styles.logo, this.fadeIn(0)]}
						source={require('assets/images/icon.png')}
					/>
				</View>

				<Animated.View style={[styles.section, styles.middle, this.fadeIn(700, -20)]}>
					<Input
						placeholder="Email"
						containerStyle={styles.Input}
						autoCapitalize="none"
						autoCorrect={false}
						keyboardType="email-address"
					/>

					<Input
						placeholder="Password"
						secureTextEntry
						containerStyle={styles.Input}
					/>

					<Animated.View
						style={[
							{
								marginTop: 40,
								width: '100%',
							},
							this.fadeIn(700, -20),
						]}
					>
						<Button
							containerStyle={{ alignSelf: 'stretch', marginBottom: 10 }}
							title="Login"
							onPress={() => this.props.navigation.navigate('Main')}
						/>
					</Animated.View>
				</Animated.View>
			</View>
		);
	}
}
