import React from 'react';
// import PropTypes from 'prop-types';

/* components */
import BoardCell from "./BoardCell";

function createArr (length) {
	return Array.from(Array(length), (x, idx) => idx + 1);
}

// function methodName (arguments) {
// 	// body
// }

class Board extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			board: []
		}
	}

	createBoard = (props) => {
		this.setState({
			board: createArr(props.size)
		});
	}

	render() {
		return (
			<div className="board">
				{}
			</div>
		)
	}
};

export default Board;
