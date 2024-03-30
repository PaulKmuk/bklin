import React, { useRef } from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookSquare } from "react-icons/fa";
import HeaderSection from '../components/HeaderSection';
import Input from '../components/Input';
import Textarea from '../components/Textarea';
import Button from '../components/Button';

const Contact = () => {

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

   const contactRef = useRef(null)

   return (
      <div id='kontakt' ref={contactRef} className='w-full'>
         <HeaderSection label="Napisz do nas"/>
         <div className='w-full max-w-[1200px] mx-auto p-8 flex flex-col gap-5 md:gap-10 md:flex-row pb-20'>
            <div className='grid grid-cols-1 gap-2 md:flex-1'>
               {array.map((el, index) => (
                  <div
                     key={index}
                     className='border flex items-center text-lg gap-6 p-6 md:p-10'
                  >
                     <p
                        className='text-2xl text-gray-500'
                     >
                        {el.icon}
                     </p>
                     <a
                        className='font-semibold' 
                        href=""
                     >
                        {el.label}
                     </a>
                  </div>
               ))}
            </div>
            <div className='md:flex-1 flex flex-col gap-2'>
               <Input placeholder="Imie i Nazwisko *"/>
               <div className='flex gap-2'>
                  <Input placeholder="Adres E-mail *"/>
                  <Input placeholder="Numer telefonu *"/>
               </div>
               <Textarea placeholder="Wiadomość *"/>
               <div className='flex justify-center'>
                  <Button label="Wyślij"/>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Contact