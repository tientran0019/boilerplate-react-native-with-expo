/* --------------------------------------------------------

* Author Tien Tran
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2021-10-02 17:49:59
*------------------------------------------------------- */

import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { View } from '@zellosoft/antd-react-native';

import Text from 'src/components/UIDisplay/Text';

import Switch from 'src/components/UIControls/Switch';

import { updateSettings } from 'src/redux/actions/settings';

const propTypes = {
	style: PropTypes.object,
};

const defaultProps = {
	style: {},
};

const ToggleTheme = (props) => {
	// const { children } = props;

	const settings = useSelector(state => state.settings);

	const dispatch = useDispatch();

	const handleChangeSettings = React.useCallback((val) => {
		dispatch(updateSettings({
			theme: val ? 'light' : 'dark',
		}));
	}, [dispatch]);

	return (
		<View
			{...props}
			style={{
				flexDirection: 'row',
				alignItems: 'center',
				...props.style,
			}}
		>
			<Text style={{ marginRight: 5 }}>{settings.theme === 'light' ? 'Dark' : 'Light'}</Text>
			<Switch onChange={handleChangeSettings} value={settings.theme === 'light'} />
		</View>
	);
};

ToggleTheme.propTypes = propTypes;

ToggleTheme.defaultProps = defaultProps;

export default React.memo(ToggleTheme);
