export const SET_PLAYER_NAME = 'SET_PLAYER_NAME';
export const SET_WINNER = 'SET_WINNER';

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
