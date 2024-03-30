import React, { useContext } from 'react'
import { ColorContext } from '../context/colorContext'

const HeaderSection = ({ label }) => {

   const { selectColor } = useContext(ColorContext)

   return (
      <div
         className='p-10 md:p-20'
      >
         <h2 className='uppercase text-center tracking-wide text-xl md:text-3xl font-semibold pb-4 text-gray-700'>
            {label}
         </h2>
         <div className={`h-2 w-[100px] md:w-[150px] ${selectColor.color} mx-auto`}></div>
      </div>
   )
}

export default HeaderSection