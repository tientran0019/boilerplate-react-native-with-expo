/* --------------------------------------------------------
* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-04-20 23:50:36
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';
import NetInfo from '@react-native-community/netinfo';
import useAsyncFn from 'react-use/lib/useAsyncFn';
import useTheme from 'src/hooks/useTheme';
import { StatusBar } from 'expo-status-bar';

import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Button } from '@zellosoft/antd-react-native';

import Text from 'src/components/UIDisplay/Text';

const propTypes = {
	children: PropTypes.any,
};

const defaultProps = {
	children: null,
};

const withNetInfo = (Component) => {
	// eslint-disable-next-line func-names
	return function (props) {
		const [isConnected, setIsConnected] = React.useState(true);
		const theme = useTheme();

		const [{ loading }, doFetch] = useAsyncFn(async () => {
			const state = await NetInfo.fetch();
			// setIsConnected(state.isConnected);
			return state.isConnected;
		}, []);

		React.useEffect(() => {
			const unsubscribe = NetInfo.addEventListener(state => {
				setIsConnected(state.isConnected);
			});

			return () => {
				unsubscribe();
			};
		}, []);

		if (isConnected) {
			return <Component {...props} />;
		}

		return (
			<View
				style={{
					justifyContent: 'center',
					flex: 1,
					minHeight: '100%',
					padding: 20,
				}}
			>
				<StatusBar style={(theme.name === 'light' ? 'dark' : 'light')} />
				{
					loading ?
						null :
						<View>
							<Text
								color="primary"
								style={{
									marginBottom: 40,
									textAlign: 'center',
									lineHeight: 100,
								}}
							>
								<Feather name="wifi-off" size={100} />
							</Text>
							<Text
								type="h3"
								style={{
									marginBottom: 5,
									textAlign: 'center',
								}}
							>
								Lost Internet connection
							</Text>
							<Text
								style={{
									marginBottom: 60,
									textAlign: 'center',
								}}
							>
								Please check your network settings and try again.
							</Text>
							<Button onPress={doFetch}>Retry</Button>
						</View>
				}
			</View>
		);
	};
};

withNetInfo.propTypes = propTypes;

withNetInfo.defaultProps = defaultProps;

export default withNetInfo;
