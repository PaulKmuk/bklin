import React from 'react'
import image from '../images/pokoje.jpg'
import Button from './Button'
import { rooms } from '../data'
import { Link } from 'react-router-dom'


const FormRooms = () => {
   return (
      <div className='w-full h-full bg-white'>
         <div className='p-4 px-8'>
            <img src={image} className='w-full max-h-[160px] object-cover object-center'/>
         </div>
         <div className='px-4 text-gray-700 flex flex-col gap-6'>
            <h2 className='text-xl font-semibold flex gap-5 px-4'>
               Pokoje, 2-4 osobowe
            </h2>
            <div className='w-full bg-gray-10 px-4 grid grid-cols-2 sm:grid-cols-3 gap-4 rounded-md'>
                  {rooms.options.map((el, index) => (
                     <div
                        className='bg-gray-50 text-slate-800 rounded-md border border-slate-400 flex flex-col items-center p-2'
                        key={index}
                     >
                        <div className='py-2'>
                           <el.icon className='md:text-2xl'/>
                        </div>
                        <h5 className='pb-2 text-xs md:text-base font-semibold text-center'>{el.label}</h5>
                     </div>
                  ))}
               </div>
         </div>
         <div className='flex justify-center p-6 '>
            <Link
               to="/pokoje"
            >
               <Button label="Zarezerwuj"/>
            </Link>
         </div>
      </div>
   )
}

export default FormRooms