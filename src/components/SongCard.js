import React from 'react';
import { connect } from 'react-redux';
import { upVote, downVote } from '../actions/songsActions';

const SongCard = ({dispatch, title, name, id, votes, duration}) => {
    return(
        <div>
            <div> {title} </div>
            <button onClick={() => dispatch(upVote(id))}>VOTE UP</button> 
            <button onClick={() => dispatch(downVote(id))}>VOTE DOWN</button>
            <div> Votes: {votes} </div>
        </div>
    )
};

export default connect()(SongCard);