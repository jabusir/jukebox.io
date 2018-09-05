import React from 'react';
import SongCard from './SongCard';
import { connect } from 'react-redux';

 class Dashboard extends React.Component{
     state = {
         indicies: []
     }

    componentDidMount(){
        const indicies = [];
        if (this.props.songs.length === 0) {
            return;
        }
        while (indicies.length < 5) {
            const number = Math.floor(Math.random() * this.props.songs.length);
            console.log(number);
            if (!indicies.includes(number)) {
                indicies.push(number);
            }
        };
        this.setState(() => ({ indicies }));
    }

    render(){
        return(
            <div className="page">
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
                    .map((song) => <SongCard key={song.id} {...song} />)
                }
             </div>
        );
    }
}

const mapStateToProps = (state) => ({
    songs: state.songs
})

export default connect(mapStateToProps)(Dashboard);