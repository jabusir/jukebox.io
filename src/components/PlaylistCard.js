import React from 'react';
import '../styles/playlist-card.css';


const PlaylistCard = (props) => (
    <div>
        <div className='playlist-images-container'> 
            {props.images.map((image) => <img key={image.url} src={image.url} alt="Bismillah" /> )}
        </div>
        <div className='playlist-title'> {props.name} </div>
    </div>
);


export default PlaylistCard; 