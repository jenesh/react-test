import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GreetingsClass from './Class';
import * as serviceWorker from './serviceWorker';
import SimpleForm from "./State";

ReactDOM.render(
    
    <div>
        <App />
        <GreetingsClass />
        <SimpleForm />
    </div>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
