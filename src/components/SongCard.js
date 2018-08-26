import React from 'react';

const SongCard = ({title, name, id, vote, duration, upVoteHandle}) => {
    return(
        <div>
            <div> {title} </div>
            <button onClick={() => upVoteHandle(id)}>VOTE</button> 
            <div> Votes: {vote} </div>
        </div>
    )
};

export default SongCard;