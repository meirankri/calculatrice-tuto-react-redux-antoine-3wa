import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//contextualiser notre store dans notre app
//qui est un module react pour contextualiser
import {Provider} from 'react-redux'

//création du store  
import {createStore} from 'redux'

//store 
import reducer from './reducers/calculatrice'
//creer le store que l'on passe a l'application
//function qui vient de redux non lié a react
const store = createStore(reducer)



ReactDOM.render(
<Provider store={store}>
   <App />
</Provider>
, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
