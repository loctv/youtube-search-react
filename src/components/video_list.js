import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    let videoItems = props.videos.map((video) => {
        return <VideoListItem
            onVideoSelect={props.onVideoSelect}
            key={video.etag}
            video={video} />
    })
    return (
        <ul className="col-md-4 col-sm-4 col-xs-12 list-group">
            {videoItems}
        </ul>
    )
}

export default VideoList;
