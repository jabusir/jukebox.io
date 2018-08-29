import React from 'react';
import Playlist from './Playlist'

export default class Dashboard extends React.Component{
    state = {
        search: ''
    }
    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleChange = (e) => {
        const searchInput = e.target.value;
        this.setState((prevState) => { prevState: searchInput });
    }


    render(){
        return(
            <div>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                        type="text"
                        value={this.state.search}
                        onChange={this.handleChange}
                        placeholder="Search"
                        />
                    </form>
                    <Playlist />
             </div>
        );
    }
}

