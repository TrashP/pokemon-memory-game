import React from 'react';
import titleImg from '../images/title.png';

const Header = () => {
	return (
		<div id="header">
			<div id="title">
				<img src={titleImg} alt="PoKeMoN MeMoRy" />
				<div id="rules">
					Click on the Pokemons but don't click on the same image
					twice!
				</div>
			</div>
			<div id="circle">
				<div id="incircle"></div>
			</div>
		</div>
	);
};

export default Header;
