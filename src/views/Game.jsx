import React from 'react';
import PropTypes from 'prop-types';

/* components */
import MoveList from "../components/MoveList";
import Board from "../components/Board";

function rand (min , max) {
	const diff = max - min;
	return Math.floor(Math.random() * (diff + 1)) + min;
}

class Game extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			activePlayer: {
				name: rand(1, 2) === 1 ? props.players.player_1 : props.players.player_2, /* set random first player */
				label: 'X'
			},
			history: []
		};
	}

	changeActivePlayer = () => {
		this.setState((state, props) => ({
			activePlayer: {
				name: state.activePlayer.name === props.players.player_1 ? props.players.player_2 : props.players.player_1,
				label: state.activePlayer.label === 'X' ? 'O' : 'X'
			}
		}));
	}

	setHistory = (move, player)=> {
		this.setState(state => ({
			history: [...state.history, {move, player}]
		}));
	}

	afterMoveAction = move => {
		this.setHistory(move, this.state.activePlayer.name);
		this.changeActivePlayer();
	}

	render() {
		return (
			<div className="game">
				<MoveList list={this.state.history} />
				<Board
					onMove={this.afterMoveAction}
					size={3}
					activeLabel={this.state.activePlayer.label} />
			</div>
		)
	}
};

Game.propTypes = {
	players: PropTypes.object
}

export default Game;
