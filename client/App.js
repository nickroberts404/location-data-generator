import React, {Component} from 'react';
import MainMap from './components/Map';
import Panel from './components/Panel';

export default class App extends Component {
	render() {
		return (
			<div>
				<MainMap />
				<Panel />
			</div>
		)
	}
}