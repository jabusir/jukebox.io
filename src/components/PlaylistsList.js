import React from 'react';
import Playlist from './Playlist';

export default class PlaylistList extends React.Component{
    state = {
        playlist: []
    }

    createPlaylist = () => {
        const playlist = {
            name: 'First Playlist',
            owner: 'Jehad',
            others: ['Osman', 'Yasir', 'Maher', 'Shafiq'],
            songs: []
         }
        this.setState(() => ({ playlist }));
    }

    render(){
        return(
            <button 
            onClick={this.createPlaylist}
            >
            Create Playlist
            </button>
        );
    }
}