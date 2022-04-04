import React from 'react';
import Image from 'next/image';
import MyLink from './Link';

export default function Navbar() {
	return (
		<>
			<nav
				className='navbar navbar-expand-lg container-fluid px-5 justify-content-sm-around justify-content-lg-between'
				style={{
					backgroundColor: '#F25430',
					// paddingLeft: 5 + 'em',
					// paddingRight: 5 + 'em',
				}}>
				<MyLink href='/'>
					<Image
						src='/Pokemon.svg'
						alt='pokemon'
						width={120}
						height={70}
					/>
				</MyLink>
				<MyLink href='/MyPokemon'>
					<Image src='/home.svg' alt='home' width={50} height={50} />
				</MyLink>
				{/* <Dropdown /> */}
			</nav>
		</>
	);
}
