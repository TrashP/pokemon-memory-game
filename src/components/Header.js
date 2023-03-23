import React from 'react';
import titleImg from '../images/title.png';

const Header = () => {
	return (
		<div id="header">
			<div id="title">
				<img src={titleImg} alt="PoKeMoN MeMoRy"></img>
			</div>
			<div id="circle">
				<div id="incircle"></div>
			</div>
		</div>
	);
};

export default Header;
