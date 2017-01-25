import React, {Component} from 'react';
import MainMap from './Map';
import Panel from './Panel';

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