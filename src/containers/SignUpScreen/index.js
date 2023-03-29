/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-03-31 20:15:45
*------------------------------------------------------- */

import React from 'react';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { Button, Toast } from '@zellosoft/antd-react-native';

import { KeyboardAvoidingView, Platform } from 'react-native';

import { actionSignUp } from 'src/redux/actions/auth';

import Text from 'src/components/UIDisplay/Text';
import View from 'src/components/UIDisplay/View';
import Container from 'src/components/Layout/Container';
import Logo from 'src/components/Layout/Logo';
import Form from 'src/components/UIControls/Form';
import InputText from 'src/components/UIControls/InputText';
import InputPassword from 'src/components/UIControls/InputPassword';

import { useRouter, Link } from 'expo-router';

const propTypes = {
	// navigation: PropTypes.object.isRequired,
};

const defaultProps = {
	// navigation: {},
};

const SignUpScreen = (props) => {
	const [loading, setLoading] = React.useState(false);
	const dispatch = useDispatch();
	const router = useRouter();

	const inputPass = React.useRef();
	const [form] = Form.useForm();

	const handleSubmitFrom = React.useCallback(async (values) => {
		try {
			setLoading(true);
			await dispatch(await actionSignUp(values));

			Toast.loading('Loading...', 0.3, () => {
				router.replace('/');
			});
		} catch (error) {
			Toast.fail({
				content: error.message || error.toString,
			});
		} finally {
			setLoading(false);
		}
	}, [dispatch, router]);

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={{
				flex: 1,
			}}
		>
			<Container
				headerShown
				headerTransparent
				loading={loading}
				showIndicator={false}
			>
				<View
					style={{
						flex: 1,
						justifyContent: 'center',
						marginTop: 20,
					}}
				>
					<View
						style={{
							flex: 1,
							justifyContent: 'center',
							marginTop: 20,
						}}
					>
						<Logo size={100} />
					</View>
					<Form
						form={form}
						onFinish={handleSubmitFrom}
					>
						<Form.Field
							name="email"
							rules={[
								{
									type: 'email',
									message: 'Invalid email',
								},
								{
									required: true,
									whitespace: false,
									message: 'Required Information',
								},
							]}
							style={{
								marginBottom: 20,
							}}
						>
							<InputText
								placeholder="Email"
								type="email"
								autoCapitalize="none"
								blurOnSubmit={false}
								onSubmitEditing={() => { inputPass?.current?.focus(); }}
							/>
						</Form.Field>
						<Form.Field
							name="fullName"
							rules={[
								{
									required: true,
									whitespace: false,
									message: 'Required Information',
								},
							]}
							style={{
								marginBottom: 20,
							}}
						>
							<InputText
								placeholder="Full Name"
								type="text"
								autoCapitalize="none"
								blurOnSubmit={false}
								onSubmitEditing={() => { inputPass?.current?.focus(); }}
							/>
						</Form.Field>
						<Form.Field
							name="password"
							rules={[
								{
									required: true,
									message: 'Required Information',
								},
								// {
								// 	pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/,
								// 	message: 'Password needs to have at least one capital letter, some letters, one special character',
								// },
							]}
							style={{
								marginBottom: 10,
							}}
						>
							<InputPassword
								ref={inputPass}
								placeholder="Password"
								secureTextEntry
								returnKeyType="go"
								onSubmitEditing={form.submit}
							/>
						</Form.Field>
						<View
							style={{
								marginTop: 20,
							}}
						>
							<Button
								// onPress={() => navigation.navigate('Dashboard')}
								onPress={form.submit}
								loading={loading}
								type="primary"
								style={{
									flex: 1,
								}}
							>
								Sign Up
							</Button>
							<Link href="/login" asChild replace>
								<Text
									style={{
										textAlign: 'center',
										marginTop: 20,
									}}
									type="link"
								>
									Login
								</Text>
							</Link>
						</View>
					</Form>
				</View>
				<View
					style={{
						flex: 1,
						justifyContent: 'flex-end',
					}}
				>
					<Text
						style={{
							marginTop: 30,
							marginBottom: 0,
							textAlign: 'center',
						}}
						type="note"
					>
						2021 copyright © CodeBase. All rights reserved.
					</Text>
				</View>
			</Container>
		</KeyboardAvoidingView>
	);
};

SignUpScreen.propTypes = propTypes;

SignUpScreen.defaultProps = defaultProps;

export default SignUpScreen;
