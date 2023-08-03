import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { menuLinks } from './data'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import LeftSide from './components/LeftSide'
import RightSide from './components/RightSide'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Bot from './components/Bot'



const App = () => {

  return (
    <main className=' w-full h-screen overflow-x-hidden overflow-y-scroll '>

        <Navbar menuLinks={menuLinks} />
    <div className=' w-full h-[88vh] xl:flex items-center gap-20 justify-between'>
   <div
   className='hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0'>
   <LeftSide/>
   </div>
   <div className=' h-[88vh]  w-full  px-4'>
   <Home/>
   <About/>
   <Bot/>
   <Skills/>
   <Projects/>
   <Contact/>
   <Footer/>
   </div>
   <div className='hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0'>
   <RightSide/>
   </div>
   </div>
      
       
   

    
    </main>
  )
}
      

export default App;
