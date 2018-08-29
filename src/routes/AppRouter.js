import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from '../components/LoginPage';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';

const AppRouter = () => (
    <BrowserRouter> 
        <div>
            <Header />
            <Switch>
                <Route path='/' component={Dashboard} exact={true}/>
                <Route path='/login' component={LoginPage} />
                <Route path='/playlist' component={Dashboard} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
