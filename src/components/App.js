import '../assets/css/App.css';
import React, { Component } from 'react';
import VideoContainer from './VideoContainer';
import Clock from './Clock';
// import News from './News';
import Spotify from './Spotify';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import { HashRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Switch>
            <Route path="/home/:id" component={Dashboard}/>
            <Route  path="/" component={Login}/>
      </Switch>
    );
  }
}

export default App;
