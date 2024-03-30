import React, { useContext } from 'react'
import { ColorContext } from '../context/colorContext'

const Button = ({ label, onClick }) => {

   const { selectColor } = useContext(ColorContext)

   return (
      <button
         onClick={onClick}
         className={`${selectColor.color} transition-all duration-200 hover:${selectColor.hover} text-white uppercase text-base font-semibold md:py-5 py-3 md:px-12 px-10 tracking-wider`}
      >
         {label}
      </button>
   )
}

export default Button



// import React from 'react'

// const Button = ({ label, onChange }) => {
//    return (
//       <button
//          onChange={onChange}
//          className='bg-green-600 transition-all duration-200 hover:bg-green-500 text-white uppercase text-base font-semibold md:py-5 py-3 md:px-12 px-10 tracking-wider'
//       >
//          {label}
//       </button>
//    )
// }

// export default Button