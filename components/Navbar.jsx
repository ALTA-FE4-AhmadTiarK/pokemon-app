import React from 'react';
import Dropdown from './Dropdown';
import Image from 'next/image';

export default function Navbar() {
	return (
		<>
			<nav
				className='navbar navbar-expand-lg container-fluid px-4 justify-content-between'
				style={{ backgroundColor: '#F25430' }}>
				{/* <h1 className='navbar-brand text-white fw-bold'>{title}</h1> */}
				<Image
					src='/Pokemon.svg'
					alt='pokemon'
					width={120}
					height={70}
				/>
				<Dropdown />
			</nav>
		</>
	);
}
