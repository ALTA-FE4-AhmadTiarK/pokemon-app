import React from 'react';
import Link from 'next/link';

export default function PageNav() {
	return (
		<div className='container'>
			<div className='row row-cols-2 text-center'>
				<div className='col'>
					<Link href='/'>
						<button className='btn btn-light'>Go Home</button>
					</Link>
				</div>
				<div className='col'>
					<Link href='/ListPokemon'>
						<button className='btn btn-light'>
							Go to List Pokemon
						</button>
					</Link>
				</div>
				<div className='col'>
					<Link href='/Details'>
						<button className='btn btn-light'>Go to Details</button>
					</Link>
				</div>
				<div className='col'>
					<Link href='/MyPokemon'>
						<button className='btn btn-light'>
							Go to My Pokemon
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
