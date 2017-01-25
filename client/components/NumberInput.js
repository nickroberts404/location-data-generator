import React, {Component, PropTypes} from 'react';

export default class NumberInput extends Component {
	render() {
		const { id, value, label, onChange } = this.props;
		return (
			<div className="number-input-group">
				<label className="number-input-label" htmlFor={id}>{label}</label>
				<input 
					type="number"
					id={id}
					className="number-input"
					placeholder={ 0 }
					value={value || 0}
					onChange={ onChange } />
			</div>
		);
	}
}

NumberInput.propTypes = {
	id: PropTypes.string.isRequired,
	value: PropTypes.number,
	label: PropTypes.string,
	onChange: PropTypes.func,
}