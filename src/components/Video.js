import React, { Component } from 'react'

class Video extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const videoId = this.props.video.id.videoId;
        const url = `https://www.youtube.com/embed/${videoId}`;

        return (
            <li>
                <iframe allowFullScreen="allowFullScreen" frameBorder="0" type="text/html" src={url}></iframe>
            </li>
        );
    }
}

export default Video;


// what is en vogue
// 
