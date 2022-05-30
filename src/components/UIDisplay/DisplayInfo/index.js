/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2022-04-14 14:21:36
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';

import View from 'src/components/UIDisplay/View';
import Text from 'src/components/UIDisplay/Text';

const propTypes = {
	icon: PropTypes.any,
	label: PropTypes.any,
	value: PropTypes.any,
	style: PropTypes.object,
	align: PropTypes.string,
	inline: PropTypes.bool,
};

const defaultProps = {
	icon: null,
	label: '--',
	value: '--',
	style: {},
	align: 'left',
	inline: false,
};

const DisplayInfo = (props) => {
	const { icon, align, inline, value, label, style } = props;

	return (
		<View
			style={{
				flexDirection: 'row',
				alignItems: 'center',
				marginBottom: inline ? 3 : 15,
				flex: 1,
				...style,
			}}
		>
			{
				icon ?
					<Text style={{ lineHeight: 30, marginRight: 10 }} color="primary">
						{icon}
					</Text> :
					null
			}
			<View
				style={{
					flex: 1,
					flexDirection: inline ? 'row' : 'column',
					alignItems: inline ? 'center' : 'flex-start',
					justifyContent: inline ? 'space-between' : 'space-between',
				}}
			>
				<View
					// type="strong"
					// color="note"
					style={{
						fontSize: 12,
						marginBottom: 3,
						textAlign: align,
						marginRight: 20,
						flex: 1,
					}}
				>
					{label}
				</View>
				<View
					type="strong"
					style={{
						fontSize: 13,
						textAlign: align,
					}}
				>
					{value}
				</View>
			</View>
		</View>
	);
};

DisplayInfo.propTypes = propTypes;

DisplayInfo.defaultProps = defaultProps;

export default DisplayInfo;
