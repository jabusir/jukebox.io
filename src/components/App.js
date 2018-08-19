import React, { Component } from 'react';
import Dashboard from './Dashboard.js';
import SongList from './SongList';
import SongCard from './SongCard';

class App extends Component {
  render() {
    return (
      <div>
        <Dashboard >
          <SongList />
            <SongCard />
        </Dashboard>
      </div>
    );
  }
}

export default App;
