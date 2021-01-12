// Import
import React from 'react';
import ReactDOM from 'react-dom';

// Import Assets
import './index.css';

// Import Router
import {BrowserRouter} from 'react-router-dom';
// Import Component
import App from './App';

ReactDOM.render(
	<BrowserRouter>
		<React.StrictMode>
			<App/>
		</React.StrictMode>
	</BrowserRouter>,
	document.getElementById('root')
);