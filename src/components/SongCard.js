import React from 'react';

const SongCard = ({title, name, id, votes, duration, upVoteHandle}) => {
    return(
        <div>
            <div> {title} </div>
            <button onClick={() => upVoteHandle(id)}>VOTE</button> 
            <div> Votes: {votes} </div>
        </div>
    )
};

export default SongCard;