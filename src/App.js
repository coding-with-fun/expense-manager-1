import React from 'react';
import Balance from './components/Balance';
import History from './components/History';

function App() {
	return (
		<div className='container'>
			<div className='container__title'>Expense Manager</div>

			<Balance />
			<History />
		</div>
	);
}

export default App;
