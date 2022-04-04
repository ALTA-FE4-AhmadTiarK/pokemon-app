import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';

const CardList = ({ pokeName, setName, box, onClick }) => {
	const [typePokemon, setTypePokemon] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		await axios
			.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
			.then((response) => {
				setTypePokemon(response.data.types);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<>
			<div
				className='card-body mx-3 border my-2 list-card'
				style={{ borderRadius: 1 + 'em', backgroundColor: '#F2E750' }}>
				<div className='row pe-auto'>
					<div className='col-9'>
						<h5 className='card-title display-6 fw-bold text-capitalize'>
							{pokeName}
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
		</>
	);
};

const CardBox = ({ picture, alt }) => {
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
				<Image src={picture} alt={alt} width={250} height={250} />
			</div>
		</div>
	);
};

const CardMoves = ({ title, moves }) => {
	return (
		<div
			className='card-body mx-4 mx-lg-5 border my-3 text-center border-0'
			style={{
				borderRadius: 1 + 'em',
				backgroundColor: '#DFDFDF',
			}}>
			<h3 className='fw-bold text-decoration-underline text-uppercase'>
				{title}
			</h3>
			<h6 className='px-2 text-capitalize fst-italic'>{moves}</h6>
		</div>
	);
};

const CardStats = ({ stat }) => {
	return (
		<div
			className='card-body mx-4 mx-lg-5 mx-md-5 border my-3 text-center border-0 '
			style={{
				borderRadius: 1 + 'em',
				backgroundColor: '#DFDFDF',
				height: 19 + 'em',
			}}>
			<h3 className='fw-bold text-uppercase text-decoration-underline'>
				Status
			</h3>

			<p className='px-2 text-uppercase'>{stat}</p>
		</div>
	);
};

export { CardList, CardBox, CardMoves, CardStats };
