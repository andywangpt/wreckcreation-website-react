import React from 'react'


function VideoBanner() {
  return (
     <div>
        <iframe
            title="YouTube video player" 
            className='video-banner'     
            src="https://www.youtube.com/embed/icxbOqb_VA8?rel=0&controls=0&modestbranding=0&autoplay=1&mute=1&loop=1&playlist=icxbOqb_VA8" 
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
           allowFullScreen>
        </iframe>
     </div>
  )
}

export default VideoBanner