import React from 'react'
import { motion } from 'framer-motion'
import Resume from '../assets/Anklesh_Doras_cv.pdf'

const Home = () => {
  return (
   
    <section id='home'
    className=' mt-20 max-w-[1140px] mx-auto py-12  flex flex-col gap-4 lgl:gap-8   mdl:px-14  xl:px-6 justify-center px-0  mb-1'>
    <motion.h3 className=' text-lg tracking-wide'
    initial={{opacity: 0, x: 5}}
    animate={{opacity: 1, x: 0}}
    transition={{
      duration: 0.3,
      ease:"easeInOut",
      delay: 0.8,
    
  }}
    >
    Hi, my name is
    </motion.h3>
    <motion.h1 className=' text-4xl lgl:text-6xl font-semibold flex flex-col text-blue-600 cursor-pointer'
    initial={{opacity: 0, x: -25}}
    animate={{opacity: 1, x: 0}}
    transition={{
      duration: 0.3,
      ease:"easeInOut",
      delay: 1,
    
  }}
    >
    Anklesh Doras. <motion.span className='text-gray-600 mt-2'
    initial={{opacity: 0, x: -25}}
    animate={{opacity: 1, x: 0}}
    transition={{
      duration: 0.3,
      ease:"easeInOut",
      delay: 1.3,
    
  }}
    >I build thinks for the web.</motion.span></motion.h1>
    <motion.p className='  md:max-w-[650px] font-medium text-gray-600'
    initial={{opacity: 0, x: -25}}
    animate={{opacity: 1, x: 0}}
    transition={{
      duration: 0.3,
      ease:"easeInOut",
      delay: 1.6,
    
  }}>
    I am front-end web developer. I have a strong foundation in front-end developement and am skilled in creating user-friendly and responsive web applications using React and its ecosystem. 
     </motion.p>
     <motion.div className=' flex flex-row gap-2 md:gap-4'
     >
     <a href='#projects'>
     <motion.button className='text-blue-600 px-1 py-3 text-sm font-semibold border border-blue-700 rounded-sm tracking-wider hover:border-green-900 hover:bg-blue-600 hover:text-white duration-500 '
     initial={{opacity: 0, x: -25}}
     animate={{opacity: 1, x: 0}}
     transition={{
       duration: 0.3,
       ease:"easeInOut",
       delay: 1.9,
     
   }}
     >
     Check out Projects!
     </motion.button>
     </a>

     <a href={Resume} download='Resume'>
     <motion.button  className='text-blue-600  p-3 text-sm font-semibold border border-blue-700 rounded-sm tracking-wider hover:border-green-900 hover:bg-blue-600 hover:text-white duration-500  '
     initial={{opacity: 0, x: -15}}
     animate={{opacity: 1, x: 0 }}
     transition={{
       duration: 0.3,
       ease:"easeInOut",
       delay: 2.3,
       
      }}
      >Resume</motion.button>
      </a>
     </motion.div>
    </section>
   
    
  )
}

export default Home