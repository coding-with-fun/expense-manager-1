import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/github-logo.svg';

function Navbar() {
	return (
		<nav
			class='navbar navbar-expand-lg fixed-top navbar-dark'
			style={{ backgroundColor: '#24292e' }}
		>
			<div className='container'>
				<Link class='navbar-brand m-lg-auto' to='/'>
					<img src={logo} alt='logo' />
					<p className='pl-3 m-auto'>Expense Manager</p>
				</Link>

				<button
					class='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarToggler'
					aria-controls='navbarToggler'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span class='navbar-toggler-icon'></span>
				</button>

				<div class='collapse navbar-collapse' id='navbarToggler'>
					<ul class='navbar-nav ml-auto mt-2 mt-lg-0 float-right'>
						<div class='btn-group' role='group' aria-label='Nav Button'>
							<Link to='/' class='nav-item mr-3'>
								<button type='button' class='btn btn-outline-light'>
									Home
								</button>
							</Link>
							<Link to='/login' class='nav-item'>
								<button type='button' class='btn btn-outline-light'>
									Sign In
								</button>
							</Link>
						</div>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
