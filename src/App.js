import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import VideoList from './components/video_list/video_list.jsx';
function App() {
    const [popularVideos, setPopularVideos] = useState([]);
    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };

        fetch('https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDFNmDcazUr-rqvQchPr2cZxw7JVUzQriE', requestOptions)
            .then(response => response.text())
            .then(result => setPopularVideos(JSON.parse(result).items))
            .catch(error => console.log('error', error));
    }, []);
    return <VideoList className='App' videos={popularVideos}></VideoList>;
}

export default App;
