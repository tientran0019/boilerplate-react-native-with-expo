/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-04-20 23:50:36
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@zellosoft/antd-react-native/lib/style';

import { View, Image } from 'react-native';
import useCheckLogin from 'src/hooks/useCheckLogin';
import { useNavigation } from '@react-navigation/native';

import Text from 'src/components/UIDisplay/Text';
import Button from 'src/components/UIControls/Button';
import Container from 'src/components/Layout/Container';

const propTypes = {
	children: PropTypes.any,
};

const defaultProps = {
	children: null,
};

const withRequiredAuthentication = (Component) => {
	// eslint-disable-next-line func-names
	return function (props) {
		const { loading, loggedIn, retry } = useCheckLogin();
		const navigation = useNavigation();
		const theme = useTheme();

		if (loggedIn && !loading) {
			return <Component {...props} />;
		}

		return (
			<Container
				loading={loading}
				onRefresh={retry}
				style={{
					justifyContent: 'center',
				}}
			>
				{
					loading ?
						null :
						<View>
							<Image
								source={theme.name === 'light' ? require('./images/icon.png') : require('./images/icon-dark.png')}
								style={{
									width: 225,
									height: 257,
									marginBottom: 50,
									marginTop: 20,
									alignSelf: 'center',
								}}
								resizeMode="contain"
							/>
							<Text
								type="h3"
								style={{
									marginBottom: 5,
									textAlign: 'center',
								}}
							>
								AZA Holdings
							</Text>
							<Text
								style={{
									marginBottom: 40,
									textAlign: 'center',
								}}
							>
								Vui lòng đăng nhập để xem nội dụng này
							</Text>
							<Button onPress={() => navigation.navigate('Login')}>Đăng nhập</Button>
							<Text
								type="link"
								style={{
									textAlign: 'center',
									paddingVertical: 30,
								}}
								onPress={() => navigation.navigate('SignUp')}
							>
								Đăng ký
							</Text>
						</View>
				}
			</Container>
		);
	};
};

withRequiredAuthentication.propTypes = propTypes;

withRequiredAuthentication.defaultProps = defaultProps;

export default withRequiredAuthentication;
