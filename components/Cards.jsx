import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Swal from 'sweetalert2';
import axios from 'axios';

const CardList = ({ name, setName, box, onClick }) => {
	const [typePokemon, setTypePokemon] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		await axios
			.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
			.then((response) => {
				setTypePokemon(response.data.types);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div
			className='card-body mx-3 border my-2 list-card'
			style={{ borderRadius: 1 + 'em', backgroundColor: '#F2E750' }}>
			<div className='row pe-auto'>
				<div className='col-9'>
					<h5 className='card-title display-6 fw-bold text-capitalize'>
						{name}
					</h5>
					<hr />
					<span className='card-text py-1 fw-bold d-flex justify-content-between'>
						<p>{setName}</p>
						<h6 className='fw-bold text-capitalize'>
							{typePokemon
								.map((item) => item.type.name)
								.join(`, `)}
						</h6>
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
							<h5
								className='display-5 fw-bold m-0'
								onClick={onClick}>
								{box}
							</h5>
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

function Gacha(rate) {
	const random = Math.floor(Math.random() * 100);
	if (random <= rate) {
		Swal.fire({
			title: 'Congratulations!',
			text: 'You got a pokemon!',
			icon: 'success',
			confirmButtonText: 'Cool',
		}).then(() => {
			Swal.fire({
				title: 'Give it a name',
				input: 'text',
				// }).finally(()=>{
				// send name to LocalStorage
				// add to My Pokemon with name
			});
		});
		// fetch('/api/pokemon', {})
		// then provide a name
	} else {
		Swal.fire({
			title: 'Oops...',
			text: 'You missed!',
			icon: 'error',
			confirmButtonText: 'Cool',
		});
	}
}

const Pokeball = () => {
	return (
		<div className='text-center my-5'>
			<a href='#'>
				<Image
					src='/pokeball.svg'
					alt='Pokeball'
					width={80}
					height={80}
					onClick={() => {
						Gacha(50);
					}}
				/>
				<p
					className='rounded-pill border mx-auto w-50 my-4 text-white fw-bold'
					onClick={() => {
						Gacha(50);
					}}
					style={{ backgroundColor: '#F25430' }}>
					Catch <br /> Pokemon
				</p>
			</a>
		</div>
	);
};

export { CardList, CardBox, CardMoves, Pokeball };
