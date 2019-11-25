import React, { useState } from 'react';
import View from '@vkontakte/vkui/dist/components/View/View';
import Auth from './panels/Auth';
import Signup from './panels/Signup';

import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');

	// useEffect(() => {
	// 	connect.subscribe(({ detail: { type, data }}) => {
	// 		if (type === 'VKWebAppUpdateConfig') {
	// 			const schemeAttribute = document.createAttribute('scheme');
	// 			schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
	// 			document.body.attributes.setNamedItem(schemeAttribute);
	// 		}
	// 	});
	// 	async function fetchData() {
	// 		const user = await connect.sendPromise('VKWebAppGetUserInfo');
	// 		setUser(user);
	// 		setPopout(null);
	// 	}
	// 	fetchData();
	// }, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<View activePanel={activePanel}>
			<Home id='home' go={go} />
			<Auth id='auth' go={go} />
			<Signup id='signup' go={go} />
		</View>
	);
}

export default App;

