import React, { useEffect, useState } from 'react';
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
	const [clickedArray, setClickedArray] = useState([]);

	useEffect(() => {
		if (score > best) setBest(score);
	}, [score, best]);

	const pokemonArray = [
		{ name: 'Bulbasaur', src: bulbasaur },
		{ name: 'Ivysaur', src: ivysaur },
		{ name: 'Venasaur', src: venasaur },
		{ name: 'Squirtle', src: squirtle },
		{ name: 'Watortle', src: wartortle },
		{ name: 'Blastoise', src: blastoise },
		{ name: 'Charmander', src: charmander },
		{ name: 'Charmeleon', src: charmeleon },
		{ name: 'Charizard', src: charizard },
		{ name: 'Dratini', src: dratini },
		{ name: 'Dragonair', src: dragonair },
		{ name: 'Dragonite', src: dragonite },
	];

	const shuffle = (array) => {
		let currentIndex = array.length;
		let randomIndex;

		while (currentIndex !== 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			[array[currentIndex], array[randomIndex]] = [
				array[randomIndex],
				array[currentIndex],
			];
		}
		return array;
	};

	const gameLogic = (clickedName) => {
		if (clickedArray.includes(clickedName)) {
			setClickedArray([]);
			setScore(0);
		} else {
			setClickedArray([...clickedArray, clickedName]);
			setScore(score + 1);
		}
	};

	return (
		<div id="cards">
			<div id="scores">
				<div id="currentScore">Current score: {score}</div>
				<div id="bestScore">Best score: {best}</div>
			</div>
			<div id="gameBoard">
				{shuffle(pokemonArray).map((pokemon, key) => {
					return (
						<Pokemon
							name={pokemon.name}
							src={pokemon.src}
							key={key}
							gameLogic={(clickedName) => {
								gameLogic(clickedName);
							}}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Cards;
