import { createStore, combineReducers } from 'redux';
import songsReducer from '../reducers/songsReducer';
import tokenReducer from '../reducers/tokenReducer';

export default () => {
    const store = createStore(
        combineReducers({
            songs: songsReducer,
            token: tokenReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};