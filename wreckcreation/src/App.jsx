import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import banner from './assets/banner.jpg'

import 'bootstrap/dist/css/bootstrap.css';

import VideoBanner from './Landing-Page-Components/VideoBanner'
import Services from './Landing-Page-Components/Services'
import ImageBanner from './Landing-Page-Components/ImageBanner'
import Introduction from './Landing-Page-Components/Introduction'

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
