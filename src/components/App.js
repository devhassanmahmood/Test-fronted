import '../assets/css/App.css';
import React, { Component } from 'react';
import VideoContainer from './VideoContainer';
import Clock from './Clock';
// import News from './News';
import Spotify from './Spotify';


class App extends Component {
  render() {
    return (
      <div>
        <div className="region left">
      <Clock />
    <Spotify />
  </div>
  <div className="region bottom container">
  </div>
  <div className="region right">
      <VideoContainer />
  </div>
      </div>
    );
  }
}

export default App;
