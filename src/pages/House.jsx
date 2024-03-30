import React, { useEffect } from 'react'
import HeaderPage from '../components/HeaderPage';
import img from '../images/kompleks.jpg';
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
         <DetailsOffer images={images} data={house}/>
      </div>
   )
}

export default House