import React from 'react';
// import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import StartGame from './views/StartGame';
import Game from './views/Game';
import ResultGame from './views/ResultGame';

const viewsList = {
	start: 1,
	game: 2,
	result: 3
};

class App extends React.Component {
	constructor () {
		super()
		this.state = {
			players: {
				player_1: 'Player 1',
				player_2: 'Player 2'
			},
			winner: null,
			activeView: viewsList.start
		};
		debugger
		this.setActiveView = this.setActiveView.bind(this);
		this.setPlayerName = this.setPlayerName.bind(this);
		this.setWinner = this.setWinner.bind(this);
	}

	setActiveView (view) {
		return () => this.setState({activeView: view});
	}

	setPlayerName (key, name) {
		this.setState({
			players: {
				...this.state.players,
				[key]: name
			}
		});
	}

	setWinner (name) {
		this.setState({
			winner: name
		});
	}

	render () {
		let view;

		if (this.state.activeView === viewsList.start) view = <StartGame startGame={this.setActiveView(viewsList.game)} players={this.state.players} handlerChangeName={this.setPlayerName} />
		if (this.state.activeView === viewsList.game) view = <Game players={this.state.players} />
		if (this.state.activeView === viewsList.result) view = <ResultGame />

		return (
			<div className='App'>
				{view}
				{/* <BrowserRouter>
					<Route exact path="/" component={StartGame} />
					<Route exact path="/processing" component={Game} />
					<Route exact path="/result" component={ResultGame} />
				</BrowserRouter> */}
			</div>
		)
	}
}

export default App;
