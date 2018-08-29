import React from 'react';
<<<<<<< HEAD
import Playlist from './Playlist'

export default class Dashboard extends React.Component{
    componentDidMount(){
        this.props.history.push('/login');
    }
    render(){
        return(
            <Playlist />
        );
    }
}
=======
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
>>>>>>> parent of 01128b9... dummy login successful added
