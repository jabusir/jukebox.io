import React from 'react';

export default class Header extends React.Component{
    componentDidMount(){
        this.props.history.push('/login')
    }
    render(){
        return(
            <h1>Jukebox.io</h1>
        );
    }
}
 

