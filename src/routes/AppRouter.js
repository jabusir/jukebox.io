import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import PlaylistSelect from '../components/PlaylistSelect';

const AppRouter = () => (
    <BrowserRouter> 
        <div>
            <Switch>
                <Route path='/' component={PlaylistSelect} exact />
                <Route path='/dashboard' component={Dashboard} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
