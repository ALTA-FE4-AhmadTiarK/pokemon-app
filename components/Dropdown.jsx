import { Menu } from '@headlessui/react';
import Image from 'next/image';
import React from 'react';
import MyLink from './Link';

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
								<MyLink href='/ListPokemon'>
									<div className=' h5 p-2 fw-bold'>
										List Pokemon
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
