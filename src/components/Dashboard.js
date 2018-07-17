import React from 'react'
import PropTypes from 'prop-types'
import VideoContainer from './VideoContainer';
import Clock from './Clock';
import News from './News';
import Spotify from './Spotify';
import Login from './Login';
import Weather from './Weather';
import Register from './Register';

class Dashboard extends React.Component {
  render() {
    return (<div>
      <div className="region left">
        <Clock/>
        <Spotify/>
      </div>
      <div className="region bottom container"></div>
      <div className="region right">
        <VideoContainer/>
      </div>
      <div className="region top left">
        <News />
      </div>
      <div className= "region top right">
        <Weather />
      </div>
    </div>)
  }
}

export default Dashboard;