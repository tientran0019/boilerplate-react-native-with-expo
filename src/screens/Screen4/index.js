/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email ductienas@gmail.com
* Phone 0972970075
*
* Created: 2019-01-30 17:47:16
*------------------------------------------------------- */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { View, Text } from 'react-native';

export default class Screen4 extends PureComponent {
	static propTypes = {
		// prop: PropTypes.object.isRequired,
	}

	static defaultProps = {}

	render() {
		const {  } = this.props;

		return (
			<View
				style={{
					flex: 1,
					backgroundColor: '#fff',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Text
					style={{

					}}
				>
					Screen 4
				</Text>
			</View>
		);
	}
}
