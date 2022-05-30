/* eslint-disable react/function-component-definition */
/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-05-06 16:30:11
*------------------------------------------------------- */
import * as React from 'react';
import { useTheme } from '@zellosoft/antd-react-native/lib/style';
import {
	Animated,
	View,
	StyleSheet,
	Easing,
	Dimensions,
} from 'react-native';
import MaskedView from '@react-native-community/masked-view';

import { LinearGradient } from 'expo-linear-gradient';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function SkeletonPlaceholder({
	children,
	backgroundColor,
	highlightColor,
	speed = 1000,
	direction = 'right',
	style,
}) {
	const theme = useTheme();

	const bgColor = React.useMemo(() => (backgroundColor || (theme.name === 'light' ? '#e6e6e6' : '#32204e')), [backgroundColor, theme.name]);
	const hlColor = React.useMemo(() => (highlightColor || (theme.name === 'light' ? '#eeeeee' : '#3c2c53')), [highlightColor, theme.name]);

	const [layout, setLayout] = React.useState();
	const animatedValue = React.useMemo(() => new Animated.Value(0), []);
	const translateX = React.useMemo(
		() => animatedValue.interpolate({
			inputRange: [0, 1],
			outputRange:
				direction === 'right'
					? [-SCREEN_WIDTH, SCREEN_WIDTH]
					: [SCREEN_WIDTH, -SCREEN_WIDTH],
		}),
		[animatedValue],
	);

	React.useEffect(() => {
		if (speed > 0) {
			const loop = Animated.loop(
				Animated.timing(animatedValue, {
					toValue: 1,
					duration: speed,
					easing: Easing.ease,
					useNativeDriver: true,
				}),
			);
			if (layout?.width && layout?.height) {
				loop.start();
			}
			return () => loop.stop();
		}
	}, [animatedValue, speed, layout?.width, layout?.height]);

	const absoluteTranslateStyle = React.useMemo(
		() => ({ ...StyleSheet.absoluteFillObject, transform: [{ translateX }] }),
		[translateX],
	);
	const viewStyle = React.useMemo(
		() => ({ backgroundColor: bgColor, overflow: 'hidden' }),
		[bgColor],
	);

	const getChildren = React.useCallback(
		(element) => {
			return React.Children.map(
				element,
				(child, index) => {
					let style;
					if (child.type.displayName === 'SkeletonPlaceholderItem') {
						const { style: st, height, width } = child.props;
						style = { borderRadius: 4, height, width, ...st };
					} else {
						style = child.props.style;
					}
					if (child.props.children) {
						return (
							<View key={index} style={style}>
								{getChildren(child.props.children)}
							</View>
						);
					}
					return (
						<View key={index} style={styles.childContainer}>
							<View style={[style, viewStyle]} />
						</View>
					);
				},
			);
		},
		[viewStyle],
	);

	return layout?.width && layout?.height ? (
		<MaskedView
			style={{ height: layout.height, width: layout.width }}
			maskElement={
				<View
					style={{
						...style,
						backgroundColor: 'transparent',
					}}
				>
					{getChildren(children)}
				</View>
			}
		>
			<View style={{ flexGrow: 1, backgroundColor: bgColor }} />
			{speed > 0 && (
				<Animated.View
					style={[
						{
							flexDirection: 'row',
						},
						absoluteTranslateStyle,
					]}
				>
					<MaskedView
						style={StyleSheet.absoluteFill}
						maskElement={
							<LinearGradient
								start={{ x: 0, y: 0 }}
								end={{ x: 1, y: 0 }}
								style={[StyleSheet.absoluteFill]}
								colors={['transparent', 'black', 'transparent']}
							/>
						}
					>
						<View
							style={[
								StyleSheet.absoluteFill,
								{ backgroundColor: hlColor },
							]}
						/>
					</MaskedView>
				</Animated.View>
			)}
		</MaskedView>
	) : (
		<View
			style={{
				...style,
			}}
			onLayout={(event) => {
				setLayout(event.nativeEvent.layout);
			}}
		>
			{getChildren(children)}
		</View>
	);
}

SkeletonPlaceholder.Item = (props) => {
	const { children, style, height, width } = props;

	return (
		<View style={{ borderRadius: 4, height, width, ...style }}>{children}</View>
	);
};

SkeletonPlaceholder.Item.displayName = 'SkeletonPlaceholderItem';

const styles = StyleSheet.create({
	childContainer: {
		position: 'relative',
	},
	gradient: {
		flex: 1,
	},
});
