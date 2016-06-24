import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading...</div>
    }
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}?html5=1`;
    return (
        <div className="video-detail col-md-8 col-sm-8 col-xs-12">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item"
                    frameBorder="0"
                    allowFullScreen
                    src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    )
}

export default VideoDetail;
