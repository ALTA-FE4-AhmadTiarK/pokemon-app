import React from 'react';

function Pagination() {
	return (
		<nav className='mt-5'>
			<ul className='pagination justify-content-center'>
				<li className='page-item disabled'>
					<a href='#' className='page-link'>
						Previous
					</a>
				</li>
				<li className='page-item'>
					<a href='#' className='page-link'>
						1
					</a>
				</li>
				<li className='page-item'>
					<a href='#' className='page-link'>
						2
					</a>
				</li>
				<li className='page-item'>
					<a href='#' className='page-link'>
						3
					</a>
				</li>
				<li className='page-item'>
					<a href='#' className='page-link'>
						Next
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Pagination;
