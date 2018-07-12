import React from 'react'
import PropTypes from 'prop-types'
import ReactWeather from 'react-open-weather';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render () {
  return (
    <ReactWeather
forecast="today"
apikey="YOUR_API_KEY"
type="city"
city="Munich"/>
    )
  }
}

export default Weather;
