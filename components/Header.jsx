import React from 'react';

export default function Header({ title }) {
	return (
		<header className='d-grid'>
			<h1
				className='text-uppercase fw-bold display-6 text-center mt-1 mb-3'
				style={{ color: '#F25430' }}>
				{title}
			</h1>
		</header>
	);
}
