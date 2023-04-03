import React from 'react';

const Pokemon = (props) => {
	const { name, src, gameLogic } = props;

	return (
		<div id={name} className="pokemon" onClick={() => gameLogic(name)}>
			<img className="pokemonImage" src={src} alt="pokemon" />
			<div className="pokemonName">{name}</div>
		</div>
	);
};

export default Pokemon;
