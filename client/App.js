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

	updateSettings(newSettings) {
		const { settings } = this.state;
		this.setState({settings: Object.assign({}, settings, newSettings)});
	}

	resetData() {
		const { settings } = this.state;
		fetch('/settings', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(settings)
		})
			.then(res => res.json())
			.then(res => {
				this.setState(res)
			})
	}

	render() {
		const { settings, nodes } = this.state;
		return (
			<div>
				<MainMap nodes={nodes} />
				<Panel
					settings={settings}
					updateSettings={this.updateSettings.bind(this)}
					resetData={this.resetData.bind(this)} />
			</div>
		)
	}
}