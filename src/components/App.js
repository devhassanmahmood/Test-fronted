import '../assets/css/App.css';
import React, { Component } from 'react';
import VideoContainer from './VideoContainer';
import Clock from './Clock';


class App extends Component {
  render() {
    return (
      <div>
      <Clock />
      <VideoContainer />
      </div>
    );
  }
}

export default App;
