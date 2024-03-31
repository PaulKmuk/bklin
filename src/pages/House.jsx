import React, { useEffect } from 'react'
import HeaderPage from '../components/HeaderPage';
import img from '../images/kompleks.jpg';
import ImageGallery from "react-image-gallery";
import FormContact from '../components/FormContact';
import DetailsOffer from '../components/DetailsOffer';
import { house } from '../data';

const House = () => {

   useEffect(() => {
      window.scrollTo(0, 0)
   },[])

   const images = house.images.map(el => (
      {
         original: el,
         thumbnail: el,
      }
   ))

   return (
      <div>
         <HeaderPage 
            img={img}
            title='Samodzielny domek' 
            description='Dla miłośników prywatności udostępniamy samodzielny i komfortowy 4-6 osobowy, </br>piętrowy domek z tarasem.'/>

         <div className=''>
            <div className='w-full max-w-[1200px] mx-auto p-4 md:p-8 flex flex-col-reverse md:flex-row gap-10 py-20'>

               <div className='md:hidden'>
                     <FormContact/>
               </div>

               <div className='flex-[3] flex flex-col gap-10 overflow-hidden'>
                  <div className=''>
                     <div>
                        <ImageGallery
                           showPlayButton={false}
                           items={images}/>
                     </div>
                  </div>
                  <div className='w-full bg-gray-100 p-2 md:p-8 grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 rounded-md'>
                     {house.options.map((el, index) => (
                        <div
                           className='bg-white text-slate-800 rounded-md border border-slate-400 flex flex-col items-center px-2 md:px-6 p-2'
                           key={index}
                        >
                           <div className='py-2'>
                              <el.icon className='text-xl md:text-2xl lg:text-4xl'/>
                           </div>
                           <h5 className='py-2 text-xs md:text-base lg:text-xl font-semibold text-center'>{el.label}</h5>
                           <p className='text-center text-sm'>{el.description}</p>
                        </div>
                     ))}
                  </div>
               </div>

               <div className='flex-[2] flex flex-col gap-10'>

                  <div className='md:py-4'>
                     <h1 className='text-2xl lg:text-4xl font-semibold pb-4 md:pb-8'>Samodzielny domek</h1>
                     <p className=' md:text-xl font-medium'>Dla miłośników prywatności udostępniamy samodzielny i komfortowy 4-6 osobowy, piętrowy domek z tarasem.</p>
                  </div>

                  <div className='bg-white shadow-md border rounded-md p-2 md:p-4 lg:p-8'>
                     {house.info.map((el, index) => (
                        <div key={index} className='flex items-center text-slate-800'>
                           <div className='p-2 md:p-4 lg:p-8'>
                              <el.icon className='text-2xl md:text-4xl'/>
                           </div>
                           <label className='text-base md:text-lg lg:text-xl font-semibold px-4'>{el.label}</label>
                           <p className='ml-auto sm:px-8 text-wrap text-sm md:text-base lg:text-lg font-semibold underline'>{el.value}</p>
                        </div>
                     ))}
                  </div>

                  <div className='max-md:hidden'>
                     <FormContact/>
                  </div>

               </div>



            </div>
         </div>

      </div>
   )
}

export default House