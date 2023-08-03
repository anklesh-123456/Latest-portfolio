import React from 'react'
import SectionTitle from './SectionTitle'
import { motion } from 'framer-motion'
const Contact = () => {
  return (
    <motion.section id='contact'
    
    className='max-w-[1140px] mx-auto py-10 lg:px-6 xl:py-14 '
    initial="hidden"
      whileInView="visible"
      viewport={{once: true}}
     transition={{duration: 0.6 }}
     variants={{
      visible: {opacity:1, y: -50},
      hidden: {opacity:0, y: 0}
     }}>
    <div className='mx-5'>
    <SectionTitle title='Contact Us'/>
    </div>                                                             
    

    <div className='flex flex-col gap-4 items-center justify-center mt-10'>
    <p className=' text-lg text-gray-800 font-semibold flex items-center tracking-wide'>What's Next?</p>
    <h2 className=' text-5xl font-semibold'>Get In Touch</h2>
    <p className=' max-w-[600px] text-center text-gray-700'>
    Although I'm currently looking for opportunities. my inbox is always open. Wheather you have any opportunities just E-mail Me. l will be try my best to get back to you! 
    </p>

    <a href='mailto:ankleshdoras513@gmail.com'>
    <button className=' text-blue-600 font-semibold  border border-blue-700  text-[14px] mt-6 text-sm tracking-wide rounded-sm p-2 hover:bg-blue-700 hover:text-white hover:border-gray-900'>Email Me</button>
    </a>
    </div>


    </motion.section>
  )
}

export default Contact