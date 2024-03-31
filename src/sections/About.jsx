import React from 'react'
import img1 from '../images/about/img1.jpg';
import img2 from '../images/about/img2.jpg';
import img3 from '../images/about/img3.jpg';
import img4 from '../images/about/img4.jpg';

const About = () => {

   const images = [img1, img2, img3, img4]

   return (
      <div id='o-nas' className='w-full'>
         <div className='relative w-full max-w-[1200px] mx-auto py-20 p-8 grid grid-cols-2 gap-2 md:gap-4'>
            {images.map((el, index) => (
               <img 
                  className='w-full max-md:h-[280px] object-cover object-center'
                  key={index}
                  src={el}
               />
            ))}
            <div className='absolute w-full h-full top-0 left-0 flex justify-center items-center p-12 '>
               <div className='bg-white/90 w-[500px] flex flex-col gap-6 p-6 md:gap-8 md:p-8'>
                  <h1 className='text-xl max-md:text-center uppercase font-extrabold md:text-center'>
                     O nas
                  </h1>
                  <p className='text-xs md:text-base font-semibold tracking-wider md:indent-10'>
                     Bieszczadzki Klin powstał dla wszystkich poszukujących wytchnienia i spokoju wśród bieszczadzkiej natury. To miejsce niezwykle ciepłe, rodzinne, ciche i spokojne. Specjalnie dla naszych Gości komfortowo wyposażyliśmy wnętrza, udostępniliśmy sieć Wi-Fi, a także stworzyliśmy szereg dodatkowych atrakcji.
                  </p>
                  <p className='text-xs md:text-base font-semibold tracking-wider md:indent-10'>
                     Bieszczadzki Klin to także przyjazna okolica i doskonałe miejsce wypadowe zarówno dla pasjonatów górskich wycieczek, grzybiarzy, miłośników sportów narciarskichi, rowerowych, a także poszukiwaczy licznych przygód...
                  </p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default About






