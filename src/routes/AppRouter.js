import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from '../components/LoginPage';
import Header from '../components/Header';
import Playlist from '../components/Playlist';

const AppRouter = () => (
    <BrowserRouter> 
        <div>
            <Switch>
                <Route path='/' component={Header} exact={true}/>
                <Route path='/login' component={LoginPage} />
                <Route path='/playlist' component={Playlist} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
