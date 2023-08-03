import React from 'react'
import {motion} from 'framer-motion'
import { BsFillChatDotsFill } from 'react-icons/bs';
const Bot = () => {
  const handleEmail =() =>{
    window.open("mailto:ankleshdoras513@gmail.com")
      }
  return (
    <motion.div className='fixed bottom-5 xl:right-20 right-5 z-[999] cursor-pointer text-white text-4xl bg-blue-700 hover:bg-green-700 w-16 h-16 flex items-center justify-center rounded-full animate-bounce transition-all duration-300' onClick={handleEmail}
    initial={{opacity: 0, x: 25}}
    animate={{opacity: 1, x: 0}}
    transition={{
      duration: 0.3,
      ease:"easeInOut",
      delay: 3,
    }}
    >
 <BsFillChatDotsFill/>
    </motion.div>
  )
}

export default Bot