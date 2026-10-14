import React from 'react'
import Home from './components/Home'
import Nevbar from './components/Nevbar'
 import About from './components/About'
 import Contect from './components/Contect'
 import Footer from './components/Footer'
 import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div>
      <Nevbar/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contect' element={<Contect />} />
        

        {/*<Route path='*' element={<NotFound />} />*/}
        
      </Routes>
      <Footer/>
    </div>
  )
}

export default App