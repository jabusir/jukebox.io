import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import PlaylistSelect from '../components/PlaylistSelect';

const AppRouter = () => (
    <BrowserRouter> 
        <div>
            <Route path='/' component={Header} />
            <Switch>
                <Route path='/playlist' component={Dashboard} />
                <Route path='/selection' component={PlaylistSelect} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
