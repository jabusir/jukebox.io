import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import  { setSongs } from './actions/songsActions';
import { setToken } from './actions/tokenActions';
import './styles/pages.css';


const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

const token = localStorage.getItem('token');

if(!token){
    console.log('heller');
    window.location.href="http://localhost:3001/spotify/login";
    fetch("/spotify/token")
        .then((res) => res.json())
        .then((token) => {
            localStorage.setItem('token', token);
            store.dispatch(setToken(token));
        })
} else {
    store.dispatch(setToken(token));
}

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();

