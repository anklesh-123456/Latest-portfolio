import React from 'react'
import {FiGithub, FiInstagram} from 'react-icons/fi'
import {FaLinkedinIn, FaFacebookF} from 'react-icons/fa'
import { motion } from 'framer-motion'
const LeftSide = () => {

  return (
    <motion.div className=' w-full h-full flex flex-col items-center justify-end gap-6 text-black'
    initial={{opacity: 0, x: -25}}
    animate={{opacity: 1, x: 0}}
    transition={{
      duration: 0.3,
      ease:"easeInOut",
      delay: 2.5,
    
  }}>
    <div className=' flex flex-col gap-4'>
    <a href='https://github.com/anklesh-123456' target='_blank'>
    <span className=' w-15 h-15 text-xl rounded-full inline-flex items-center  p-2  justify-center bg-blue-700  text-white cursor-pointer
    hover:translate-y-2 transition-all duration-300'>
    <FiGithub/>
    </span>
    </a>
    <a href='https://www.linkedin.com/in/anklesh-doras/' target='_blank'>
    <span className=' w-15 h-15 text-xl rounded-full inline-flex items-center bg-gray-500 hover:bg-blue-700 p-2 justify-center  text-white cursor-pointer
    hover:translate-y-2 transition-all duration-300'>
    <FaLinkedinIn/>
    </span>
    </a>
    <a>
    <span className=' w-15 h-15 text-xl rounded-full inline-flex items-center bg-gray-500 hover:bg-blue-700 p-2  justify-center  text-white cursor-pointer
    hover:translate-y-2 transition-all duration-300'>
    <FiInstagram/>
    </span>
    </a>
    <a>
    <span className=' w-15 h-15 text-xl rounded-full inline-flex items-center bg-gray-500 hover:bg-blue-700 p-2 justify-center hbg-blue-700 text-white cursor-pointer
    hover:translate-y-2 transition-all duration-300'>
    <FaFacebookF/>
    </span>
    </a>
    </div>
    <div className='w-[2px] h-32 bg-blue-700'></div>
    </motion.div>
  )
}

export default LeftSide