import React, { useState } from 'react'
import { FaHome, FaBed, FaEnvelope } from "react-icons/fa";
import FormHouse from './FormHouse';
import FormRooms from "./FormRooms";
import FormContact from "./FormContact"


const Form = () => {

   const [selectForm, setSelectForm] = useState("Domek")

   const nav = [
      {
         label: "Domek",
         icon: <FaHome />
      },
      {
         label: "Pokoje",
         icon: <FaBed />
      },
      {
         label: "Kontakt",
         icon: <FaEnvelope />
      },
   ]

   return (
      <div
         className='h-full w-full flex flex-col'
      >
         <div className='flex gap-[1px]'>
            {nav.map((el, index) => (
               <div 
                  onClick={() => setSelectForm(el.label)}
                  key={index}
                  className={selectForm !== el.label 
                     ? 'flex gap-2 items-center bg-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.35)] lg:px-5 px-4 lg:py-4 py-3 text-white font-semibold text-sm lg:text-lg cursor-pointer'
                     : 'flex gap-2 items-center bg-white text-gray-700 lg:px-5 px-4 lg:py-4 py-3  font-semibold text-sm lg:text-lg cursor-pointer'}
               >
                  <p className='max-sm:hidden'>{el.icon}</p>
                  <p>{el.label}</p>
               </div>
            ))}
         </div>
         <div className='flex-1'>
            {selectForm === "Domek" && <FormHouse />}
            {selectForm === "Pokoje" && <FormRooms />}
            {selectForm === "Kontakt" && <FormContact />}
         </div>
      </div>
   )
}

export default Form