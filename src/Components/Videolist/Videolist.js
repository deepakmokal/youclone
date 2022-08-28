import React from 'react'
import Videoitem from '../Videoitem/Videoitem'
import './Videolist.css'
function Videolist({videos}) {
    
  return (
      <>
      <div className='video-container'>
         {videos.map((video)=> <Videoitem video={video} key={video.id.videoId} />)}  
      </div>
        
      </>
      
  )
}

export default Videolist