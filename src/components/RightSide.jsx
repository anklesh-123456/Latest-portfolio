import React from 'react'
import {motion} from 'framer-motion'
const RightSide = () => {
  return (
    <motion.div className=' w-full h-full flex flex-col items-center justify-end gap-[140px] text-blue-800'
    initial={{opacity: 0, x: 25}}
    animate={{opacity: 1, x: 0}}
    transition={{
      duration: 0.3,
      ease:"easeInOut",
      delay: 2.8,
    
  }}>
    <a href='mailto:ankleshdoras513@gmail.com'>
    <p className=' text-lg rotate-90 w-72 tracking-wide text-blue-800'>ankleshdoras513@gmail.com</p>
    </a>
    <span className=' w-[2px] h-32 bg-blue-700 inline-flex'></span>
    </motion.div>
  )
}

export default RightSide