import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MainRoute from "./MainRoute/MainRoute";

ReactDOM.render(
	<App>
		{store => (
			<MainRoute {...store} />
		)}
	</App>
, document.getElementById('root'));