import React from 'react';
import SongList from './SongList';

export default class Dashboard extends React.Component {
    state = {
        songs: 'nothing'
    };
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
        }];
        this.setState(() => ({ songs }));
    }
    render(){
        console.log(this.state.songs);
        return (
            <div>
                <SongList playlist={this.state.songs}/>  
            </div>
        );
    }
}