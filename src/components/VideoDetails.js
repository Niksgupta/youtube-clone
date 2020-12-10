import React from 'react';

const VideoDetails =({video})=>{
    if(!video){
        return <div> Syncing, just type😉...</div>
        }

        const videoSrc =`https://www.youtube.com/embed/${video.id.videoId}`;
        return(
            <>
            <div>
                <iframe src={videoSrc}
                        title="video player"
                        className="w-100"
                        style={{height:'380px'}}
                >

                </iframe>
                <div className="border p-2">
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
        <p><b>Publish Time:</b> {video.snippet.publishTime}</p>
        <p><b>Channel Name:</b> {video.snippet.channelTitle}</p>


                </div>
            </div>
            </>
        )
        }



export default VideoDetails;