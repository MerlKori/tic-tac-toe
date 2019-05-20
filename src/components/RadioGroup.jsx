import React from 'react';
import PropTypes from 'prop-types';

function RadioGroup ({label, list, defaultChecked, onChange}) {
	return (
		<fieldset>
			<legend>{label}</legend>
			{
				list.map((item, idx) => {
					return (
						<React.Fragment key={idx}>
							<label>{item}
								<input
									onChange={onChange}
									checked={defaultChecked === item}
									value={item}
									type="radio"
									name="radio"/>
							</label>
						</React.Fragment>
					)
				})
			}
		</fieldset>
	)
}

RadioGroup.propTypes = {
	label: PropTypes.string,
	defaultChecked: PropTypes.string,
	list: PropTypes.array,
	onChange: PropTypes.func
};

export default RadioGroup;
