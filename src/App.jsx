import { useState } from 'react'

import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Prowess from './components/Prowess'
import AboutMe from './components/AboutMe'
import Portfolio from './components/Portfolio'
import Feedback from './components/Feedback'
import Contact from './components/Contact'
import Footer from './components/Footer'







function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/> 
    <Hero/> 
    <Prowess/> 
    <AboutMe/> 
    <Portfolio/> 
    <Feedback/> 
    <Contact/> 
    <Footer/> 


    </>
  )
}

export default App