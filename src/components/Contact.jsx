import React, { useRef } from 'react';
import SectionTitle from './SectionTitle'
import { motion } from 'framer-motion'

import emailjs from '@emailjs/browser';
import {HiOutlineMail} from 'react-icons/hi'
import {BsWhatsapp} from 'react-icons/bs'
import {GoLocation} from 'react-icons/go'
const Contact = () => {

  const contact_info =[
    {logo:<HiOutlineMail/>, text:'ankleshdoras513@gamil.com'},
    {logo:<BsWhatsapp/>, text:'+91 8446159439'},
    {logo:<GoLocation/>, text:'wanadongri Hingna nagpur 441110 .'}
  ]

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0ss1udk', 'template_fouk18c', form.current, 'kFsKXu9lY6yBQKY-u')
      .then((result) => {
          console.log(result.text);
          console.log("Massage sent");
      }, (error) => {
          console.log(error.text);
      });
  };
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

    <div className='mt-10 flex md:flex-row flex-col gap-4 max-w-5xl  md:p-6 sm:p-6 p-2 rounded-lg mx-auto border border-gray-400 shadow-sm shadow-blue-600 hover:shadow-green-600 duration-300 '>
    <form className='flex flex-col flex-1 gap-4' ref={form} onSubmit={sendEmail}>
      <input className='  border border-blue-600 hover:border-green-700  rounded-sm px-2 py-1'  type="text" placeholder='Your Name' name="user_name"/>
      <input className='  border border-blue-600 hover:border-green-700  rounded-sm px-2 py-1'  type="Email" placeholder='Your Email Address' name="user_name"/>
     <textarea placeholder='Your Message' className='  border border-blue-600 hover:border-green-700  rounded-sm px-2 py-1' rows={10} name="message" ></textarea>
     <button className='text-blue-600  py-3 text-sm font-semibold border border-blue-700  tracking-wider hover:border-green-900 hover:bg-blue-600 hover:text-white duration-500 rounded-md' type="submit" value="Send">Send Massage</button>
    </form>
    <div className='flex flex-col gap-4'>
    {
      contact_info.map((contact, i)=>(
        <div key={i} className='flex gap-3 w-fit items-center'>
      <div className=' w-15 h-15 text-xl rounded-full inline-flex items-center bg-blue-700  hover:bg-green-700 p-2 justify-center  text-white cursor-pointer
      hover:translate-y-2 transition-all duration-300'>
    {contact.logo}
      </div>
      <p className='text-base'>{contact.text}</p>
    </div>
      ))
    }
    
    
    </div>
      </div>
    </div>


    </motion.section>
  )
}

export default Contact