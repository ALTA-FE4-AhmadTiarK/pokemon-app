import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import {
	CardBox,
	CardMoves,
	CardStats,
	Pokeball,
} from '../../components/Cards';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
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

const PokeDetail = ({ pokemon, types, stats, abilities, moves }) => {
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

			<Pokeball />

			<Footer />
		</>
	);
};

export default PokeDetail;
