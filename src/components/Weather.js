import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Forecast from 'react-forecast';


class Weather extends Component {
  constructor(props) {
    super(props);


    }

  render () {
  return (
    <Forecast latitude={34.05} longitude={118.25} name='Los Angeles' />
    )
  }
}


export default Weather;
