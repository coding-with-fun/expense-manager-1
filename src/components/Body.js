import React from 'react';
import Balance from './Balance';
import NewTransaction from './NewTransaction';
import History from './History';

function Body() {
	return (
		<div className='body container'>
			<div className='app__header'>
				<h1>Expense Tracker</h1>
			</div>
			<Balance />
			<NewTransaction />
			<History />
		</div>
	);
}

export default Body;
