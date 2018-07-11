import React from 'react'
import PropTypes from 'prop-types'

class Dashboard extends React.Component {
  render () {
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
   )
  }
}

export default Dashboard;
