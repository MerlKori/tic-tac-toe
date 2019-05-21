import {
	createActivePlayerData,
	createBoardMap
} from "./game-init";

export function changeBoardData (activeLabel, cellIdx) {
	return (state) => {
		const copyBoard = [...state.board];
		copyBoard[cellIdx] = activeLabel;
		return {board: [...copyBoard]};
	}
}

export function changeActivePlayerData (state, props) {
	return {
		activePlayer: {
			name: state.activePlayer.name === props.players.player_1 ? props.players.player_2 : props.players.player_1,
			label: state.activePlayer.label === 'X' ? 'O' : 'X'
		}
	};
}

export function changeHistory (move, player) {
	return (state) => ({
		history: [...state.history, {move, player}]
	});
}

export function resetState (boardSize, players, labels) {
	return () => ({
		board: createBoardMap(boardSize),
		activePlayer: createActivePlayerData(players.player_1, players.player_2, labels),
		history: []
	});
}
