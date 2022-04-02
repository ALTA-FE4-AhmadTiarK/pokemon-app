import React from 'react';

const CardList = ({ box }) => {
	return (
		<div
			className='card-body mx-3 border my-2'
			style={{ borderRadius: 1 + 'em', backgroundColor: '#F2E750' }}>
			<div className='row'>
				<div className='col-9'>
					<h5 className='card-title display-6 fw-bold'>Pikachu</h5>
					<hr />
					<p className='card-text text-end py-1 fw-bold'>Electric</p>
				</div>
				<div className='col-3 my-auto'>
					<a href='#'>
						<div
							className='p-3 text-center'
							style={{
								borderRadius: 1 + 'em',
								backgroundColor: '#F29E38',
							}}>
							<h5 className='display-5 fw-bold m-0'>{box}</h5>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
};

const CardBox = () => {
	return <div></div>;
};

export { CardList, CardBox };
