import React from 'react'
import PropTypes from 'prop-types'
import SpotifyPlayer from 'react-spotify-player';
const size = {
  width: '100%',
  height: 300,
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'

class Spotify extends React.Component {
  render () {
  return (
    <div>
    <SpotifyPlayer
      uri="spotify:album:1TIUsv8qmYLpBEhvmBmyBk"
      size={size}
      view={view}
      theme={theme}
    />
    </div>
  )
  }
}

export default Spotify;
