import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import './index.css';
import App from './App';
import Game from './page/gameMain'
import registerServiceWorker from './registerServiceWorker';


// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Game />, document.getElementById("root"));
registerServiceWorker();
