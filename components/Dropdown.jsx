import { Menu } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function MyLink(props) {
	let { href, children, ...rest } = props;
	return (
		<Link href={href}>
			<a {...rest}>{children}</a>
		</Link>
	);
}

export default function Dropdown() {
	return (
		<div>
			<Menu>
				<div className='d-flex flex-column align-items-end text-white'>
					<Menu.Button className='border-0 bg-transparent float-end'>
						<Image
							src='/bars.svg'
							alt='Menu'
							width={30}
							height={30}
						/>
					</Menu.Button>
					<Menu.Items className='d-flex flex-column text-end float-end'>
						<Menu.Item>
							{({ active }) => (
								<MyLink href='/'>
									<div className=' h5 p-2 fw-bold'>Home</div>
								</MyLink>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<MyLink href='/ListPokemon'>
									<div className=' h5 p-2 fw-bold'>
										List Pokemon
									</div>
								</MyLink>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<MyLink href='/Details'>
									<div className=' h5 p-2 fw-bold'>
										Pokemon Details
									</div>
								</MyLink>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<MyLink href='/MyPokemon'>
									<div className=' h5 p-2 fw-bold'>
										My Pokemon
									</div>
								</MyLink>
							)}
						</Menu.Item>
					</Menu.Items>
				</div>
			</Menu>
		</div>
	);
}
