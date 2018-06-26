import '../assets/css/App.css';
import React, { Component } from 'react';
import Test from './test';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>This is React on Electron!</h1>
      <Test />
      </div>
    );
  }
}

export default App;
