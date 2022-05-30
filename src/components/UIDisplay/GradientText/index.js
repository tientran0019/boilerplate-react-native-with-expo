/* eslint-disable react/prop-types */
/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-04-15 08:36:40
*------------------------------------------------------- */
import React from 'react';
import MaskedView from '@react-native-community/masked-view';
import { LinearGradient } from 'expo-linear-gradient';

import Text from 'src/components/UIDisplay/Text';

const GradientText = ({ colors, start = { x: 0, y: 1 }, end = { x: 1, y: 0 }, locations = [0, 0.5, 1], ...rest }) => {
	return (
		<MaskedView maskElement={<Text {...rest} />}>
			<LinearGradient colors={colors} start={start} end={end} locations={locations}>
				<Text {...rest} style={[rest.style, { opacity: 0 }]} />
			</LinearGradient>
		</MaskedView>
	);
};

export default GradientText;
