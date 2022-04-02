import React from 'react';

export default function Navbar({ title }) {
	return (
		<div>
			<nav
				className='navbar navbar-expand-lg container-fluid px-4 justify-content-center'
				style={{ backgroundColor: '#F25430' }}>
				<h1 className='navbar-brand text-white fw-bold'>{title}</h1>
			</nav>
		</div>
	);
}
