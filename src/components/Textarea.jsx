import React from 'react'

const Textarea = ({ placeholder, onChange, type }) => {
   return (
      <textarea 
         className='border text-base md:text-lg px-4 py-2 rounded-sm flex-1 w-full max-md:min-h-[200px] min-h-[120px]'
         type={type}
         placeholder={placeholder}
         onChange={onChange}
      />
   )
}

export default Textarea