import React, {Component, PropTypes} from 'react';
import NumberInput from './NumberInput';

export default class Panel extends Component {
	render() {
		return (
			<div className="panel">
				<NumberInput 
					id="node-count-input"
					value={5}
					label="Node Count"
					onChange={() => console.log('node count changed...')}/>
			</div>
		);
	}
}


Panel.propTypes = {
}