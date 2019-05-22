import React from 'react';
import PropTypes from 'prop-types';

/* components */
import BoardCell from "./BoardCell";

function getClasses (size) {
	return size === 6 ? 'board board--lg' : 'board board--sm';
}

function Board ({board, onMove, boardSize}) {

	return (
		<div className={getClasses(boardSize)}>
			{
				board.map((value, idx) => {
					return (
						<BoardCell
							key={idx}
							onClick={() => onMove(idx)}
							value={value} />
					);
				})
			}
		</div>
	)
}

Board.propTypes = {
	board: PropTypes.array,
	onMove: PropTypes.func,
	boardSize: PropTypes.number
};

export default Board;
