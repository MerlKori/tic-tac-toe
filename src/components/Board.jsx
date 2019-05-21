import React from 'react';
import PropTypes from 'prop-types';

/* components */
import BoardCell from "./BoardCell";


function Board ({board, onMove}) {

	return (
		<div className="board">
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
};

export default Board;
