import React from 'react'
import HeaderSection from '../components/HeaderSection'
import bgRooms from '../images/pokoje.jpg'
import bgHouse from '../images/domek.jpg'
import bgMap from '../images/klinMap.png'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const Services = () => {
   return (
      <section id='oferta' className='w-full'>
         <HeaderSection label="Oferujemy"/>
         <div 
            className='w-full max-w-[1200px] mx-auto p-8 flex flex-col items-center md:flex-row gap-10'
         >

            {/* ---- CARD HOUSE ----  */}
            <div className='flex-1 max-w-[400px] shadow-xl md:h-[420px] flex flex-col transition-all duration-300 hover:scale-[1.02]'>
               <img 
                  className='w-full h-[150px] md:h-[200px] object-cover object-center'
                  src={bgHouse}/>
               <div className='p-4'>
                  <h4 className='text-gray-700 fontHeader uppercase text-3xl font-bold pb-4'>
                     Samodzielny domek
                  </h4>
                  <p className='text-gray-500 font-semibold'>
                     Dla miłośników prywatności udostępniamy samodzielny i komfortowy 4-6 osobowy, piętrowy domek z tarasem.
                  </p>
               </div>
               <div className='mt-auto flex justify-center items-center p-4 bg-gray-50'>
                  <Link
                     to='/domek'
                  >
                     <Button label="Zobacz"/>
                  </Link>
               </div>
            </div>

            {/* ---- CARD ROOMS ----  */}
            <div className='flex-1 max-w-[400px] shadow-xl md:h-[420px] flex flex-col transition-all duration-300 hover:scale-[1.02]'>
               <img
                  className='w-full h-[150px] md:h-[200px] object-cover object-center' 
                  src={bgRooms}/>
               <div className='p-4'>
                  <h4 className='text-gray-700 fontHeader uppercase text-3xl font-bold pb-4'>
                     Pokoje
                  </h4>
                  <p className='text-gray-500 font-semibold'>
                     W naszej ofercie udostępniamy dla Gości cztery pokoje dwuosobowe z własną łazienką, każdy z możliwością dwóch dostawek.
                  </p>
               </div>
               <div className='mt-auto flex justify-center items-center p-4 bg-gray-50'>
                  <Link
                     to='/pokoje'
                  >
                     <Button label="Zobacz"/>
                  </Link>
               </div>
            </div>

            {/* ---- CARD ROOMS ----  */}
            <div className='flex-1 max-w-[400px] shadow-xl md:h-[420px] flex flex-col transition-all duration-300 hover:scale-[1.02]'>
               <div className='w-full h-[200px] overflow-hidden'>
                  <img
                     className='w-full object-cover object-center scale-150' 
                     src={bgMap}/>
               </div>
               <div className='p-4'>
                  <h4 className='text-gray-700 fontHeader uppercase text-3xl font-bold pb-4'>
                     W najbliższej okolicy
                  </h4>
                  <p className='text-gray-500 font-semibold'>
                     W bliskiej okolicy Bieszczadzkiego Klinu znajdą ukojenie zarówno niesforne dusze, jak i spokojne anioły...
                  </p>
               </div>
               <div className='mt-auto flex justify-center items-center p-4 bg-gray-50'>
                  <Link
                     to='/okolica'
                  >
                     <Button label="Zobacz"/>
                  </Link>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Services