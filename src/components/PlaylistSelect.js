import React from 'react';
import { connect } from 'react-redux';
import PlaylistCard from './PlaylistCard';


class PlaylistSelect extends React.Component {
    state = {
        playlists: []
    }
    componentDidMount(){
        console.log(this.props.token);
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
            <div>
                {this.state.playlists.map((playlist) => <PlaylistCard key={playlist.id} {...playlist} />)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ token : state.token })

export default connect(mapStateToProps)(PlaylistSelect);