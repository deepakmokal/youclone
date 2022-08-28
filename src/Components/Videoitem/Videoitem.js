import React from 'react'

function Videoitem({video}) {
   console.log(video)
  return (
    <div className='video-item'>
        <div className='video-thumbnail w-100'>
           <img src={video.snippet.thumbnails.medium.url}/>
        </div>
        <h6 className='video-title mt-2 mb-1'>{video.snippet.title}</h6>
        <p className='channel-name'>{video.snippet.channelTitle}</p>
    </div>
    
  )
}

export default Videoitem