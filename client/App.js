import React, {Component} from 'react';
import MainMap from './components/Map';
import Panel from './components/Panel';
import 'whatwg-fetch';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {settings: {}, nodes: []}
	}

	componentDidMount() {
		fetch('/api')
			.then(res => res.json())
			.then(res => this.setState({nodes: res}))
		fetch('/settings')
			.then(res => res.json())
			.then(res => this.setState({settings: res}))
	}

	updateConfig

	render() {
		const { settings, nodes } = this.state;
		console.log(settings);
		return (
			<div>
				<MainMap nodes={nodes} />
				<Panel settings={settings} />
			</div>
		)
	}
}