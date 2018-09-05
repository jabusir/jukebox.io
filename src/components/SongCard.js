import React from 'react';
import { connect } from 'react-redux';
import { upVote, downVote } from '../actions/songsActions';

const SongCard = ({dispatch, artist, name, id, votes, duration}) => {
    console.log(name, id);
    return(
        <div>
            <div> {name} by {artist} </div>
            <button onClick={() => dispatch(upVote(id))}>VOTE UP</button> 
            <button onClick={() => dispatch(downVote(id))}>VOTE DOWN</button>
            <div> Votes: {votes} </div>
        </div>
    )
};


export default connect()(SongCard);