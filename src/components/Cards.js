import React, { useState } from 'react';
import Pokemon from './Pokemon';
import bulbasaur from '../images/bulbasaur.png';
import ivysaur from '../images/ivysaur.png';
import venasaur from '../images/venasaur.png';
import squirtle from '../images/squirtle.png';
import wartortle from '../images/wartortle.png';
import blastoise from '../images/blastoise.png';
import charmander from '../images/charmander.png';
import charmeleon from '../images/charmeleon.png';
import charizard from '../images/charizard.png';
import dratini from '../images/dratini.png';
import dragonair from '../images/dragonair.png';
import dragonite from '../images/dragonite.png';

const Cards = () => {
	const [score, setScore] = useState(0);
	const [best, setBest] = useState(0);

	const incrementScore = () => {
		setScore(score + 1);
	};

	const resetScore = () => {
		setScore(0);
	};

	return (
		<div id="cards">
			<div id="scores">
				<div id="currentScore">Current score: {score}</div>
				<div id="bestScore">Best score: {best}</div>
			</div>
			<div id="gameBoard">
				<Pokemon
					name="Bulbasaur"
					src={bulbasaur}
					incrementScore={incrementScore}
					resetScore={resetScore}
					score={score}
					best={best}
					setBest={setBest}
				/>
				<Pokemon
					name="Ivysaur"
					src={ivysaur}
					incrementScore={incrementScore}
					resetScore={resetScore}
					score={score}
					best={best}
					setBest={setBest}
				/>
				<Pokemon
					name="Venasaur"
					src={venasaur}
					incrementScore={incrementScore}
					resetScore={resetScore}
					score={score}
					best={best}
					setBest={setBest}
				/>
				<Pokemon
					name="Squirtle"
					src={squirtle}
					incrementScore={incrementScore}
					resetScore={resetScore}
					score={score}
					best={best}
					setBest={setBest}
				/>
				<Pokemon
					name="Wartortle"
					src={wartortle}
					incrementScore={incrementScore}
					resetScore={resetScore}
					score={score}
					best={best}
					setBest={setBest}
				/>
				<Pokemon
					name="Blastoise"
					src={blastoise}
					incrementScore={incrementScore}
					resetScore={resetScore}
					score={score}
					best={best}
					setBest={setBest}
				/>
				<Pokemon
					name="Charmander"
					src={charmander}
					incrementScore={incrementScore}
					resetScore={resetScore}
					score={score}
					best={best}
					setBest={setBest}
				/>
				<Pokemon
					name="Charmeleon"
					src={charmeleon}
					incrementScore={incrementScore}
					resetScore={resetScore}
					score={score}
					best={best}
					setBest={setBest}
				/>
				<Pokemon
					name="Charizard"
					src={charizard}
					incrementScore={incrementScore}
					resetScore={resetScore}
					score={score}
					best={best}
					setBest={setBest}
				/>
				<Pokemon
					name="Dratini"
					src={dratini}
					incrementScore={incrementScore}
					resetScore={resetScore}
					score={score}
					best={best}
					setBest={setBest}
				/>
				<Pokemon
					name="Dragonair"
					src={dragonair}
					incrementScore={incrementScore}
					resetScore={resetScore}
					score={score}
					best={best}
					setBest={setBest}
				/>
				<Pokemon
					name="Dragonite"
					src={dragonite}
					incrementScore={incrementScore}
					resetScore={resetScore}
					score={score}
					best={best}
					setBest={setBest}
				/>
			</div>
		</div>
	);
};

export default Cards;
