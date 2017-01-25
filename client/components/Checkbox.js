import React, {Component, PropTypes} from 'react';

export default class Checkbox extends Component {
	render() {
		const { id, value, label, onChange } = this.props;
		return (
			<div className="checkbox-group">
				<label className="checkbox-label" htmlFor={id}>{label}</label>
				<input 
					type="checkbox"
					id={id}
					className="checkbox"
					checked={value}
					onChange={ onChange } />
			</div>
		);
	}
}

Checkbox.propTypes = {
	id: PropTypes.string.isRequired,
	value: PropTypes.bool,
	label: PropTypes.string,
	onChange: PropTypes.func,
}