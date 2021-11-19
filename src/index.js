import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './scss/index.scss';
import Data from './Data';

ReactDOM.render(
	<React.StrictMode>
		<App data={Data} />
	</React.StrictMode>,
	document.getElementById('root')
);
