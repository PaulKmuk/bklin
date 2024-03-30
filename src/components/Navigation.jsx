import React, { useEffect, useState, useContext } from 'react'
import logo from '../images/logo-light.png'
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { navLinks, colors } from '../data';
import { ColorContext } from '../context/colorContext';

const Navigation = () => {


   const [showMenu, setShowMenu] = useState(false)
   const [positionY, setPositionY] = useState(0)
   const { selectColor, setSelectColor } = useContext(ColorContext)

   useEffect(() => {
      window.addEventListener('scroll', () => setPositionY(window.scrollY))
      return () => {
         window.removeEventListener('scroll', () => setPositionY(window.scrollY));
      }
   },[positionY])


   return (
      <nav 
         className={
            showMenu 
               ? 'fixed w-full h-20 top-0 z-50 bg-[rgba(0,0,0,.95)] transition-all duration-700 text-white'
               : positionY < 50 
                  ? 'fixed w-full h-20 top-0 z-50 text-white transition-all duration-700'
                  : 'fixed w-full h-20 top-0 z-50 bg-[rgba(0,0,0,.7)] transition-all duration-700 text-white' 
         }
      >
         <div className='flex justify-between items-center h-full max-w-[1200px] mx-auto px-8'>
            <a
               href='/#'
            >
               <img src={logo}/>
            </a>
            <div className='gap-10 hidden md:flex'>
               {navLinks.map((el, index) => (
                  <a 
                     key={index}
                     href={el.path}
                     className={`text-base uppercase tracking-wider font-semibold hover:text-slate-400 transition-all duration-300 p-1`}
                  >
                     {el.label}
                  </a>
               ))}

               {/* ---- CHOICE COLOR ---- */}

               <a 
                  className={`relative group text-base uppercase tracking-wider font-semibold hover:${selectColor.color} transition-all duration-300 flex items-center gap-2 cursor-pointer ${selectColor.color} rounded-sm px-3 py-1`}
               >
                  kolor
                  <IoMdArrowDropdown />
                  <div className='absolute hidden group-hover:flex top-[100%] right-[0] bg-white w-[250px] border border-gray-400 text-gray-700 p-6 flex-col gap-6'>
                     <h4 className='text-lg font-bold text-center'>Wybierz kolor</h4>
                     <div className='grid grid-cols-3 gap-6'>
                        {colors.map((el, index) => (
                           <div
                              key={index}
                              className='flex justify-center'
                              onClick={() => setSelectColor(el)}
                           >
                              <div 
                                 className={`${el.color} h-12 w-12 w rounded-full border-4 border-transparent hover:border-gray-400 flex justify-center items-center text-white text-2xl`}
                              >
                                 {selectColor.color === el.color 
                                    ? <FaCheck /> 
                                    : <p>{el.number}</p>}
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </a>

               {/* ---- ------------ ----  */}

            </div>
            <div className='text-4xl md:hidden'>
               {showMenu 
                  ? <FaXmark onClick={() => setShowMenu(false)}/>
                  : <MdMenu onClick={() => setShowMenu(true)}/>}
            </div>
         </div>

         {/* ---- MENU SMALL DEVICES ---- */}

         <div className={`absolute md:hidden top-20 ${showMenu ? 'translate-x-[0%]' : 'translate-x-[100%]'} transition-all duration-500  w-full h-screen bg-[rgba(0,0,0,.95)] p-10 flex flex-col items-end  gap-8`}>
            {navLinks.map((el, index) => (
               <a
                  key={index}
                  onClick={() => setShowMenu(false)}
                  href={el.path}
                  className='text-gray-300 text-2xl font-semibold uppercase tracking-wider'
               >
                  {el.label}
               </a>
            ))}
         </div>

      </nav>
   )
}

export default Navigation