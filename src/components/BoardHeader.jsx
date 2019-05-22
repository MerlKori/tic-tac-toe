import React from 'react';
import PropTypes from 'prop-types';

function getLabelClasses (active) {
	return active ? 'board__header-title board__header-title--active mx-2' : 'board__header-title mx-2';
}

function BoardHeader ({players, activePlayer, children}) {
	return (
		<ul className="board__header my-2">
			{
				Object.keys(players).map((key, idx) => {
					return (
						<li
							key={idx}
							className={getLabelClasses(activePlayer === players[key])}
						>{players[key]}</li>
					);
				})
			}
			{children}
		</ul>
	)
}

BoardHeader.propTypes = {
	players: PropTypes.object,
	activePlayer: PropTypes.string
}

export default BoardHeader;
