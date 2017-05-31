import React from 'react';
import VideoDetail from './video_detail';

const VideoListItem = (props) => {

    const video = props.video;
    const onVideoSelect = props.onVideoSelect;
    const imgUrl = video.snippet.thumbnails.default.url;
    
    return (
        <li className="list-group-item"
            onClick={() => onVideoSelect(video)}>
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imgUrl} />
                </div>
            </div>
            <div className="media-body">
                <div className="media-heading">{video.snippet.title}</div>
            </div>
        </li>
    )
}

export default VideoListItem;