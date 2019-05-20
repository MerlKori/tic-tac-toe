import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";

import StartGame from '../containers/StartViewContainer';
// import Game from './views/Game';
// import ResultGame from './views/ResultGame';

export default (
	<Router>
		<Route
			exact path="/"
			component={StartGame} />
	</Router>
);
