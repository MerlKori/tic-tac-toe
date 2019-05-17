import React from 'react';
import PropTypes from 'prop-types';
import Input from '../components/Input';

function StartView ({players, handlerChangeName, startGame}) {
	return (
		<div className="start-page">
			{
				Object.keys(players).map((key, idx) => {
					return (
						<Input
							key={idx}
							playerName={players[key]}
							playerKey={key}
							onChangeHandler={handlerChangeName} />
					)
				})
			}
			<button
				onClick={startGame}
				className="class">start game</button>
		</div>
	)
}

StartView.propTypes = {
	players: PropTypes.object,
	handlerChangeName: PropTypes.func,
	startGame: PropTypes.func
};

export default StartView;