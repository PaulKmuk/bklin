import React from 'react'

const Input = ({ placeholder, onChange, type }) => {
   return (
      <input 
         className='border text-base md:text-lg px-4 py-2 rounded-sm w-full'
         type={type}
         placeholder={placeholder}
         onChange={onChange}
      />
   )
}

export default Input