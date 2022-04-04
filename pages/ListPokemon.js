import Head from 'next/head';
import React, { useState } from 'react';
// Chosen Components:
import { CardList } from '../components/Cards';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export async function getServerSideProps() {
	const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
	const data = await response.json();
	data.results.forEach((item, index) => {
		item.id = index + 1;
	});
	return {
		props: { pokemon: data.results, index: 0 },
	};
}

export default function ListPokemon({ pokemon, index }) {
	const [tempPokemon, setTempPokemon] = useState(pokemon);
	const [tempIndex, setTempIndex] = useState(index);

	const nextPage = async () => {
		if (tempIndex == 0) {
			const res = await fetch(
				'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20'
			);
			const data = await res.json();
			data.results.forEach((item, index) => {
				item.id = tempPokemon[tempPokemon.length - 1].id + (index + 1);
			});
			setTempPokemon(data.results);
			setTempIndex(20);
		} else {
			let nextIndex = tempIndex + 20;
			const res = await fetch(
				`https://pokeapi.co/api/v2/pokemon?offset=${nextIndex}&limit=20`
			);
			const data = await res.json();
			data.results.forEach((item, index) => {
				item.id = tempPokemon[tempPokemon.length - 1].id + (index + 1);
			});
			setTempPokemon(data.results);
			setTempIndex(nextIndex);
		}
	};

	const prevPage = async () => {
		if (tempIndex == 20) {
			const res = await fetch(
				'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'
			);
			const data = await res.json();
			data.results.forEach((item, index) => {
				item.id = index + 1;
			});
			setTempPokemon(data.results);
			setTempIndex(0);
		} else {
			let prevIndex = tempIndex - 20;
			const res = await fetch(
				`https://pokeapi.co/api/v2/pokemon?offset=${prevIndex}&limit=20`
			);
			const data = await res.json();
			data.results.forEach((item, index) => {
				item.id = index + 1;
			});
			setTempPokemon(data.results);
			setTempIndex(prevIndex);
		}
	};

	return (
		<>
			<Head>
				<title>List Pokemon</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar title='List Pokemon' />
			<main className='align-items-center justify-content-center container py-4'>
				<Header title={'List of Pokemon'} />
				{tempPokemon.map((item) => (
					<Link key={item.id} href={`/detail/${item.name}`}>
						<div className='row'>
							<CardList pokeName={item.name} />
						</div>
					</Link>
				))}

				<nav className='mt-5'>
					<ul className='pagination justify-content-center fw-bold'>
						<li className='page-item'>
							<button
								className='page-link text-uppercase'
								onClick={prevPage}>
								Prev
							</button>
						</li>
						<li className='page-item disabled'>
							<a
								href='#'
								className='page-link text-uppercase text-muted'>
								Page
							</a>
						</li>
						<li className='page-item'>
							<button
								type='button'
								className='page-link text-uppercase fw-bold'
								onClick={nextPage}>
								Next
							</button>
						</li>
					</ul>
				</nav>
			</main>

			<Footer />
		</>
	);
}
