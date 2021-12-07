import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/_global.scss';
import './styles/_media-query.scss';
import { BrowserRouter, HashRouter } from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		{/* <BrowserRouter> */}
		<HashRouter>
			<App />
		</HashRouter>
		{/* </BrowserRouter> */}
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
