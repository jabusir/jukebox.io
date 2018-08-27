import React from 'react';

const SongCard = ({title, name, id, vote, duration, upVoteHandle, downVoteHandle}) => {
    return(
        <div>
            <div> {title} </div>
            <button onClick={() => upVoteHandle(id)}>VOTE UP</button> 
            <button onClick={() => downVoteHandle(id)}>VOTE DOWN</button>
            <div> Votes: {vote} </div>
        </div>
    )
};

export default SongCard;