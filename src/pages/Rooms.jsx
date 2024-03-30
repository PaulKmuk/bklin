import React, { useEffect, useState } from 'react'
import img from '../images/kompleks.jpg';
import ImageGallery from "react-image-gallery";
import HeaderPage from '../components/HeaderPage';
import FormContact from '../components/FormContact';
import { FaBed } from "react-icons/fa";
import { rooms } from '../data'

const Rooms = () => {

   const [selectRoom, setSelectRoom] = useState("Ryś")
   const [images, setImages] = useState([])

   const kon = rooms.images.kon.map(el => (
      {
         original: el,
         thumbnail: el,
      }
   ))
   const rys = rooms.images.rys.map(el => (
      {
         original: el,
         thumbnail: el,
      }
   ))
   const wilk = rooms.images.wilk.map(el => (
      {
         original: el,
         thumbnail: el,
      }
   ))
   const zbik = rooms.images.zbik.map(el => (
      {
         original: el,
         thumbnail: el,
      }
   ))

   useEffect(() => {
      selectRoom === "Ryś" && setImages(rys)
      selectRoom === "Wilk" && setImages(wilk)
      selectRoom === "Żbik" && setImages(zbik)
      selectRoom === "Koń" && setImages(kon)
   },[selectRoom])


   const roomsToSelect = [ "Ryś", "Wilk", "Koń", "Żbik" ]

   return (
      <div>

         <HeaderPage 
            img={img}
            title='Dostępne pokoje' 
            description='Pokoje dwuosobowe z łazienką (możliwość 2 dostawek)'/>

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
                     {rooms.options.map((el, index) => (
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
                     <h1 className='text-4xl font-semibold pb-8'>Pokoje do wynajęcia</h1>
                     <p className='text-xl font-medium'>W ofercia dla naszych Gości mamy do wynajęcia 4 pokoje, 2-4 osobowe z łazienką.</p>
                  </div>

                  <div className='flex gap-10'>
                     {roomsToSelect.map((el, index) => (
                        <div
                           onClick={() => setSelectRoom(el)}
                           key={index}
                           className={selectRoom === el 
                              ? 'text-xl uppercase cursor-pointer bg-gray-900 hover:bg-gray-700 text-white font-black py-3 px-5 border border-gray-900'
                              : 'text-xl uppercase cursor-pointer hover:bg-gray-700 text-gray-900 hover:text-white font-black py-3 px-5 border border-gray-900'}
                        >
                           {el}
                        </div>
                     ))}
                  </div>

                  <div className='bg-white shadow-md border rounded-md p-8'>
                     <div className='flex items-center text-slate-800'>
                        <div className='p-8'>
                           <FaBed className='text-4xl'/>
                        </div>
                        <label className='text-xl font-semibold px-4'>Pokój</label>
                        <p className='ml-auto px-8 text-wrap text-lg font-semibold underline'>{selectRoom}</p>
                     </div>
                     {rooms.info.map((el, index) => (
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

      </div>
   )
}

export default Rooms