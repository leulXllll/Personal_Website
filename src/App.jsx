import Navbar from "./components/Navbar"
import Home from "./Home.jsx"
import SocialLinks from "./components/SocialLinks"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Navbarpath from './components/Navbarpath'
import Errorpage from './components/Errorpage'
import {BrowserRouter as Router , Routes, Route, } from 'react-router-dom'

function App() {
  return (<>
          
              <Navbar/>
               <Home />
               <About/>
               <Portfolio/>
               <SocialLinks/>
               <Experience/>
               <Contact/>
            

            {/*
          <Router>
             <Navbarpath />
             <Routes>    
               <Route path="/home" element={<Home />}></Route>
              <Route path="/about" element={<About/>}></Route>
              <Route path="/portfolio" element={<Portfolio/>}></Route>
              <Route path="/sociallink" element={<SocialLinks/>}></Route>
              <Route path="/experience" element={<Experience/>}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path='*' element={<Errorpage/>}></Route>
           </Routes>
         </Router>
            
            */}
            
             </>  
  )
}

export default App

