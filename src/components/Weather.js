import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Forecast from 'react-forecast';


class Weather extends Component {
  constructor(props) {
    super(props);


    }

  render () {
  return (
    <Forecast className='module' latitude={40.730610} longitude={-73.935242} name='New York' />
    )
  }
}


export default Weather;
