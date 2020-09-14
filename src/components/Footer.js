import React from 'react';

function Footer() {
	return (
		<nav
			className='navbar navbar-expand fixed-bottom navbar-dark'
			style={{ backgroundColor: '#24292e' }}
		>
			<div className='container d-flex flex-column'>
				<div className='w-100 text-center py-3'>
					Made with{' '}
					<span role='img' aria-label='heart'>
						&#9829;
					</span>{' '}
					and{' '}
					<span role='img' aria-label='coffee'>
						&#9749;
					</span>{' '}
					by{' '}
					<a
						href='https://github.com/harshp2124'
						target='blank'
						className='font-weight-bolder text-decoration-none'
						style={{ color: 'white' }}
					>
						Harsh Patel
					</a>
				</div>
				<div className='w-50 text-center pb-3 d-flex justify-content-around'>
					<button type='button' class='btn btn-outline-light'>
						About
					</button>
					<button type='button' class='btn btn-outline-light'>
						Contact
					</button>
				</div>
			</div>
		</nav>
	);
}

export default Footer;
