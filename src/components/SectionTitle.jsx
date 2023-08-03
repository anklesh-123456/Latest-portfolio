import React from 'react'

const SectionTitle = ({title}) => {
  return (
    <div>
    <h2  className=' text-2xl font-semibold flex items-center text-gray-900 '>
   {title}
    <span className=' w-24 inline-flex md:w-60 lgl:w-72 h-[0.5px] bg-blue-500 ml-6'></span>
    </h2>
    </div>
  )
}

export default SectionTitle