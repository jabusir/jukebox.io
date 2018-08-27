import React from 'react';
import SongCard from './SongCard';


export default class SongList extends React.Component {
    state = {

    }
    render() {
        console.log('this.props.playlist:', this.props.playlist);
        return (
                <div>
                    {this.props.playlist && this.props.playlist.sort((a,b) => {
                        console.log('a.votes:', a.vote, 'b.votes:', b.vote, 'a:', a, 'b:', b)
                        if(a.vote < b.vote) {
                            return 1
                        } else if (a.vote === b.vote) {
                            return 0
                        } else {
                            return -1
                        }
                    }).map((song) => <SongCard {...song} upVoteHandle={this.props.upVoteHandle}/>)}
                </div>
        )
    }
}