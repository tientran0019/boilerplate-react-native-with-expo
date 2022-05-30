/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-03-31 20:15:45
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { Button, Toast } from '@zellosoft/antd-react-native';

import { KeyboardAvoidingView, Image, Platform } from 'react-native';

import { actionLogin } from 'src/redux/actions/auth';

import Text from 'src/components/UIDisplay/Text';
import View from 'src/components/UIDisplay/View';
import Container from 'src/components/Layout/Container';
import Form from 'src/components/UIControls/Form';
import Touchable from 'src/components/UIControls/Touchable';
import InputText from 'src/components/UIControls/InputText';
import InputPassword from 'src/components/UIControls/InputPassword';

import useCheckLogin from 'src/hooks/useCheckLogin';

const propTypes = {
	navigation: PropTypes.object.isRequired,
};

const defaultProps = {
	navigation: {},
};

const SignInScreen = (props) => {
	const { navigation } = props;
	const { loading: loadingLogin, loggedIn } = useCheckLogin();

	const [loading, setLoading] = React.useState(false);
	const dispatch = useDispatch();

	const inputPass = React.useRef();
	const [form] = Form.useForm();

	React.useEffect(() => {
		if (loggedIn) {
			navigation.navigate('Root', { screen: 'Home' });
		}
	}, [loggedIn, navigation]);

	const handleSubmitFrom = React.useCallback(async (values) => {
		try {
			setLoading(true);
			await dispatch(await actionLogin(values));

			Toast.loading('Loading...', 0.3, () => {
				navigation.reset({
					index: 0,
					routes: [{ name: 'Root' }],
				});
			});
		} catch (error) {
			Toast.fail({
				content: error.message || error.toString,
			});
		} finally {
			setLoading(false);
		}
	}, [dispatch, navigation]);

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
				loading={loading || loadingLogin}
				showIndicator={false}
			>
				<View
					style={{
						flex: 2,
						justifyContent: 'center',
						marginTop: 20,
					}}
				>
					<Form
						form={form}
						onFinish={handleSubmitFrom}
						initialValues={{
							email: 'demo@gmail.com',
							password: '123123',
						}}
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
								flexDirection: 'row',
								justifyContent: 'space-between',
								marginBottom: 20,
								marginTop: 10,
							}}
						>
							<Text
								style={{

								}}
								type="link"
								color="important"
							>
								Forgot password?
							</Text>
							<Text
								style={{
									textAlign: 'right',
								}}
								type="link"
								color="important"
								onPress={() => navigation.navigate('SignUp')}
							>
								Sign up
							</Text>
						</View>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}
						>
							<Button
								// onPress={() => navigation.navigate('Dashboard')}
								onPress={form.submit}
								loading={loading}
								type="primary"
								style={{
									flex: 1,
									marginRight: 20,
								}}
							>
								Login
							</Button>
							<Touchable>
								<Image
									style={{
										width: 45,
										height: 45,
									}}
									resizeMode="contain"
									source={require('./images/face-id.png')}
								/>
							</Touchable>
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

SignInScreen.propTypes = propTypes;

SignInScreen.defaultProps = defaultProps;

export default SignInScreen;
