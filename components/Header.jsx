import React from 'react';

export default function Header({ title, subtitle }) {
	return (
		<header className='d-grid text-center'>
			<h5 className=''>{subtitle}</h5>
			<h1
				className='text-uppercase fw-bold display-6 mt-1 mb-3'
				style={{ color: '#F25430' }}>
				{title}
			</h1>
		</header>
	);
}
