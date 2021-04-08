/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-07-16 13:45:05
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';
import { Entypo } from '@expo/vector-icons';

import { View } from 'react-native';

import COLORS from 'src/constants/colors';

import Touchable from 'src/components/Touchable';

const propTypes = {
	children: PropTypes.any.isRequired,
	title: PropTypes.any.isRequired,
	openDefault: PropTypes.bool.isRequired,
};

const defaultProps = {
	children: null,
	title: '',
	openDefault: false,
};

const Collapse = (props) => {
	const { children, title, openDefault } = props;

	const [collapse, setCollapse] = React.useState(openDefault);

	const handleCollapse = () => {
		setCollapse(!collapse);
	};

	return (
		<View
			style={{
				marginBottom: 10,
			}}
		>
			<Touchable
				onPress={handleCollapse}
				style={{
					// borderBottomWidth: 0.5,
					// borderBottomColor: COLORS.borderColorComponent,
					alignItems: 'center',
					flexDirection: 'row',
					justifyContent: 'space-between',
					paddingBottom: 10,
					paddingTop: 10,
				}}
			>
				<View>
					{title}
				</View>
				{
					collapse ?
						<Entypo name="chevron-thin-down" size={18} color={COLORS.gray2} /> :
						<Entypo name="chevron-thin-right" size={18} color={COLORS.gray2} />
				}
			</Touchable>
			{
				collapse &&
				<View
					style={{
						paddingHorizontal: 15,
						// borderBottomWidth: 0.5,
						// borderBottomColor: COLORS.borderColorComponent,
					}}
				>
					{children}
				</View>
			}
		</View>
	);
};

Collapse.propTypes = propTypes;

Collapse.defaultProps = defaultProps;

export default Collapse;
