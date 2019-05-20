export const SET_PLAYER_NAME = 'SET_PLAYER_NAME';
export const SET_WINNER = 'SET_WINNER';
export const SET_LEVEL = 'SET_LEVEL';

export function setPlayerName (payload) {
	return {
		type: SET_PLAYER_NAME,
		payload
	};
};

export function setWinner (winner) {
	return {
		type: SET_WINNER,
		winner
	};
};

export function setLevel (level) {
	return {
		type: SET_LEVEL,
		level
	};
};
