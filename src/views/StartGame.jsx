import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import routerList from '../router/router-list';
import Input from '../components/Input';
import RadioGroup from '../components/RadioGroup';

function StartView ({players, onChangeName, levels, activeLevel, onChangeSetting}) {
	return (
		<div className="container start-view">
			{
				Object.keys(players).map((key, idx) => {
					return (
						<Input
							key={idx}
							playerName={players[key]}
							playerKey={key}
							onChangeName={onChangeName} />
					)
				})
			}

			<RadioGroup
				label="Level of difficulty"
				defaultChecked={activeLevel}
				list={levels}
				onChange={onChangeSetting} />

			<Link
				to={routerList.game}
				className="btn btn--blue-2 mx-3 mt-3">start</Link>
		</div>
	)
}

StartView.propTypes = {
	players: PropTypes.object,
	onChangeName: PropTypes.func,
	onChangeSetting: PropTypes.func,
	levels: PropTypes.array,
	activeLevel: PropTypes.string
};

export default StartView;