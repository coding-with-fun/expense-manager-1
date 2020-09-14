import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Body from './components/Body';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Body} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
