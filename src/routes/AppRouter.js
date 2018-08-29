import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import LoginPage from '../components/LoginPage';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter> 
        <div>
            <Switch>
                <Route path='/' component={Header} exact={true}/>
                <Route path='/login' component={LoginPage} />
                <Route path='/dashboard' component={Dashboard} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
