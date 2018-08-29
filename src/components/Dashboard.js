import React from 'react';
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