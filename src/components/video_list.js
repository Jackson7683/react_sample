import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => { // pass the props as an argument so that it can be used
    
    const videoItems = props.videos.map(video => {
        return <VideoListItem key={video.etag} video = {video} 
                    onVideoSelect={props.onVideoSelect} />
    });
    
    /** react is very smart to understand how to render an array of components, but always
        introducing a 'key' to separate them from each other, here we use the etag property 
        contained in each item in the response
    */ 
    return (
        <ul className="col-md-4 list-group">
            <span className="video-list-title">Up next</span>
            {videoItems}
        </ul>
    );
} 

export default VideoList;