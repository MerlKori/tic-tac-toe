import React from 'react';
import PropTypes from 'prop-types';

function Input ({playerName, playerKey, onChangeName}) {
	return (
		<input
			onChange={e => onChangeName(playerKey, e.target.value)}
			value={playerName}
			placeholder="Player name"
			type="text"/>
	)
}

Input.propTypes = {
	playerName: PropTypes.string,
	playerKey: PropTypes.string,
	onChangeName: PropTypes.func
}

export default Input;
