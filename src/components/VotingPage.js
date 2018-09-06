import React from 'react';
import SongCard from './SongCard';
import { connect } from 'react-redux';
import { setUri } from '../actions/configActions';
import '../styles/voting-page.css'

 class VotingPage extends React.Component{
     state = {
         indicies: [],
         seconds: 10
     }

    setRandomSongs = () => {
        const indicies = [];
        if (this.props.songs.length === 0) {
            return;
        }
        while (indicies.length < 5) {
            const number = Math.floor(Math.random() * this.props.songs.length);
            if (!indicies.includes(number)) {
                indicies.push(number);
            }
        };
        this.setState(() => ({ indicies }));
    }

    componentDidMount() {
        this.setRandomSongs();
        // setTimeout(() => {
        //     this.props.history.push('/play')
        // }, 10000);
        setInterval(() => {
            if (this.state.seconds > 1) {
                this.setState((prevState) => ({ seconds: prevState.seconds -1 }));
            } 
        }, 1000)
    }

    componentWillUnmount() {
        const songs = this.state.indicies.map((index) => this.props.songs[index]).sort((a,b) => {
            if (a.votes > b.votes) {
                return -1
            } else if (a.votes < b.votes) {
                return 1
            } else {
                return 0
            }
        })
        this.props.dispatch(setUri(songs[0].uri))
    }

    render() {
        return(
            <div className="page">
                <div className="spinner-container">
                    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    <div className="voting-number">{this.state.seconds}</div>
                </div>
                {
                    this.state.indicies.map((index) => this.props.songs[index])
                    .sort((a,b)=>{
                        if (a.votes < b.votes) {
                            return 1;
                        } else if (a.votes > b.votes) {
                            return -1;
                        } else {
                            return 0;
                        }
                    })
                    .map((song) => <SongCard className="song-card" key={song.id} {...song} />)
                }
             </div>
        );
    }
}

const mapStateToProps = (state) => ({
    songs: state.songs
})

export default connect(mapStateToProps)(VotingPage);