import React from 'react';
import SongCard from './SongCard';
import { connect } from 'react-redux';

 class Dashboard extends React.Component{

    render(){
        return(
            <div>
                {this.props.songs.map((song) => <SongCard {...song}/>)}
             </div>
        );
    }
}

const mapStateToProps = (state) => ({
    songs: state.songs.sort((a,b) => {
        if(a.votes < b.votes) {
            return 1
        } else if (a.votes === b.votes) {
            return 0
        } else {
            return -1
        }})
})

export default connect(mapStateToProps)(Dashboard);