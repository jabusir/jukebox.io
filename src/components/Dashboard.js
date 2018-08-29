import React from 'react';
import Playlist from './Playlist';
import AppRouter from '../routes/AppRouter';

export default class Dashboard extends React.Component{
    componentDidMount(){
    }
    render(){
        return(
            <div>
                <AppRouter />
             </div>
        );
    }
}
