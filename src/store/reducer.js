import {combineReducers} from 'redux';
import {
	SET_PLAYER_NAME,
	SET_WINNER
} from "./actions";

function players(state = {player_1: 'Player 1', player_2: 'Player 2'}, action) {
	switch (action.type) {
		case SET_PLAYER_NAME:
			return {...state, [action.payload.key]: action.payload.name};
		default:
			return state;
	};
};

function winner(state = null, action) {
	switch (action.type) {
		case SET_WINNER:
			return action.winner
		default:
			return state;
	};
};

export default combineReducers({
	players, winner
});