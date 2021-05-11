import React from 'react';
import VideoItem from '../video_item/video_item.jsx';

const videoList = props => (
    <ul>
        {props.videos.map(video => (
            <VideoItem key={video.id} video={video}></VideoItem>
        ))}
    </ul>
);

export default videoList;
