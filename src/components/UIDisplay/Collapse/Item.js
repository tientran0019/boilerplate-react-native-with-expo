/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-04-05 13:55:53
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import useTheme from 'src/hooks/useTheme';
import { Entypo } from '@expo/vector-icons';

import Text from 'src/components/UIDisplay/Text';
import View from 'src/components/UIDisplay/View';
import Touchable from 'src/components/UIControls/Touchable';

const propTypes = {
	children: PropTypes.any.isRequired,
	title: PropTypes.any.isRequired,
	sub: PropTypes.any,
	right: PropTypes.any,
	left: PropTypes.any,
	style: PropTypes.object,
	last: PropTypes.bool,
	arrow: PropTypes.bool,
};

const defaultProps = {
	children: null,
	title: null,
	sub: null,
	right: null,
	left: null,
	style: {},
	last: false,
	arrow: true,
};

const ListItem = (props) => {
	const { children, title, style, sub, right, last, left, arrow, ...attrs } = props;

	const [show, setShow] = React.useState(false);

	const theme = useTheme();

	return (
		<View
			style={{
				borderBottomWidth: show ? 1 : 0,
				borderBottomColor: theme.border_color_base,
			}}
		>
			<Touchable
				{...attrs}
				style={{
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'center',
					padding: 15,
					paddingBottom: 15,
					paddingTop: 15,
					borderBottomWidth: 1,
					borderBottomColor: theme.border_color_base,
					...style,
				}}
				onPress={() => setShow(!show)}
			>
				{
					left
				}
				<View
					style={{
						flex: 1,
						marginLeft: left ? 10 : 0,
						marginRight: 5,
					}}
				>
					<View
						style={{
							// marginBottom: 3,
						}}
						type="h5"
					>
						{title}
					</View>

					{
						sub ?
							<View
								type="note"
								color="note"
								style={{

								}}
							>
								{sub}
							</View> :
							null
					}
				</View>
				{
					right
				}
				{
					arrow ?
						<Text style={{ marginLeft: 10 }}>
							{show ? <Entypo name="chevron-thin-up" size={18} /> : <Entypo name="chevron-thin-down" size={18} />}
						</Text> :
						null
				}
			</Touchable>
			{
				show ?
					<View
						style={{
							padding: 10,

						}}
					>
						{children}
					</View> :
					null
			}
		</View>
	);
};

ListItem.propTypes = propTypes;

ListItem.defaultProps = defaultProps;

export default ListItem;
