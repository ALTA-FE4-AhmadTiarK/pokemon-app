import React from 'react';
import Dropdown from './Dropdown';

export default function Navbar({ title }) {
	return (
		<>
			<nav
				className='navbar navbar-expand-lg container-fluid px-4 justify-content-between'
				style={{ backgroundColor: '#F25430' }}>
				<h1 className='navbar-brand text-white fw-bold'>{title}</h1>
				<Dropdown />
			</nav>
		</>
	);
}
