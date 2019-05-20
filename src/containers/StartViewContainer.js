import {connect} from 'react-redux';
import StartGame from '../views/StartGame';
import {setPlayerName, setLevel} from '../store/actions';
import levels from '../game-setting';

function mapStateToProps (state) {
	return {
		players: state.players,
		activeLevel: state.activeLevel,
		levels: Object.keys(levels)
	};
};

function mapDispatchToProps(dispatch) {
	return {
		onChangeName: (playerKey, playerName) => dispatch(setPlayerName({playerKey, playerName})),
		onChangeSetting: e => dispatch(setLevel(e.target.value)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(StartGame);
