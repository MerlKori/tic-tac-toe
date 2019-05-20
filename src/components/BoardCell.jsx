import React from 'react';
import PropTypes from 'prop-types';

function Cell ({value, onClick}) {
	return (
		<div
			className="board__cells"
			onClick={onClick} >
			{value}
		</div>
	);
}

Cell.propTypes = {
	value: PropTypes.string,
	onClick: PropTypes.func
};

export default Cell;
