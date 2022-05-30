import React from 'react';
import { ExpoLinksView } from '@expo/samples';

import Container from 'src/components/Layout/Container';

const LinksScreen = () => {
	return (
		<Container>
			{/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
			<ExpoLinksView />
		</Container>
	);
};

LinksScreen.navigationOptions = {
	title: 'Links',
};

export default LinksScreen;
