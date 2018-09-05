import React from 'react';
import '../styles/playlist-card.css';


const PlaylistCard = (props) => (
    <div className='playlist-card'>
        <div className='playlist-images-container'> 
            <img src={props.images[0].url} alt="Say Bismillah Brother" />
        </div>
        <div className='playlist-title'> {props.name} </div>
    </div>
);


export default PlaylistCard; 