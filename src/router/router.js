import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import routerList from './router-list';

import StartGame from '../containers/StartViewContainer';
import Game from '../containers/GameViewContainer';
import Result from '../containers/ResultViewContainers';

export default (
	<Router>
		<Route
			exact path={routerList.start}
			component={StartGame} />
		<Route
			exact path={routerList.game}
			component={Game} />
		<Route
			exact path={routerList.result}
			component={Result} />
	</Router>
);
