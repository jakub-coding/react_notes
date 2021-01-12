import React from 'react';
import {NavLink} from 'react-router-dom';

//Interface Props

const TheNavigation: React.FC = () => {
	//State

	//Methods

	//Template
	return (
		<nav className="py-4 flex justify-center items-center">
			<NavLink className="nav-link" exact to="/">HomePage</NavLink>
			<NavLink className="nav-link" to="/About">About</NavLink>
			<NavLink className="nav-link" to="/Contact">Contact</NavLink>
		</nav>
	);
};

export default TheNavigation;