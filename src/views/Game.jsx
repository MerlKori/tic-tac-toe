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

		this.setActivePlayer = this.setActivePlayer.bind(this);
		this.setHistory = this.setHistory.bind(this);
	}

	setActivePlayer () {
		this.setState({
			activePlayer: {
				name: this.state.activePlayer.name === this.props.players.player_1 ? this.props.players.player_2 : this.props.players.player_1,
				label: this.state.activePlayer.label === 'X' ? 'O' : 'X'
			}
		});
	}

	setHistory (move) {
		this.setState({
			history: [...this.state.history, move]
		});
	}

	render() {
		return (
			<div className="game">
				<MoveList list={this.state.history} />
				<Board />
			</div>
		)
	}
};

Game.propTypes = {
	players: PropTypes.object
}

export default Game;
