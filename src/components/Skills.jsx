import React from 'react'
import SectionTitle from './SectionTitle'
import {AiOutlineHtml5} from 'react-icons/ai'
import {TbBrandCss3,TbBrandJavascript, TbBrandNextjs} from 'react-icons/tb'
import {SiReact} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'
import {SiRedux, SiBootstrap, SiTypescript} from 'react-icons/si'
import {FaSass} from 'react-icons/fa'
import { motion } from 'framer-motion'




const Skills = () => {
  const skills =[
    {
      logo:<AiOutlineHtml5/>, lang: 'HTML', count:86
    },
    {
      logo:<TbBrandCss3/>, lang: 'CSS', count:88
    },
    {
      logo:<TbBrandJavascript/>, lang: 'Javascript', count:65
    },
    {
      logo:<SiReact/>, lang: 'React JS', count:75
    },
    {
      logo:<TbBrandNextjs/>, lang: 'Next JS', count:70
    },
    {
      logo:<SiTailwindcss/>, lang: 'Tailwind CSS', count:88
    },
    {
      logo:<SiRedux/>, lang: 'Redux', count:65
    },
    {
      logo:<SiBootstrap/>, lang: 'BootStrap', count:60
    },
    {
      logo:<FaSass/>, lang: 'Sass', count:72
    },
    
  ]
  return (
    <motion.section id='skills'
    className='max-w-[1024px] mx-auto  py-10 lgl:py-20 flex lg:px-4  flex-col gap-8' 
    initial="hidden"
      whileInView="visible"
      viewport={{once: true}}
     transition={{duration: 0.6 }}
     variants={{
      visible: {opacity:1, y: -50},
      hidden: {opacity:0, y: 0}
     }}
    >
    <SectionTitle title='My Skills'/>
    <div className=' mt-4 text-white text-center '>
        <div className=' flex items-center justify-center mt-6 gap-10 flex-wrap cursor-pointer '>
          {
            skills?.map((skill, i)=>(
              <div key={i} className=' border-2 group border-green-600 hover:border-blue-600 relative min-w-[140px] max-w-[16rem] p-3 rounded-md flex flex-col  items-center justify-center hover:scale-110 duration-500 hover:bg-green-400'>
            <div style={{
              background:`conic-gradient(rgb(8,90,180) ${skill.count}%, #ddd ${skill.count}%)`
            }} className='w-[65px] h-[65px] flex items-center justify-center rounded-full'>
              <div className='text-6xl w-[40px] h-[40px] bg-gray-800 rounded-full flex items-center justify-center group-hover:text-blue-600 p-2'>
                {skill.logo}
              </div>
            </div>
            <p className=' text-lg text-gray-700 font-semibold mt-3'>{skill.lang}</p>
          </div>
            ))
          }
        </div>
      </div>
    </motion.section>
  )
}

export default Skills