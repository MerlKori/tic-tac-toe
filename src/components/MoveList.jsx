import React from 'react';
import PropTypes from 'prop-types';

function MoveList (props) {
	return (
		<ul className="player__name-fild">
			{
				props.list.map((move, idx) => <li key={idx}>{move}</li>)
			}
		</ul>
	)
}

MoveList.propTypes = {
	history: PropTypes.array
}

export default MoveList;
