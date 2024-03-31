import React, { useState, useEffect } from 'react';
import HeaderPage from '../components/HeaderPage';
import img1 from "../images/train/6.jpg"
import Button from '../components/Button';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

import { regionList } from '../data';

const Region = () => {

   const [images, setImages] = useState([])
   const [selectImg, setSelectImg] = useState(0)

   useEffect(() => {
      window.scrollTo(0, 0)
   },[])

   const changeImg = (x) => {
      if(x === 1){
         if(selectImg >= images.length - 1) {
            setSelectImg(0)
         } else {
            setSelectImg(prev => prev + 1)
         }
      }
      
      if(x === -1){
         if(selectImg === 0) {
            setSelectImg(images.length - 1)
         } else {
            setSelectImg(prev => prev - 1)
         }
      }
   }

   return (
      <div>
         <HeaderPage 
            title="Atrakcje w okolicy"
            description="W bliskiej okolicy Bieszczadzkiego Klinu znajdą ukojenie zarówno niesforne dusze, </br> jak i spokojne anioły..."
            img={img1}/>

         <div className='max-w-[1200px] mx-auto w-full p-8 py-20 flex flex-col gap-10 md:gap-20'>

            {regionList.map((el, index) => (
               <div key={index} className='w-full h-[500px] md:h-[400px] flex justify-end relative'>
                  <img className='w-full md:w-[90%] h-full object-cover object-center' src={el.images[0]}/>
                  <div className='absolute bg-white w-[90%] md:w-[550px] md:h-[60%] left-[50%] md:left-0 max-md:-translate-x-[50%] bottom-4 md:top-[50%] md:-translate-y-[50%] border px-10 p-4 flex flex-col justify-center'>
                     <h2 className='py-4 text-lg sm:text-xl md:text-2xl font-bold text-slate-800'>{el.title}</h2>
                     <p className='pb-2 text-xs md:text-xl font-semibold text-slate-500'>{el.description1}</p>
                     <p className='pb-6 max-md:text-xs font-semibold text-slate-900'>{el.description2}</p>
                     <div className='flex justify-center'>
                        <Button onClick={() => setImages(el.images)} label="Zobacz"/>
                     </div>
                  </div>
               </div>
            ))}


         </div>

         {/* ---- MODAL ---  */}
         {images.length > 0 && (
            <div 
               onClick={() => {setImages([]), setSelectImg(0)}} 
               className='fixed top-0 left-0 w-screen h-screen bg-black/80 z-[999] justify-between items-center p-6 md:p-20 text-2xl md:text-5xl text-white flex'>
               <div onClick={(e) => {changeImg(-1), e.stopPropagation()}} className='w-[50px] flex justify-center cursor-pointer hover:text-gray-200'>
                  <FaArrowAltCircleLeft />
               </div>
               <div className='relative' onClick={(e) => e.stopPropagation()}>
                  <div onClick={() => {setImages([]), setSelectImg(0)}} className='absolute -top-4 -right-4 w-8 h-8 md:w-10 md:h-10 cursor-pointer flex justify-center items-center text-xl md:text-2xl text-white bg-black border-2 rounded-full'>
                     <FaXmark />
                  </div>
                  <img className='w-auto' src={images[selectImg]}/>
               </div>
               <div onClick={(e) => {changeImg(1), e.stopPropagation()}} className='w-[50px] flex justify-center cursor-pointer hover:text-gray-200'>
                  <FaArrowAltCircleRight />
               </div>
            </div>
         )}
         {/* ---- MODAL ---  */}

      </div>
   )
}

export default Region