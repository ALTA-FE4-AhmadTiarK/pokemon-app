import Head from 'next/head';
import Image from 'next/image';

// Chosen Components:
import Header from '../components/Header';
import { CardBox, CardMoves, Pokeball } from './Cards';

export default function LayoutDetail({
	documentTitle,
	pokemonName,
	pokemonImage,
	pokemonMoves,
}) {
	return (
		<>
			<Head>
				<title>{documentTitle}</title>
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
			<main>
                
				{/* <Header title={pokemonName} subtitle='Pokemon Details' />

				<CardBox picture={pokemonImage} />

				<CardMoves moves={pokemonMoves} />

				<Pokeball /> */}
			</main>
			<footer className={styles.footer}>
				<a
					href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'>
					Powered by{' '}
					<span className={styles.logo}>
						<Image
							src='/vercel.svg'
							alt='Vercel Logo'
							width={72}
							height={16}
						/>
					</span>
				</a>
			</footer>
		</>
	);
}
