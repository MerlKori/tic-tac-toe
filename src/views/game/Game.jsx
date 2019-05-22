import React from 'react';
import PropTypes from 'prop-types';

/* routing */
import {Link} from "react-router-dom";
import routerList from '../../router/router-list';

/* components */
import MoveList from "../../components/MoveList";
import Board from "../../components/Board";
import BoardHeader from "../../components/BoardHeader.jsx";

import {
	createActivePlayerData,
	createBoardMap
} from "./game-init";

import {
	changeBoardData,
	changeActivePlayerData,
	changeHistory,
	resetState
} from "./game-state-changes";

const labels = {
	x: 'X',
	o: 'O'
};

function checkWinner (board, winMaps, player) {
	const creteCheckingLine = (lineMap, board) => lineMap.reduce((line, cell) => line = [...line, board[cell]], []);

	for (let i = 0; i < winMaps.length; i++) {
		const res = creteCheckingLine(winMaps[i], board).every(el => el === player.label);
		if (res) return {...player, status: 'winner'};
	}

	if (!board.includes(null)) {
		return {status: 'draw'};
	}
	return null;
}

class Game extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			board: createBoardMap(props.setting.size),
			activePlayer: createActivePlayerData(props.players.player_1, props.players.player_2, labels), /* set random first player */
			history: []
		};
	}

	setBoardData = idx => this.setState(changeBoardData(this.state.activePlayer.label, idx))

	changeActivePlayer = () => this.setState(changeActivePlayerData);

	setHistory = (move, player) => this.setState(changeHistory(move, player));

	handlerMove = cellIdx => {
		if (!!this.state.board[cellIdx]) return;

		this.setBoardData(cellIdx);
		this.changeActivePlayer();
		this.setHistory(cellIdx, this.state.activePlayer.name);
	}

	restart = () => this.setState(resetState(this.props.setting.size, this.props.players, labels));

	componentDidUpdate(prevProps, prevState) {
		const winner = checkWinner (this.state.board, this.props.setting.winnerMaps, prevState.activePlayer);

		if (!!winner) {
			this.props.onWinner(winner);
			this.props.history.push(routerList.result);
		}
	}

	render() {
		return (
			<div className="container game border">
				<BoardHeader
					players={this.props.players}
					activePlayer={this.state.activePlayer.name} >
					<Link
						to={routerList.start}
						className="btn btn--green-5 mx-2">to beginning</Link>
					<button
						onClick={this.restart}
						className="btn btn--red-2 mx-2">restart</button>
				</BoardHeader>

				<div className="container--flex game__main">
					<Board
						board={this.state.board}
						onMove={this.handlerMove}
						boardSize={this.props.setting.size} />

					<MoveList list={this.state.history} />
				</div>
			</div>
		)
	}
};

Game.propTypes = {
	players: PropTypes.object,
	setting: PropTypes.object,
	onWinner: PropTypes.func
}

export default Game;
