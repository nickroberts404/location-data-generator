import React, {Component, PropTypes} from 'react';
import NumberInput from './NumberInput';

export default class Panel extends Component {
	
	render() {
		const { settings, updateSettings, resetData } = this.props;
		return (
			<div className="panel">
				<NumberInput 
					id="node-count-input"
					value={settings.nodeCount || 0}
					label="Node Count"
					onChange={(e) => updateSettings({nodeCount: parseInt(e.target.value)})} />
				<button onClick={resetData}>Reset Data</button>
			</div>
		);
	}
}


Panel.propTypes = {
	settings: PropTypes.object.isRequired,
	updateSettings: PropTypes.func.isRequired,
	resetData: PropTypes.func.isRequired
}