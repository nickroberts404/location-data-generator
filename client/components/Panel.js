import React, {Component, PropTypes} from 'react';
import NumberInput from './NumberInput';
import Checkbox from './Checkbox';

export default class Panel extends Component {
	
	render() {
		const { settings, updateSettings, resetData, bboxMode, updateBBoxMode } = this.props;
		return (
			<div className="panel">
				<NumberInput 
					id="node-count-input"
					value={settings.nodeCount || 0}
					label="Node Count"
					onChange={(e) => updateSettings({nodeCount: parseInt(e.target.value)})} />
				<Checkbox
					id="bbox-mode-checkbox"
					value={bboxMode}
					label="Draw Bounding Box"
					onChange={(e) => updateBBoxMode(e.target.checked)} />
				<button onClick={resetData}>Reset Data</button>
			</div>
		);
	}
}


Panel.propTypes = {
	settings: PropTypes.object.isRequired,
	updateSettings: PropTypes.func.isRequired,
	resetData: PropTypes.func.isRequired,
	updateBBoxMode: PropTypes.func.isRequired,
	bboxMode: PropTypes.bool,
}