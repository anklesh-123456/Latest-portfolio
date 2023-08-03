import React, { useState, useEffect } from 'react'
import {HiMenuAlt3} from 'react-icons/hi'
import {CgClose} from 'react-icons/cg'
import Logo from './Logo';
import {FiGithub, FiInstagram} from 'react-icons/fi'
import {FaLinkedinIn, FaFacebookF} from 'react-icons/fa'
import { motion } from 'framer-motion';
const Navbar = ({menuLinks}) => {
const [open, setOpen] = useState(false);




     
  return (
   <>
   <nav className=' fixed w-full left-0 top-0 transition-transform duration-300 bg-white  text-gray-900 shadow-lg z-[999]'>
    <div className='flex items-center justify-between p-2'>
      <motion.div className='mx-9' 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{
        duration: 0.4,
        ease:"easeInOut",
        
      }}
      >
      <Logo/>
      
      </motion.div>
      <motion.div className="bg-white text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full" 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{
        duration: 0.3,
        ease:"easeInOut",
        delay: 0.6,
      }}>
        <ul className='flex items-center gap-1 py-1 text-lg transition-all ease-in-out'>
          {menuLinks.map((menu, i,)=>(
            <motion.li  key={i} className=' px-6 hover:text-blue-700 '
            initial={{opacity: 0, y: -25}}
            animate={{opacity: 1, y: 0}}
            transition={{
              duration: 0.5,
              ease:"easeInOut",
              delay: 0.6,
            
          }}
            >
              <a href={menu?.link}>{menu?.name}</a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
      <div onClick={()=> setOpen(!open)}
       className='z-[999] text-blue-700 text-4xl md:hidden m-3'>
        
       {open ? <CgClose name='menu'/> : <HiMenuAlt3 name="menu" /> }
      </div>
      <motion.div className={`md:hidden text-gray-900 absolute w-[75%] h-screen  font-medium bg-white shadow-lg top-0 duration-300 ${open ? 'right-0' : 'right-[-100%]'}`}
      initial={{opacity: 0, x: -25}}
      animate={{opacity: 1, x: 0}}
      transition={{
        duration: 0.5,
        ease:"easeInOut",
      
    }}>
        <ul className='flex flex-col py-[120px] h-full gap-8 px-5 text-lg'>
          {
            menuLinks?.map((menu, i)=>(
              <li onClick={()=> setOpen(false)} key={i} className='px-6 hover:text-blue-700 mx-5'>
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))
          }
       
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

          <div className=' flex  text-blue-800 '>
    <a href='mailto:ankleshdoras513@gmail.com'>
    <p className=' text-base  w-72 tracking-wide text-blue-800'>ankleshdoras513@gmail.com</p>
    </a>
    </div>

        </ul>
      </motion.div>
    </div>
   </nav>
   </>
  )
}

export default Navbar