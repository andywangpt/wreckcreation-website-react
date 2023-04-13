import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import banner from './assets/banner.jpg'

import VideoBanner from './Home/VideoBanner'
import Services from './Home/Services'
import ImageBanner from './Home/ImageBanner'
import Introduction from './Home/Introduction'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="App">
        
      <ImageBanner />  
      <Introduction />
      <VideoBanner />
      <Services />
 
   </div>
  )
}

export default App
