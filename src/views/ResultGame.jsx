import React from 'react';
import PropTypes from 'prop-types';

function Result ({winner}) {
	return (
		<div className="game-result">
			{winner.name}
		</div>
	);
}

Result.propTypes = {
	winner: PropTypes.object
}

export default Result;
