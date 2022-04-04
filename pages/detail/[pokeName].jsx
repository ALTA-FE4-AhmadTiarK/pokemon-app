import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Swal from 'sweetalert2';
import { CardBox, CardMoves, CardStats } from '../../components/Cards';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MyLink from '../../components/Link';
import Navbar from '../../components/Navbar';

export async function getServerSideProps(context) {
	const { pokeName } = context.params;
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
	const data = await res.json();
	const moves = data.moves.slice(0, 5);

	return {
		props: {
			pokemon: data,
			types: data.types,
			stats: data.stats,
			abilities: data.abilities,
			moves: moves,
		},
	};
}

const PokeDetail = ({ pokemon, types, stats, moves }) => {
	const pushLocalStorage = () => {
		let getLocal = JSON.parse(localStorage.getItem('ownedPokemon'));
		let ownedPokemon = {
			pokemon: pokemon.name,
			type: types.map((item) => item.type.name).join(', '),
			key: pokemon.id,
		};
		if (getLocal) {
			getLocal.push(ownedPokemon);
			localStorage.setItem('ownedPokemon', JSON.stringify(getLocal));
		} else {
			localStorage.setItem(
				'ownedPokemon',
				JSON.stringify([ownedPokemon])
			);
		}
	};

	function Gacha() {
		const random = Math.floor(Math.random() * 100);
		if (random <= 50) {
			Swal.fire({
				title: 'Congrats!',
				text: 'You got a pokemon!',
				icon: 'success',
				confirmButtonText: 'Hooray!',
			});
			pushLocalStorage();
		} else {
			Swal.fire({
				title: 'Oops...',
				text: 'You missed!',
				icon: 'error',
				confirmButtonText: 'Cool',
			});
		}
	}

	return (
		<>
			<Head>
				<title>Pokemon Details</title>
				<meta
					name='Details Page'
					content='Page with details of a pokemon'
				/>
				<link
					rel='shortcut icon'
					href='favicon.ico'
					type='image/x-icon'
				/>
			</Head>
			<Navbar />
			<main className='align-items-center justify-content-center container py-4'></main>
			<Header title={pokemon.name} />

			<CardBox
				picture={
					pokemon.sprites.other.dream_world.front_default
						? pokemon.sprites.other.dream_world.front_default
						: 'https://via.placeholder.com/500x750?text=No+Image'
				}
				alt={pokemon.name}
			/>

			<div className='mx-3 mx-lg-5'>
				<CardMoves
					title='Type'
					moves={types.map((item) => item.type.name).join(', ')}
				/>
			</div>

			<div className='mx-3 mx-lg-5'>
				<CardStats
					stat={stats.map((item, index) => (
						<div
							key={index}
							className='d-flex justify-content-between container'>
							<p>{item.stat.name}</p>
							<p>{item.base_stat}</p>
						</div>
					))}
				/>
			</div>

			<div className='mx-3 mx-lg-5'>
				<CardMoves
					title='Moves'
					moves={moves.map((item) => item.move.name).join(', ')}
				/>
			</div>

			<div className='text-center my-5'>
				<a href='#'>
					<Image
						src='/pokeball.svg'
						alt='Pokeball'
						width={80}
						height={80}
						onClick={() => {
							Gacha();
						}}
					/>
					<p
						className='rounded-pill border mx-auto w-50 my-4 text-white fw-bold'
						onClick={() => {
							Gacha();
						}}
						style={{ backgroundColor: '#F25430' }}>
						Catch <br /> Pokemon
					</p>
				</a>
			</div>

			<Footer />
		</>
	);
};

export default PokeDetail;
