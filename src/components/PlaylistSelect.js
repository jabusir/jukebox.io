import React from 'react';
import { connect } from 'react-redux';
import PlaylistCard from './PlaylistCard';
import '../styles/pages.css'

class PlaylistSelect extends React.Component {
    state = {
        playlists: []
    }

    pushToPlaylist = () => {
        console.log('puush');
        this.props.history.push('/dashboard');
    }

    componentDidMount(){
        fetch('https://api.spotify.com/v1/me/playlists', {
            headers: {
                'Authorization': 'Bearer ' + this.props.token
            }
        })
            .then((res) => res.json())
            .then((res) => this.setState(() => ({playlists: res.items})))
    }
    render(){
        return(
            <div className="page">
                {this.state.playlists && this.state.playlists.map((playlist) => <PlaylistCard pushToPlaylist={this.pushToPlaylist} key={playlist.id} {...playlist} />)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ token : state.token })

export default connect(mapStateToProps)(PlaylistSelect);