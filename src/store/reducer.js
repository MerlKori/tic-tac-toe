import {combineReducers} from 'redux';
import {
	SET_PLAYER_NAME,
	SET_WINNER,
	SET_LEVEL
} from "./actions";
import levels from '../game-setting';

const defaultLevel = Object.keys(levels)[0];

function players(state = {player_1: 'Player 1', player_2: 'Player 2'}, action) {
	switch (action.type) {
		case SET_PLAYER_NAME:
			return {...state, [action.payload.playerKey]: action.payload.playerName};
		default:
			return state;
	};
};

function winner(state = null, action) {
	switch (action.type) {
		case SET_WINNER:
			return action.winner;
		default:
			return state;
	};
};

function activeLevel(state = defaultLevel, action) {
	switch (action.type) {
		case SET_LEVEL:
			return action.level
		default:
			return state;
	};
};

export default combineReducers({
	players,
	winner,
	activeLevel
});
