import React from 'react';
import Navbar from './components/Navbar';
import Balance from './components/Balance';
import NewTransaction from './components/NewTransaction';
import History from './components/History';
import Footer from './components/Footer';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<div className='container'>
				<div className='app__header'>
					<h1>Expense Tracker</h1>
				</div>
				<Balance />
				<NewTransaction />
				<History />
			</div>
			<Footer />
		</div>
	);
}

export default App;
