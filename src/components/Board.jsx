import React from 'react';
import PropTypes from 'prop-types';

/* components */
import BoardCell from "./BoardCell";

function createBoardMap (size) {
	const length = size * size;
	return Array(length).fill(null);
}

class Board extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			board: createBoardMap(props.size)
		}
	}

	setMoveData = idx => {
		const copyBoard = [...this.state.board];
		copyBoard[idx] = this.props.activeLabel;

		this.setState({
			board: [...copyBoard]
		});
	}

	move = cellIdx => {
		if (!!this.state.board[cellIdx]) return;

		this.setMoveData(cellIdx);
		this.props.onMove(cellIdx);
	}

	render() {
		return (
			<div className="board">
				{
					this.state.board.map((value, idx) => <BoardCell
						key={idx}
						onClick={() => this.move(idx)}
						value={value} />)
				}
			</div>
		)
	}
};

Board.propTypes = {
	size: PropTypes.number,
	activeLabel: PropTypes.string,
	onMove: PropTypes.func
};

export default Board;
