/* eslint-disable react/style-prop-object */
/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-04-08 12:14:02
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import { useHeaderHeight } from '@react-navigation/native-stack';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import COLORS from 'src/constants/colors';

import { ScrollView, View, RefreshControl } from 'react-native';

import Loading from 'src/components/Loading';
import FocusAwareStatusBar from 'src/components/FocusAwareStatusBar';

const propTypes = {
	style: PropTypes.object,
	headerTransparent: PropTypes.bool,
	headerShown: PropTypes.bool,
	loading: PropTypes.bool,
	showIndicator: PropTypes.bool,
	children: PropTypes.any,
	scrollable: PropTypes.bool,
	refreshing: PropTypes.bool,
	onRefresh: PropTypes.func,
	statusBarStyle: PropTypes.string,
};

const defaultProps = {
	style: {},
	headerTransparent: false,
	loading: false,
	showIndicator: true,
	scrollable: true,
	headerShown: true,
	refreshing: false,
	onRefresh: null,
	children: null,
	statusBarStyle: 'dark',
};

const Container = (props) => {
	const { style, children, statusBarStyle, scrollable, headerTransparent, headerShown, loading, showIndicator, onRefresh, refreshing } = props;

	const headerHeight = useHeaderHeight();
	const insets = useSafeAreaInsets();

	let paddingTop = headerTransparent ? headerHeight + 10 : 10;

	if (!headerShown) {
		paddingTop = insets.top + 10;
	}

	const WrapperCpn = scrollable ? ScrollView : View;

	return (
		<WrapperCpn
			style={{
				flex: 1,
				flexGrow: 1, // use flexGrow: 1 instead of flex: 1 – works like minHeight
				backgroundColor: style.backgroundColor ?? COLORS.bgPrimary,
			}}
			contentContainerStyle={{
				flexGrow: 1,
			}}
			refreshControl={
				onRefresh ?
					<RefreshControl
						refreshing={refreshing}
						onRefresh={onRefresh}
						colors={[COLORS.primary]}
						tintColor={COLORS.primary}
					/> :
					null
			}
			keyboardShouldPersistTaps="handled"
		>
			<FocusAwareStatusBar style={statusBarStyle} />
			<View
				style={[
					{
						flex: 1,
						padding: scrollable ? 20 : 0,
						paddingTop,
						flexGrow: 1,
						paddingBottom: insets.bottom || 20,
						minHeight: '100%',
						backgroundColor: COLORS.bgPrimary,
					},
					style,
				]}
			>
				{children}
			</View>
			<Loading loading={loading} showIndicator={showIndicator} />
		</WrapperCpn>
	);
};

Container.propTypes = propTypes;

Container.defaultProps = defaultProps;

export default Container;
