import React from 'react'
import logo from "../images/logo-light.png"
import house from "../images/domek.jpg"
import rooms from "../images/pokoje.jpg"
import { useNavigate } from 'react-router-dom'
import { navLinks } from '../data';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookSquare } from "react-icons/fa";


const Footer = () => {

   const navigate = useNavigate()

   const array = [
      {
         icon: <FaMapMarkerAlt />,
         label: "Majdan 7, 38-607 Cisna"
      },
      {
         icon: <FaPhoneAlt />,
         label: "+48 730 148 000"
      },
      {
         icon: <FaEnvelope />,
         label: "info@bklin.pl"
      },
      {
         icon: <FaFacebookSquare />,
         label: "Facebook"
      },
   ]

   return (
      <div className='bg-gray-900'>
         <div className='w-full max-w-[1200px] mx-auto p-8 grid sm:grid-cols-2 md:grid-cols-4 text-slate-300'>

            <div className='py-10 px-6'>
               <img className='cursor-pointer hover:scale-105' src={logo}/>
               <h4 className='text-2xl font-semibold py-6'>Bieszczadzki Klin</h4>
               <p className='text-xs'>
                  Nasze obiekty są idealne dla miłośników spokoju i pięknych widoków zapewniając niezapomniane wakacje w sercu natury. Odkryj urok regionu, relaksując się w komfortowych warunkach.
               </p>
            </div>

            <div className='py-10'>
               <div className='flex w-full'>
                  <div className='p-2 md:p-4 w-[100px] min-w-[100px]'>
                     <img className='rounded-xl w-full' src={house}/>
                  </div>
                  <div className='flex-1 p-2'>
                     <h5 className='py-4 text-xl font-semibold'>Samodzielny domek</h5>
                     <p className='text-xs'>
                        Samodzielny i komfortowy 4-6 osobowy, piętrowy domek z tarasem.
                     </p>
                  </div>
               </div>
               <div className='flex w-full'>
                  <div className='p-2 md:p-4 w-[100px] min-w-[100px]'>
                     <img className='rounded-xl w-full' src={rooms}/>
                  </div>
                  <div className='flex-1 p-2'>
                     <h5 className='py-4 text-xl font-semibold'>Pokoje</h5>
                     <p className='text-xs'>
                        Cztery pokoje dwuosobowe z własną łazienką, każdy z możliwością dwóch dostawek.
                     </p>
                  </div>
               </div>
            </div>

            <div className='py-10 md:py-20 flex flex-col items-center gap-4'>
               {navLinks.map((el, index) => (
                  <a
                     onClick={(e) => {
                        e.preventDefault()
                        if(!el.path.includes("#")) {
                           navigate(el.path)
                        } else {
                           navigate("/")
                           setTimeout(() => {
                              const target = document.getElementById(el.label);
                              target && target.scrollIntoView({ behavior: 'smooth', block: 'start' })
                              console.log("settimeout");
                           },100)
                        } 
                     }}
                     // href={el.path}
                     key={index}
                     className='uppercase cursor-pointer hover:text-slate-500'
                  >
                     {el.label}
                  </a>
               ))}
            </div>

            <div className='py-10 md:py-20 flex flex-col max-md:items-center items-start gap-4'>
               {array.map((el, index) => (
                  <div
                     className='flex items-center gap-4'
                     key={index}
                  >
                     <p className='text-xl'>{el.icon}</p>
                     <a className='cursor-pointer'>{el.label}</a>
                  </div>
               ))}
            </div>
            
         </div>

         <div className='w-full max-w-[1200px] mx-auto p-8 text-slate-300 border-t-[1px] border-slate-700'>
            <p className='text-center text-sm mx-auto'>Copyright ©2024. All Rights Reserved. — Designed with love by <span className='italic font-semibold px-2 text-blue-700 text-center'>p.kmuk</span></p>
         </div>

      </div>
   )
}

export default Footer