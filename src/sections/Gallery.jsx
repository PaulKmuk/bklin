import React, { useState } from 'react'
import HeaderSection from '../components/HeaderSection'

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

import img1 from "../images/gallery/gallery1.jpg";
import img2 from "../images/gallery/gallery2.jpg";
import img3 from "../images/gallery/gallery3.jpg";
import img4 from "../images/gallery/gallery4.jpg";
import img5 from "../images/gallery/gallery5.jpg";
import img6 from "../images/gallery/gallery6.jpg";
import img7 from "../images/gallery/gallery7.jpg";
import img8 from "../images/gallery/gallery8.jpg";
import img9 from "../images/gallery/gallery9.jpg";
import img10 from "../images/gallery/gallery10.jpg";
import Button from '../components/Button';

const Gallery = () => {

   const [showImg, setShowImg] = useState(-1)
   const images = [ img1, img2, img3, img4, img5, img6, img7, img8, img9, img10 ]

   const changeImg = (x) => {

      if(x === 1) {
         if(showImg === images.length -1)
            setShowImg(0)
         else
            setShowImg(prev => prev + 1)
      } else if (x === -1) {
         if(showImg === 0)
            setShowImg(images.length - 1)
         else
            setShowImg(prev => prev - 1)
      }
   }




   return (
      <div className='w-full relative'>
         <HeaderSection label="Galeria zdjęć"/>
         <div className='flex flex-col gap-2 md:gap-4 p-8 max-w-[1200px] mx-auto'>

            <div className='flex-1 flex flex-col md:flex-row gap-2 md:gap-4'>
               <div className='flex-1 grid grid-cols-2 gap-2 md:gap-4'>
                  <img className='cursor-pointer hover:scale-105 transition-all duration-300' onClick={() => setShowImg(0)} src={img1}/>
                  <img className='cursor-pointer hover:scale-105 transition-all duration-300' onClick={() => setShowImg(1)} src={img2}/>
                  <img className='cursor-pointer hover:scale-105 transition-all duration-300' onClick={() => setShowImg(2)} src={img3}/>
                  <img className='cursor-pointer hover:scale-105 transition-all duration-300' onClick={() => setShowImg(3)} src={img4}/>
               </div>
               <div className='flex-1'>
                  <img className='h-full object-cover object-center cursor-pointer hover:scale-[1.02] transition-all duration-300' onClick={() => setShowImg(6)} src={img7}/>
               </div>
            </div>
            
            <div className='flex-1 flex flex-col md:flex-row gap-2 md:gap-4'>
               <div className='flex-1 w-full gap-2 md:gap-4 flex'>
                  <div className='flex-1 cursor-pointer hover:scale-[1.04] transition-all duration-300'>
                     <img className='w-full h-full object-cover object-center' onClick={() => setShowImg(4)} src={img5}/>
                  </div>
                  <div className='flex-1 cursor-pointer hover:scale-[1.04] transition-all duration-300'>
                     <img className='w-full h-full object-cover object-center' onClick={() => setShowImg(5)} src={img6}/>
                  </div>
               </div>
               <div className='flex-1 grid grid-cols-2 gap-2 md:gap-4'>
                  <img className='cursor-pointer hover:scale-105 transition-all duration-300' onClick={() => setShowImg(8)} src={img9}/>
                  <img className='cursor-pointer hover:scale-105 transition-all duration-300' onClick={() => setShowImg(9)} src={img10}/>
                  <img className='cursor-pointer hover:scale-105 transition-all duration-300' onClick={() => setShowImg(7)} src={img8}/>
                  <div className='border flex justify-center items-center p-4'>
                     <Button label="pełna galeria"/>
                  </div>
               </div>
            </div>

         </div>

         {/* ---- MODAL IMG ----  */}

         {showImg >= 0 && (
            <div onClick={() => setShowImg(-1)} className='fixed top-0 left-0 w-screen h-screen bg-black/80 z-[999] justify-between items-center p-6 md:p-20 text-2xl md:text-5xl text-white flex'>
               <div onClick={(e) => {changeImg(-1), e.stopPropagation()}} className='w-[50px] flex justify-center cursor-pointer hover:text-gray-200'>
                  <FaArrowAltCircleLeft />
               </div>
               <div className='relative' onClick={(e) => e.stopPropagation()}>
                  <div onClick={() => setShowImg(-1)} className='absolute -top-4 -right-4 w-8 h-8 md:w-10 md:h-10 cursor-pointer flex justify-center items-center text-xl md:text-2xl text-white bg-black border-2 rounded-full'>
                     <FaXmark />
                  </div>
                  <img className='w-auto' src={images[showImg]}/>
               </div>
               <div onClick={(e) => {changeImg(1), e.stopPropagation()}} className='w-[50px] flex justify-center cursor-pointer hover:text-gray-200'>
                  <FaArrowAltCircleRight />
               </div>
            </div>
         )}

      </div>
   )
}

export default Gallery