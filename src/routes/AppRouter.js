import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';

const AppRouter = () => (
    <BrowserRouter> 
        <div>
            <Route path='/' component={Header} />
            <Switch>
                <Route path='/playlist' component={Dashboard} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
