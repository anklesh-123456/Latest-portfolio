import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import movix from '../assets/images/movix.png'
import exercise from '../assets/images/exercise.png'
import travigo from '../assets/images/travigo.png'
import Youtube from '../assets/images/youtubeclone.png'
import {FiGithub} from 'react-icons/fi'
import {RxOpenInNewWindow} from 'react-icons/rx'
import {motion} from  'framer-motion'
import Todo from '../assets/images/todo.png'

const Projects = () => {

  const [showMore, setShowMore] = useState(false)

  return (
    <motion.section id='projects'
    className=' max-w-[1440px] mx-auto px-4 md:px-10  lgl:px-[130px] py-20'
    initial="hidden"
      whileInView="visible"
      viewport={{once: true}}
     transition={{duration: 0.6 }}
     variants={{
      visible: {opacity:1, y: -50},
      hidden: {opacity:0, y: 0}
     }}>
    <SectionTitle title='Projects'/>

    <div className=' w-full flex flex-col items-center justify-between gap-[40px] mt-10'>
   {/* Project1 */}

    <div className=' w-full flex flex-col items-center px-10 py-5  justify-center gap-28 mt-10 border border-gray-300 shadow-sm shadow-blue-400 hover:shadow-green-400 duration-300 rounded-md cursor-pointer'>
    <div className='flex flex-col xl:flex-row gap-6'>
    <a className=' w-full xl:w-1/2 h-auto relative group'>
    <img className=' w-full h-full object-cover rounded-md' src={movix} alt='movix'/>
    </a>
    <div className=' w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end  xl:-ml-16 z-10'>
    <p className=' text-sm tracking-wide text-blue-600'>Featured Project</p>
    <h3 className=' text-2xl font-bold text-gray-800 hover:text-green-600'>Movix</h3>
    <p className=' bg-blue-500 text-sm md:text-base p-2 md:p-6 rounded-md hover:scale-105 duration-500 hover:bg-green-500 text-white'>I made a Movix With Rapid Api that show the information related to movies, television series, cast. you can see the Rating of movies and series also trailer of the movie. we are using Redux Toolkit for state management & Its fully Responsive website.</p>
    <ul className=' text-xs md:text-sm tracking-wide flex flex-wrap gap-2 md:gap-5 lgl:-mr-10  text-black'>
      <li>HTML</li>
      <li>Tailwind CSS</li>
      <li>Javascript</li>
      <li>React js</li>
      <li>Redux</li>
      <li>Rapid API</li>
    </ul>
    <div  className=' flex flex-row gap-4 '>
    <a href='https://github.com/anklesh-123456/movix' target='_blank' className=' bg-gray-400 hover:bg-green-600  text-white  w-15 h-15 text-xl rounded-full  items-center  p-2  justify-center cursor-pointer transition-all hover:scale-110 duration-300 '>
    <FiGithub/>
    </a>
    <a href='https://movix-gules.vercel.app/' target='_blank' className=' bg-gray-400 hover:bg-green-600  text-white  w-15 h-15 text-xl rounded-full  items-center  p-2  justify-center cursor-pointer transition-all hover:scale-110 duration-300'>
    <RxOpenInNewWindow/>
    </a>
    </div>
    </div>
    </div>
   
    </div>

     {/* Project2 */}


     <div className=' w-full flex flex-col items-center px-10 py-5  justify-center gap-28 mt-10 border border-gray-300 shadow-sm shadow-blue-400 hover:shadow-green-400 duration-300 rounded-md cursor-pointer'>
     <div className='flex flex-col xl:flex-row-reverse gap-6'>
     <a className=' w-full xl:w-1/2 h-auto relative group'>
     <img className=' w-full h-full object-cover rounded-md' src={Youtube} alt='movix'/>
     </a>
     <div className=' w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right  z-10'>
     <p className=' text-sm tracking-wide text-blue-600 left-0'>Featured Project</p>
     <h3 className=' text-2xl font-bold text-gray-800 hover:text-green-600'>Youtube Clone</h3>
     <p className=' bg-blue-500 text-sm md:text-base p-2 md:p-6 rounded-md hover:scale-105 duration-500 hover:bg-green-500 text-white xl:-mr-16 text-left'>This is a Youtube Clone web application that uses the Rapid Api. It has a infinite Scrolling & lets you watch the videos by categories. we are using React Js & using  Context Api for state management stytem.</p>
     <ul className=' text-xs md:text-sm tracking-wide flex flex-wrap gap-2 md:gap-5 text-black'>
     <li>HTML</li>
     <li>Tailwind CSS</li>
     <li>Javascript</li>
     <li>React js</li>
      <li>Context API</li>
      <li>Rapid API</li>
     </ul>
     <div  className=' flex flex-row gap-4 '>
     <a href='https://github.com/anklesh-123456/Youtube-Clone' target='_blank' className=' bg-gray-400 hover:bg-green-600  text-white  w-15 h-15 text-xl rounded-full  items-center  p-2  justify-center cursor-pointer transition-all hover:scale-110 duration-300 '>
     <FiGithub/>
     </a>
     <a href='https://youtube-clone-lyart-five.vercel.app/' target='_blank' className=' bg-gray-400 hover:bg-green-600  text-white  w-15 h-15 text-xl rounded-full  items-center  p-2  justify-center cursor-pointer transition-all hover:scale-110 duration-300'>
     <RxOpenInNewWindow/>
     </a>
     </div>
     </div>
     </div>
    
     </div>

        {/* Project3 */}

    <div
    className=' w-full flex flex-col items-center px-10 py-5  justify-center gap-28 mt-10 border border-gray-300 shadow-sm  shadow-blue-400 hover:shadow-green-400 duration-300 rounded-md cursor-pointer'>
    <div className='flex flex-col xl:flex-row gap-6'>
    <a className=' w-full xl:w-1/2 h-auto relative group'>
    <img className=' w-full h-full object-cover rounded-md' src={Todo} alt='movix'/>
    </a>
    <div className=' w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
    <p className=' text-sm tracking-wide text-blue-600'>Featured Project</p>
    <h3 className=' text-2xl font-bold text-gray-800 hover:text-green-600'>Todo app</h3>
    <p className=' bg-blue-500 text-sm md:text-base p-2 md:p-6 rounded-md hover:scale-105 duration-300 hover:bg-green-500 text-white text-left'>I made a Todo Application using Typescript & Next Js. you can add a note then check the Active & complete state then you can delete the note. we are using the Context Api for state management system.</p>
    <ul className=' text-xs md:text-sm tracking-wide flex flex-wrap gap-2 md:gap-5   text-black ml-4'>
    <li>HTML</li>
    <li>Tailwind CSS</li>
    <li>Typescript</li>
    <li>Next js</li>
     <li>Context API</li>
    </ul>
    <div  className=' flex flex-row gap-4 '>
    <a  href='https://github.com/anklesh-123456/Todo-App' target='_blank' className=' bg-gray-400 hover:bg-green-600  text-white  w-15 h-15 text-xl rounded-full  items-center  p-2  justify-center cursor-pointer transition-all hover:scale-110 duration-300 '>
    <FiGithub/>
    </a>
    <a  href='https://todo-app-zeta-three-98.vercel.app/' target='_blank' className=' bg-gray-400 hover:bg-green-600  text-white  w-15 h-15 text-xl rounded-full  items-center  p-2  justify-center cursor-pointer transition-all hover:scale-110 duration-300'>
    <RxOpenInNewWindow/>
    </a>
    </div>
    </div>
    </div>
    </div>

    {/* Project4 */}

    <div className=' w-full flex flex-col items-center px-10 py-5  justify-center gap-28 mt-10 border border-gray-300 shadow-sm shadow-blue-400 hover:shadow-green-400 duration-300 rounded-md cursor-pointer'>
    <div className='flex flex-col xl:flex-row-reverse gap-6'>
    <a className=' w-full xl:w-1/2 h-auto relative group'>
    <img className=' w-full h-full object-cover rounded-md' src={travigo} alt='movix'/>
    </a>
    <div className=' w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right  z-10'>
    <p className=' text-sm tracking-wide text-blue-600 left-0'>Featured Project</p>
    <h3 className=' text-2xl font-bold text-gray-800 hover:text-green-600'>Travigo</h3>
    <p className=' bg-blue-500 text-sm md:text-base p-2 md:p-6 rounded-md hover:scale-105 duration-500 hover:bg-green-500 text-white xl:-mr-16 text-left'>I made a Travigo Travel web Application using React Js & Tailwind Css. it's a simple Travel application User Interface using the help of React Js.</p>
    <ul className=' text-xs md:text-sm tracking-wide flex flex-wrap gap-2 md:gap-5   text-black'>
    <li>HTML</li>
    <li>Tailwind CSS</li>
    <li>Javascript</li>
    <li>React js</li>
    </ul>
    <div  className=' flex flex-row gap-4 '>
    <a href='https://github.com/anklesh-123456/Travigo-Traval-Agency' target='_blank' className=' bg-gray-400 hover:bg-green-600  text-white  w-15 h-15 text-xl rounded-full  items-center  p-2  justify-center cursor-pointer transition-all hover:scale-110 duration-300 '>
    <FiGithub/>
    </a>
    <a href='https://travigo-agency.netlify.app/' target='_blank' className=' bg-gray-400 hover:bg-green-600  text-white  w-15 h-15 text-xl rounded-full  items-center  p-2  justify-center cursor-pointer transition-all hover:scale-110 duration-300'>
    <RxOpenInNewWindow/>
    </a>
    </div>
    </div>
    </div>
   
    </div>

    {
      showMore && (
        <>
         {/* Project5 */}


 <motion.div
 initial={{opacity: 0}}
 whileInView={{opacity: 1}}
 transition={{opacity: 0.1}}
 className=' w-full flex flex-col items-center px-10 py-5  justify-center gap-28 mt-10 border border-gray-300 shadow-sm  shadow-blue-400 hover:shadow-green-400 duration-300 rounded-md cursor-pointer'>
 <div className='flex flex-col xl:flex-row gap-6'>
 <a className=' w-full xl:w-1/2 h-auto relative group'>
 <img className=' w-full h-full object-cover rounded-md' src={exercise} alt='movix'/>
 </a>
 <div className=' w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
 <p className=' text-sm tracking-wide text-blue-600'>Featured Project</p>
 <h3 className=' text-2xl font-bold text-gray-800 hover:text-green-600'>Exercise</h3>
 <p className=' bg-blue-500 text-sm md:text-base p-2 md:p-6 rounded-md hover:scale-105 duration-300 hover:bg-green-500 text-white text-left'>This is a VAWULENS exercise web Application with the help of React Js. It's a multipage web application that shows the gallery, plans & trainer pages in the application. it has a Program plans on this web application.</p>
 <ul className=' text-xs md:text-sm tracking-wide flex flex-wrap gap-2 md:gap-5   text-black ml-4'>
 <li>HTML</li>
 <li>CSS</li>
 <li>Javascript</li>
 <li>React js</li>
  <li>React icons</li>
 </ul>
 <div  className=' flex flex-row gap-4 '>
 <a  href='https://github.com/anklesh-123456/Exercise-React-App' target='_blank' className=' bg-gray-400 hover:bg-green-600  text-white  w-15 h-15 text-xl rounded-full  items-center  p-2  justify-center cursor-pointer transition-all hover:scale-110 duration-300 '>
 <FiGithub/>
 </a>
 <a  href='https://exercise-add.netlify.app/' target='_blank' className=' bg-gray-400 hover:bg-green-600  text-white  w-15 h-15 text-xl rounded-full  items-center  p-2  justify-center cursor-pointer transition-all hover:scale-110 duration-300'>
 <RxOpenInNewWindow/>
 </a>
 </div>
 </div>
 </div>
 </motion.div>

  


        </>
      )
    }


    </div>
    <div className=' mt-12 flex items-center justify-center cursor-pointer'>
    {
      showMore ?(
        <button 
        onClick={() => setShowMore(false)}
        className=' p-2 font-semibold text-[14px] text-blue-600 hover:bg-blue-600 hover:text-white border border-blue-700 hover:border-green-800 duration-300'>Show Less</button>
      ) : (
        <button 
        onClick={() => setShowMore(true)}
        className=' p-2 font-semibold text-blue-600 text-[14px] hover:bg-blue-600 hover:text-white border border-blue-700 hover:border-green-800 duration-300'>Show More</button>
      )
    }                                                                                         
   
    </div>                                                                                                                                                                                           

                           

    
    </motion.section>
  )
}                              

export default Projects                                   