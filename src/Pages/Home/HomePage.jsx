import React from 'react'
import VideoBanner from './VideoBanner'
import Services from './Services'
import ImageBanner from './ImageBanner'
import Introduction from './Introduction'

function Home() {
   return (
     <div>
      <h1 className='heading-1'>WRECKCREATION</h1>
      <ImageBanner />  
      <Introduction />  
      
      <button className='btn btn-primary'>Add Count</button>  
      <VideoBanner />
      <Services />
     </div>

  )
}

export default Home