// Import
import React from 'react';

// Import Router
import { Switch, Route } from 'react-router-dom';

//Import Components
import TheNavigation from './components/TheNavigation';
import TheFooter from './components/TheFooter';

//Import Views
import HomePage from './views/HomePage';
import About from './views/About';
import Contact from './views/Contact';

const App: React.FC = () => {

	//Base Template
	return (
		<div className="container mx-auto px-4">
			<header>
				<TheNavigation />
			</header>

			<main>
				<Switch>
					<Route exact path="/" component={HomePage}/>
					<Route path="/About" component={About}/>
					<Route path="/Contact" component={Contact}/>
				</Switch>
			</main>

			<footer>
				<TheFooter />
			</footer>
		</div>
	);
};

export default App;
