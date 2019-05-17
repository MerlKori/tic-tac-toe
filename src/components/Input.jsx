import React from 'react';
import PropTypes from 'prop-types';

function Input ({playerName, playerKey, onChangeHandler}) {
	return (
		<input
			onChange={e => onChangeHandler(playerKey, e.target.value)}
			value={playerName}
			placeholder="Player name"
			type="text"/>
	)
}

Input.propTypes = {
	playerName: PropTypes.string,
	playerKey: PropTypes.string,
	onChangeHandler: PropTypes.func
}

export default Input;
