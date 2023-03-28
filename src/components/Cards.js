import React from 'react';
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
	return (
		<div id="cards">
			<div id="scores">
				<div id="currentScore">Current score: </div>
				<div id="bestScore">Best score: </div>
			</div>
			<div id="gameBoard">
				<Pokemon name="Bulbasaur" src={bulbasaur} />
				<Pokemon name="Ivysaur" src={ivysaur} />
				<Pokemon name="Venasaur" src={venasaur} />
				<Pokemon name="Squirtle" src={squirtle} />
				<Pokemon name="Wartortle" src={wartortle} />
				<Pokemon name="Blastoise" src={blastoise} />
				<Pokemon name="Charmander" src={charmander} />
				<Pokemon name="Charmeleon" src={charmeleon} />
				<Pokemon name="Charizard" src={charizard} />
				<Pokemon name="Dratini" src={dratini} />
				<Pokemon name="Dragonair" src={dragonair} />
				<Pokemon name="Dragonite" src={dragonite} />
			</div>
		</div>
	);
};

const Pokemon = (props) => {
	return (
		<div id={props.name} className="pokemon">
			<img className="pokemonImage" src={props.src} alt="pokemon" />
			<div className="pokemonName">{props.name}</div>
		</div>
	);
};

export default Cards;
