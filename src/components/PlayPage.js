import React from 'react';
import { connect } from 'react-redux';

class PlayPage extends React.Component {
    state = {
        currentSong: undefined
    };
    
    componentDidMount() {
        fetch(`https://api.spotify.com/v1/me/player/play?device_id=${this.props.deviceId}`, {
            method: 'PUT',
            body: JSON.stringify({ uris: [this.props.songUri] }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.token}`
            }
        })
            .then(() => {
                const currentSong = this.props.songs.filter((song) => song.uri === this.props.songUri);
                this.setState(() => ({ currentSong }));
            })
            .catch((err) => { console.log(err) });
    }
    
    render() {
        return (
            <div className="page">
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    deviceId: state.config.deviceId,
    songUri: state.config.song,
    token: state.token,
    songs: state.songs
});

export default connect(mapStateToProps)(PlayPage);

