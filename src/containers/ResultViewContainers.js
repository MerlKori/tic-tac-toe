import {connect} from 'react-redux';
import ResultGame from '../views/ResultGame';

function mapStateToProps (state) {
	return {
		winner: state.winner
	};
};

export default connect(mapStateToProps)(ResultGame);