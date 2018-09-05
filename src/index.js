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

store.dispatch(setSongs([{
    id: '0001',
    title: 'Bearded Sperm',
    artist: 'Whale shit',
    length: '120000',
    votes: 0
}, {
    id: '0002',
    title: 'In love with Jungly KE LUND',
    artist: 'Hyderabadi Homo',
    length: '180000',
    votes: 0
}, {
    id: '0003',
    title: 'Beach Bonanza ',
    artist: 'Baraa',
    length: '160000',
    votes: 0
}, {
    id: '0004',
    title: 'Get that Ganja Wala',
    artist: 'Wiz 5alifa',
    length: '190000',
    votes: 0
},{
    id: '0005',
    title: 'Guy Motar Sippin',
    artist: 'GObar loving hindu shit',
    length: '120000',
    votes: 0
}]));

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

