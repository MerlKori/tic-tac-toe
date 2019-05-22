import React from 'react';
import PropTypes from 'prop-types';

function MoveList (props) {
	return (
		<ul className="game__history border ml-2">
			{props.list.map((item, idx) => {
				return (
					<li
						key={idx}
						className="container--flex">
						<span>{item.player}</span>
						<span className="ml-auto">{`cell ${item.move + 1}`}</span>
					</li>
				);
			})}
		</ul>
	)
}

MoveList.propTypes = {
	history: PropTypes.array
}

export default MoveList;
