/* eslint-disable react/style-prop-object */
/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 1522-03-29 14:29:29
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import { useHeaderHeight } from '@react-navigation/elements';
import useTheme from 'src/hooks/useTheme';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useScrollToTop } from '@react-navigation/native';

import { ScrollView, View } from 'react-native';

import Loading from 'src/components/Layout/Loading';
import RefreshControl from 'src/components/Layout/Loading/RefreshControl';
import FocusAwareStatusBar from 'src/components/Layout/FocusAwareStatusBar';
import BackgroundPrimary from 'src/components/Layout/BackgroundPrimary';
import ButtonToTop from 'src/components/Layout/ButtonToTop';

const propTypes = {
	style: PropTypes.object,
	headerTransparent: PropTypes.bool,
	bgImg: PropTypes.bool,
	headerShown: PropTypes.bool,
	loading: PropTypes.bool,
	showIndicator: PropTypes.bool,
	children: PropTypes.any,
	fixedTop: PropTypes.any,
	fixedBottom: PropTypes.any,
	scrollable: PropTypes.bool,
	refreshing: PropTypes.bool,
	onRefresh: PropTypes.func,
	onScroll: PropTypes.func,
	statusBarStyle: PropTypes.string,
};

const defaultProps = {
	style: {},
	headerTransparent: false,
	bgImg: false,
	loading: false,
	showIndicator: true,
	scrollable: true,
	headerShown: true,
	refreshing: false,
	onRefresh: null,
	onScroll: f => f,
	children: null,
	fixedTop: null,
	fixedBottom: null,
	statusBarStyle: null,
};

const Container = (props) => {
	const { style, fixedTop, fixedBottom, children, statusBarStyle, scrollable, headerTransparent, headerShown, bgImg, loading, showIndicator, onRefresh, onScroll, refreshing, ...attrs } = props;

	const scrollRef = React.useRef();
	const [showBtnToTop, setShowBtnToTop] = React.useState(false);

	const headerHeight = useHeaderHeight();
	const insets = useSafeAreaInsets();

	const theme = useTheme();
	useScrollToTop(scrollRef);

	let paddingTop = headerTransparent ? headerHeight + theme.spacing_lg : theme.spacing_lg;

	if (!headerShown) {
		paddingTop = insets.top + theme.spacing_lg;
	}

	const WrapperCpn = scrollable ? ScrollView : View;
	const BgImg = bgImg ? BackgroundPrimary : View;

	const handleScroll = React.useCallback((event) => {
		if (event.nativeEvent.contentOffset.y > 300 && !showBtnToTop) {
			setShowBtnToTop(true);
		}
		if (event.nativeEvent.contentOffset.y < 300 && showBtnToTop) {
			setShowBtnToTop(false);
		}
		onScroll(event);
	}, [onScroll, showBtnToTop]);

	return (
		<BgImg
			style={{
				flex: 1,
			}}
		>
			<View
				style={{
					flex: 1,
					backgroundColor: bgImg ? 'transparent' : (style.backgroundColor ?? theme.fill_body),
					paddingTop: !headerShown ? insets.top : 0,
				}}
			>
				<FocusAwareStatusBar style={statusBarStyle || (theme.name === 'light' ? 'dark' : 'light')} />

				<WrapperCpn
					{...attrs}
					stickyHeaderIndices={fixedTop ? [0] : undefined}
					ref={scrollRef}
					style={{
						flex: 1,
						flexGrow: 1, // use flexGrow: 1 instead of flex: 1 – works like minHeight
					}}
					contentContainerStyle={{
						flexGrow: 1,
					}}
					refreshControl={
						onRefresh ?
							<RefreshControl
								refreshing={refreshing}
								onRefresh={onRefresh}
								colors={[theme.brand_primary]}
								tintColor={theme.brand_primary}
							/> :
							null
					}
					onScroll={handleScroll}
					scrollEventThrottle={16}
					keyboardShouldPersistTaps="handled"
				>
					{
						fixedTop ?
							<View
								style={{
									backgroundColor: bgImg ? 'transparent' : (style.backgroundColor ?? theme.fill_body),
								}}
							>
								{fixedTop}
							</View> :
							null
					}
					<View
						style={[
							{
								flex: 1,
								minHeight: '100%',
								padding: (scrollable ? theme.spacing_lg : 0),
								paddingBottom: fixedBottom ? theme.spacing_lg : (insets.bottom || theme.spacing_lg),
							},
							style,
							{
								paddingTop: style.paddingTop ?? style.padding ?? (headerShown ? paddingTop : 0),
							},
						]}
					>
						{children}
					</View>
				</WrapperCpn>
				{
					fixedBottom ?
						<View
							style={{
								paddingBottom: insets.bottom || theme.spacing_lg,
							}}
						>
							{fixedBottom}
						</View> :
						null
				}
				<ButtonToTop
					onPress={() => { scrollRef.current?.scrollTo({ x: 0, y: 0, animated: true }); }}
					show={showBtnToTop}
				/>
				<Loading loading={loading} showIndicator={showIndicator} />
			</View>
		</BgImg>
	);
};

Container.propTypes = propTypes;

Container.defaultProps = defaultProps;

export default React.memo(Container);
