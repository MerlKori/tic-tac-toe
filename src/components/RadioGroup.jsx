import React from 'react';
import PropTypes from 'prop-types';

function RadioGroup ({label, list, defaultChecked, onChange}) {
	return (
		<fieldset className="radio-group my-2">
			<legend>{label}</legend>
			{
				list.map((item, idx) => {
					return (
						<label
						className="mx-3"
							key={idx}>{item}
							<input
								onChange={onChange}
								checked={defaultChecked === item}
								className="ml-2"
								value={item}
								type="radio"
								name="radio"/>
						</label>
					)
				})
			}
		</fieldset>
	);
}

RadioGroup.propTypes = {
	label: PropTypes.string,
	defaultChecked: PropTypes.string,
	list: PropTypes.array,
	onChange: PropTypes.func
};

export default RadioGroup;
