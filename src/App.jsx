import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import banner from './assets/banner.jpg'

import 'tailwindcss/tailwind.css';


import NavBar from "./Components/NavBar";
import Training from './Pages/Training/TrainingPage'
import Home from './Pages/Home/HomePage'
import WebDev from './Pages/WebDev/WebDev';
import Creative from './Pages/Creative/CreativePage'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="App">
      <div>
           <Router>
              <NavBar />
            <Routes>
               <Route exact path="/" element={<Home />} />
               <Route path="/training" element={<Training />} />
               <Route path='/creative' element={<Creative /> } />
               <Route path="/webdev" element={<WebDev />} />
            </Routes>
         </Router>
        </div>
        <h1 className='text-primary'>world says hi back</h1>
   </div>
  )
}

export default App
