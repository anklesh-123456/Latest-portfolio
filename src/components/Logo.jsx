import React from 'react'

const Logo = () => {
  return (
    <div className=' text-blue-600 w-[46px] font-bold cursor-pointer  '>
    <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96 ">
    <title>Logo</title>
    <g transform="translate(-3.000000, -3.000000)">
      <g transform="translate(6.000000, 7.000000)">
        <polygon
          id="Shape"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="39 0 0 22 0 67 39 90 78 68 78 23"
        />
      </g>
    </g>
    <text x="26" y="65" fill="currentColor" fontSize="45px" fontFamily="Poppins">
      A
    </text>
  </svg>
    </div>
  )
}

export default Logo