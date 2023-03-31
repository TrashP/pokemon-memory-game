import React, { useState, useEffect } from 'react';

const Pokemon = (props) => {
	const { name, src, incrementScore, resetScore, score, best, setBest } =
		props;
	const [clicked, setClicked] = useState(false);

	useEffect(() => {
		const clickedStatus = () => {
			if (score > best) setBest(score);
			if (score === 0) {
				setClicked(false);
			}
		};

		document.addEventListener('click', clickedStatus);

		return () => {
			document.removeEventListener('click', clickedStatus);
		};
	});

	return (
		<div
			id={name}
			className="pokemon"
			onClick={() => {
				if (clicked === true) {
					resetScore();
				} else {
					incrementScore();
					setClicked(true);
				}
			}}
		>
			<img className="pokemonImage" src={src} alt="pokemon" />
			<div className="pokemonName">{name}</div>
		</div>
	);
};

export default Pokemon;
