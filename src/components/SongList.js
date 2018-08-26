import React from 'react';
import SongCard from './SongCard';


export default class SongList extends React.Component {
    state = {

    }
    render() {
        console.log('this.props.playlist:', this.props.playlist);
        return (
                <div>
                    {this.props.playlist && this.props.playlist.map((song) => <SongCard {...this.props.playlist} />)}
                </div>
        )
    }
}