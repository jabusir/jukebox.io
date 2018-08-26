import React from 'react';
import SongCard from './SongCard';


export default class SongList extends React.Component {
    state = {

    }
    render() {
        console.log('this.props.playlist:', this.props.playlist);
        return (
                <div>
                    {this.props.playlist && this.props.playlist.map((song) => <SongCard {...song} upVoteHandle={this.props.upVoteHandle}/>).sort((a,b) => {
                        if(a.votes < b.votes) {
                            return -1
                        } else {
                            return 1
                        }
                    })}
                </div>
        )
    }
}