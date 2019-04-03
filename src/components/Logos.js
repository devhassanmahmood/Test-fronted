import React, { Component } from 'react'

class Logos extends Component {
  constructor(props) {
    super(props);


    }

  render () {
  return (
    <div>
      <img className='logo' src="https://media.giphy.com/media/jnTlaB2jT8aVLgfjUo/giphy.gif" alt="globe"/>
      <img className='logo' src="https://media.giphy.com/media/5BYqDBLPtecziMW13U/giphy.gif" alt="phone"/>
      <img className='logo' src="https://media.giphy.com/media/C8YUs5cTnn6gGx3II1/giphy.gif" alt="phone"/>
    </div>
    )
  }
}


export default Logos;
