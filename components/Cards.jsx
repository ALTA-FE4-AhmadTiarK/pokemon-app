import React from 'react';
import Image from 'next/image';

const CardList = ({ name, setName, type, box }) => {
	return (
		<div
			className='card-body mx-3 border my-2'
			style={{ borderRadius: 1 + 'em', backgroundColor: '#F2E750' }}>
			<div className='row'>
				<div className='col-9'>
					<h5 className='card-title display-6 fw-bold'>{name}</h5>
					<hr />
					<span className='card-text py-1 fw-bold d-flex justify-content-between'>
						<p>{setName}</p>
						<p>{type}</p>
					</span>
				</div>
				<div className='col-3 my-auto'>
					<a href='#'>
						<div
							className='p-3 text-center'
							style={{
								borderRadius: 1 + 'em',
								backgroundColor: '#F29E38',
							}}>
							<h5 className='display-5 fw-bold m-0'>{box}</h5>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
};

const CardBox = ({ picture }) => {
	return (
		<div
			className='card-body mx-auto border my-2 position-relative'
			style={{
				borderRadius: 1 + 'em',
				backgroundColor: '#F2E750',
				width: 22 + 'em',
				height: 22 + 'em',
			}}>
			<div className='position-absolute top-50 start-50 translate-middle'>
				<Image src={picture} alt='pikachu' width={200} height={200} />
			</div>
		</div>
	);
};

const CardMoves = ({ moves }) => {
	return (
		<div
			className='card-body mx-4 border my-3 text-center border-0'
			style={{
				borderRadius: 1 + 'em',
				backgroundColor: '#DFDFDF',
				height: 7 + 'em',
			}}>
			<h3 className='fw-bold text-decoration-underline'>Moves</h3>
			<p className='px-2'>{moves}</p>
		</div>
	);
};

const Pokeball = () => {
	return (
		<div className='text-center my-5'>
			<a href='#'>
				<Image
					src='/pokeball.svg'
					alt='Pokeball'
					width={80}
					height={80}
				/>
				<p
					className='rounded-pill border mx-auto w-50 my-4 text-white fw-bold'
					style={{ backgroundColor: '#F25430' }}>
					Catch <br /> Pokemon
				</p>
			</a>
		</div>
	);
};

export { CardList, CardBox, CardMoves, Pokeball };
