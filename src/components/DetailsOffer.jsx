import React from 'react';
import ImageGallery from "react-image-gallery";
import FormContact from './FormContact';



const DetailsOffer = ({ data, images }) => {
   return (
      <div className=''>
         <div className='w-full max-w-[1200px] mx-auto p-8 flex gap-10 py-20'>

            <div className='flex-[3] flex flex-col gap-10 overflow-hidden'>
               <div className=''>
                  <div>
                     <ImageGallery
                        showPlayButton={false}
                        items={images}/>
                  </div>
               </div>
               <div className='w-full bg-gray-100 p-8 grid grid-cols-3 gap-4 rounded-md'>
                  {data.options.map((el, index) => (
                     <div
                        className='bg-white text-slate-800 rounded-md border border-slate-400 flex flex-col items-center px-6 p-2'
                        key={index}
                     >
                        <div className='py-2'>
                           <el.icon className='text-4xl'/>
                        </div>
                        <h5 className='py-2 text-xl font-semibold text-center'>{el.label}</h5>
                        <p className='text-center text-sm'>{el.description}</p>
                     </div>
                  ))}
               </div>
            </div>

            <div className='flex-[2] flex flex-col gap-10'>

               <div className=' py-4'>
                  <h1 className='text-4xl font-semibold pb-8'>Samodzielny domek</h1>
                  <p className='text-xl font-medium'>Dla miłośników prywatności udostępniamy samodzielny i komfortowy 4-6 osobowy, piętrowy domek z tarasem.</p>
               </div>

               <div className='bg-white shadow-md border rounded-md p-8'>
                  {data.info.map((el, index) => (
                     <div key={index} className='flex items-center text-slate-800'>
                        <div className='p-8'>
                           <el.icon className='text-4xl'/>
                        </div>
                        <label className='text-xl font-semibold px-4'>{el.label}</label>
                        <p className='ml-auto px-8 text-wrap text-lg font-semibold underline'>{el.value}</p>
                     </div>
                  ))}
               </div>

               <FormContact />

            </div>

         </div>
      </div>
   )
}

export default DetailsOffer