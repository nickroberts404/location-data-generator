import React, {Component} from 'react';
import MainMap from './components/Map';
import Panel from './components/Panel';
import 'whatwg-fetch';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {config: {}, nodes: []}
	}

	componentDidMount() {
		fetch('/api')
			.then(res => res.json())
			.then(res => this.setState({nodes: res}))
		// fetch('/api/config')
		// 	.then(res => res.json())
		// 	.then(res => this.setState({config: res}))

	}

	render() {
		const { config, nodes } = this.state;
		console.log('rendering');
		return (
			<div>
				<MainMap nodes={nodes} />
				<Panel config={config} />
			</div>
		)
	}
}