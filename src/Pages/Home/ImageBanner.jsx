import React from 'react'
import clubsCrop from '../../Assets/clubs-crop.jpg'

function ImageBanner() {
  return (
     <div>
        <img id="banner" className='heading-1' src={clubsCrop} alt="Wreckcreation Banner" />
     </div>
  )
}

export default ImageBanner