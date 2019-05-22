import React from 'react';
import PropTypes from 'prop-types';

/* routing */
import {Link} from "react-router-dom";
import routerList from '../router/router-list';

function Result ({winner}) {
	const title = (!!winner && winner.status === 'winner') ? `Congratulations to the player ${winner.name} with a victory!` : 'Hm, no winners, no losers - it is a draw!';

	return (
		<div className="container border game-result">
			<h3>{title}</h3>

			<Link
				to={routerList.game}
				className="btn btn--green-5 mx-2 my-3">play more</Link>
		</div>
	);
}

Result.propTypes = {
	winner: PropTypes.object
}

export default Result;
