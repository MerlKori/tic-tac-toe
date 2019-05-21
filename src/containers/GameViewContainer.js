import {connect} from 'react-redux';
import Game from '../views/game/Game';
import {setWinner} from '../store/actions';
import levels from '../game-setting';

function mapStateToProps (state) {
	return {
		players: state.players,
		setting: levels[state.activeLevel]
	};
};

function mapDispatchToProps(dispatch) {
	return {
		onWinner: winner => dispatch(setWinner(winner))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
