import React, { useEffect, useState } from 'react'
import imgHeader from '../images/trails/4.jpg'
import HeaderPage from '../components/HeaderPage'
import { imagesGallery } from '../data'

const Gallery = () => {

   const galleryToSelect = ["Domek", "Koń", "Ryś", "Wilk", "Żbik", "Okolica"]
   const [selectGallery, setSellectGallery] = useState("Domek")
   const [imagesToShow, setImagesToShow] = useState([])

   useEffect(() => {
      window.scrollTo(0, 0)
   },[])

   useEffect(() => {
      const images = [];
      if(selectGallery === "Ryś") {
         for (let i = 0; i < imagesGallery.rooms.rys.length; i += 2) {
            images.push(imagesGallery.rooms.rys.slice(i, i + 2))
         }
      }
      if(selectGallery === "Wilk") {
         for (let i = 0; i < imagesGallery.rooms.wilk.length; i += 2) {
            images.push(imagesGallery.rooms.wilk.slice(i, i + 2))
         }
      }
      if(selectGallery === "Żbik") {
         for (let i = 0; i < imagesGallery.rooms.zbik.length; i += 2) {
            images.push(imagesGallery.rooms.zbik.slice(i, i + 2))
         }
      }
      if(selectGallery === "Koń") {
         for (let i = 0; i < imagesGallery.rooms.kon.length; i += 2) {
            images.push(imagesGallery.rooms.kon.slice(i, i + 2))
         }
      }
      if(selectGallery === "Okolica") {
         for (let i = 0; i < imagesGallery.region.length; i += 2) {
            images.push(imagesGallery.region.slice(i, i + 2))
         }
      }
      if(selectGallery === "Domek") {
         for (let i = 0; i < imagesGallery.house.length; i += 2) {
            images.push(imagesGallery.house.slice(i, i + 2))
         }
      }
      setImagesToShow(images)
   },[selectGallery])
   
   
   
   

   return (
      <div>
         <HeaderPage title='Galeria' description='Zobacz naszą galerię zdjęć!' img={imgHeader}/>

         

         <div className='max-w-[1200px] mx-auto p-4 md:p-8'>

            <div className='flex flex-wrap gap-2 md:gap-6 lg:gap-8 py-10 justify-center'>
               {galleryToSelect.map((el, index) => (
                  <div
                     onClick={() => setSellectGallery(el)}
                     key={index}
                     className={selectGallery === el 
                        ? 'lg:text-xl uppercase cursor-pointer bg-gray-900 hover:bg-gray-700 text-white font-black py-3 px-3 md:px-5 border border-gray-900'
                        : 'lg:text-xl uppercase cursor-pointer hover:bg-gray-700 text-gray-900 hover:text-white font-black py-3 px-3 md:px-5 border border-gray-900'}
                  >
                     {el}
                  </div>
               ))}
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

               {imagesToShow.map((group, index) => (
                  <div key={index} className='grid gap-4'>
                     {group.map((el, index) => (
                        <div
                           key={index}
                        >
                           <img className='h-full max-w-full object-cover object-center rounded-lg' src={el}/>
                        </div>
                     ))}
                  </div>
               ))}

               
            </div>

         </div>

      </div>
   )
}

export default Gallery