import React from 'react';
import PropTypes from 'prop-types';

function Cell (idx, list) {
	return (
		<div>
			{list[idx]}
		</div>
	);
}

Cell.propTypes = {
	idx: PropTypes.number,
	list: PropTypes.array
};

export default Cell;
