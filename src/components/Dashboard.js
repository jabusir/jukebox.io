import React from 'react';
import SongList from './SongList';

export default class Dashboard extends React.Component {
    state = {
        songs: []
    };

    upVoteHandle = (id) => {
        const nextPlaylist = this.state.songs.map((song) => {
            if (song.id === id) {
                return {
                    ...song,
                    vote: song.vote++
                };
            } else {
                return song;
            }
        });
        this.setState(() => ({ playlist: nextPlaylist }));
    }

    downVoteHandle = (id) => {
        const nextPlaylist = this.state.songs.map((song) => {
            if (song.id === id && song.vote > 0) {
                return {
                    ...song,
                    vote: song.vote--
                };
            } else {
                return song;
            }
        });
        this.setState(() => ({ playlist: nextPlaylist }));
    }

    componentDidMount(){
        const songs = [{
            id: '0001',
            title: 'Bearded Sperm',
            artist: 'Whale shit',
            length: '120000',
            vote: 0
        }, {
            id: '0002',
            title: 'In love with Jungly KE LUND',
            artist: 'Hyderabadi Homo',
            length: '180000',
            vote: 0
        }, {
            id: '0003',
            title: 'Beach Bonanza ',
            artist: 'Baraa',
            length: '160000',
            vote: 0
        }, {
            id: '0004',
            title: 'Get that Ganja Wala',
            artist: 'Wiz 5alifa',
            length: '190000',
            vote: 0
        },{
            id: '0005',
            title: 'Guy Motar Sippin',
            artist: 'GObar loving hindu shit',
            length: '120000',
            vote: 0
        }];
        this.setState(() => ({ songs }));
    }
    render(){
        console.log(this.state.songs);
        return (
            <div>
                {this.state.songs.length > 0 && <SongList playlist={this.state.songs} downVoteHandle={this.downVoteHandle} upVoteHandle={this.upVoteHandle} />} 
            </div>
        );
    }
}