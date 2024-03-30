import React, { useEffect } from 'react'

const Gallery = () => {

   useEffect(() => {
      window.scrollTo(0, 0)
   },[])

   return (
      <div>Gallery</div>
   )
}

export default Gallery