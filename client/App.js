import React, {Component} from 'react';
import MainMap from './components/Map';
import Panel from './components/Panel';
import 'whatwg-fetch';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {settings: {}, nodes: [], bboxMode: false}
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

	updateBBoxMode(bboxMode) {
		this.setState({bboxMode});
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
		const { settings, nodes, bboxMode } = this.state;
		return (
			<div>
				<MainMap nodes={nodes} bboxMode={bboxMode} />
				<Panel
					settings={settings}
					updateSettings={this.updateSettings.bind(this)}
					resetData={this.resetData.bind(this)}
					updateBBoxMode={this.updateBBoxMode.bind(this)}
					bboxMode={bboxMode} />
			</div>
		)
	}
}