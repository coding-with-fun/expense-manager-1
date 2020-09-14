import React from 'react';
import Balance from './Balance';
import NewTransaction from './NewTransaction';
import History from './History';

function Body() {
	return (
		<main className='container my-5 py-5' role='main'>
			<div className='app__header'>
				<h1>Expense Tracker</h1>
			</div>
			<Balance />
			<NewTransaction />
			<History />
		</main>
	);
}

export default Body;
