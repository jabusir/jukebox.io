import React from 'react';
import { connect } from 'react-redux';
import { upVote, downVote } from '../actions/songsActions';
import '../styles/song-card.css'


const SongCard = ({dispatch, artist, name, id, votes, duration}) => {
    return(
        <div className="song-card">
            <i className="material-icons arrow" onClick={() => dispatch(downVote(id))}>keyboard_arrow_down</i>
            <div className="info-container">
                <div className="song-name">{name} by {artist}</div>
                <div className="vote-button">{votes}</div>
            </div>
            <i className="material-icons arrow" onClick={() => dispatch(upVote(id))}>keyboard_arrow_up</i>
        </div>
    )
};


export default connect()(SongCard);
