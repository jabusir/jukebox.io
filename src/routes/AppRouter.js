import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import VotingPage from '../components/VotingPage';
import PlaylistSelect from '../components/PlaylistSelect';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter> 
        <div>
            <Header />
            <Switch>
                <Route path='/' component={PlaylistSelect} exact />
                <Route path='/voting' component={VotingPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
