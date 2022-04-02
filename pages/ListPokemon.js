import Head from 'next/head';
import Image from 'next/image';
// import Header from '../components/Header';
import styles from '../styles/Home.module.css';

// Chosen Components:
import { CardList } from '../components/Cards';
import Navbar from '../components/Navbar';
import Pagination from '../components/Pagination';
import PageNav from '../components/PageNav';

export default function ListPokemon() {
	return (
		<div className=''>
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
				{/* <Header title='List of the Pokemon' /> */}

				<CardList box='0' />
				<CardList box='2' />
				<CardList box='99' />

				<Pagination />
			</main>

			<PageNav />
			<footer className={styles.footer}>
				<h6 className='fw-bold'>Created by Ahmad Tiar K.</h6>
			</footer>
		</div>
	);
}