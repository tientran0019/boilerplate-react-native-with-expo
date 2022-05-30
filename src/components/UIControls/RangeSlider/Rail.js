/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
import React, { memo } from 'react';
import { View } from 'react-native';

import Text from 'src/components/UIDisplay/Text';

import Thumb from './Thumb';

const Rail = ({ theme, marks = [], max, min, unit }) => {
	return (
		<View
			style={{
				flex: 1,
				height: 8,
				borderRadius: 8,
				backgroundColor: theme.fill_highlight,
			}}
		>
			{
				marks.map((el) => {
					return (
						<View
							key={el}
							style={{
								position: 'absolute',
								top: -1,
								left: `${((100 / (max - min)) * el) - 2}%`,
							}}
						>
							<Thumb theme={theme} mark />
							<Text
								type="strong"
								style={{
									fontSize: 10,
									marginTop: 5,
								}}
							>
								{el} {unit}
							</Text>
						</View>
					);
				})
			}
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					position: 'absolute',
					top: -6,
					right: -10,
					left: -10,
				}}
			>
				<Thumb theme={theme} />
				<Thumb theme={theme} />
			</View>
		</View>
	);
};

export default memo(Rail);
