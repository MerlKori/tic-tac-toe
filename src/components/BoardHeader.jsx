import React from 'react';
import PropTypes from 'prop-types';

function getLabelClasses (active) {
	return active ? 'bla bla--active' : 'bla';
}

function BoardHeader ({players, activePlayer}) {
	return (
		<ul>
			{
				Object.keys(players).map((key, idx) => <li key={idx} className={getLabelClasses(activePlayer === players[key])}>{players[key]}</li>)
			}
		</ul>
	)
}

BoardHeader.propTypes = {
	players: PropTypes.object,
	activePlayer: PropTypes.string
}

export default BoardHeader;
