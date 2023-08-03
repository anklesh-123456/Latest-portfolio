import React from 'react'
import {FiGithub, FiInstagram} from 'react-icons/fi'
import {FaLinkedinIn, FaFacebookF} from 'react-icons/fa'
import { motion } from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
    initial="hidden"
      whileInView="visible"
      viewport={{once: true}}
     transition={{duration: 0.6 }}
     variants={{
      visible: {opacity:1, y: -50},
      hidden: {opacity:0, y: 0}
     }}>
    <div className=' hidden items-center justify-center md:flex md:flex-col lgl:hidden mb-10 mx-auto gap-5 py-10 xl:py-14'>
    
    <div className='  flex flex-row gap-4 text-black'>
          <div className=' flex flex-row gap-4 mx-10'>
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
          </div>

          <div className=' flex   text-blue-800 ml-7 '>
    <a href='mailto:ankleshdoras513@gmail.com'>
    <p className=' text-base  w-72 tracking-wide text-blue-800'>ankleshdoras513@gmail.com</p>
    </a>
    </div>

    </div>
    </motion.section>
  )
}

export default Footer