import React from 'react';
import PropTypes from 'prop-types';

function Result ({winner}) {
	return (
		<div className="game-result">
			{winner}
		</div>
	)
}

Result.propTypes = {
	winner: PropTypes.string
}

export default Result;
