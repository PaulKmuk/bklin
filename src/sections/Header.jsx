import React from 'react'
import 'react-slideshow-image/dist/styles.css';
import Button from '../components/Button';
import Form from '../components/Form';

const Header = () => {

   return (
      <div id='#' className=' md:h-screen w-full min-h-[700px]'>
         <div className='header-slider relative z-0 bg-fixed'>
            <div className='z-10 w-full h-full bg-[rgb(0,0,0)]/[0.5]'>
               <div className='flex z-20 top-0 w-full h-full'>
                  <div className='w-full max-w-[1200px] mx-auto md:flex overflow-x-hidden'>
                     <div className='flex-1 flex flex-col text-white justify-center max-sm:h-screen pt-[100px] p-8'>
                        <h4 className='uppercase text-sm md:text-xl tracking-wide font-semibold'>Zarezerwuj czas dla siebie i rodziny!</h4>
                        <h1 className='py-[10px] lg:py-[20px] uppercase text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-wid'>Bieszczadzki Klin</h1>
                        <h5 className='text-sm md:text-xl tracking-wider'>Znajdziesz u nas ofertę dopasowane do Twoich potrzeb i preferencji. Samodzielny domek 4-6 osobowy oraz cztery pokoje 2-4 osobowe.</h5>
                        <div className='py-10'>
                           <a
                              href='#oferta'
                           >
                              <Button 
                                 label='zobacz ofertę'
                                 onChange={() => {}}
                              />
                           </a>
                        </div>
                     </div>
                     <div className='flex-1 flex justify-end items-center p-8 slide-in-right '>
                        <div className='w-full md:max-w-[450px] md:h-[550px] '>
                           <Form />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Header