import React from 'react';
import PropTypes from 'prop-types';

function MoveList (props) {
	return (
		<ul className="game__history">
			{props.list.map((item, idx) => <li key={idx}>{item.move}</li>)}
		</ul>
	)
}

MoveList.propTypes = {
	history: PropTypes.array
}

export default MoveList;
