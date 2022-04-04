import React from 'react';
import Dropdown from './Dropdown';
import Image from 'next/image';
import MyLink from './Link';

export default function Navbar() {
	return (
		<>
			<nav
				className='navbar navbar-expand-lg container-fluid px-4 justify-content-between'
				style={{ backgroundColor: '#F25430' }}>
				<MyLink href='/'>
					<Image
						src='/Pokemon.svg'
						alt='pokemon'
						width={120}
						height={70}
					/>
				</MyLink>
				<Dropdown />
			</nav>
		</>
	);
}
