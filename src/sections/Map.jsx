import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'


const Map = () => {

   const position = [49.20302180450416, 22.3059355663376]

   return (
      <div className='h-[200px] md:h-[400px] overflow-hidden'>
         <div className='h-full w-full overflow-hidden z-0'>
            <MapContainer center={position} zoom={14} scrollWheelZoom={false} style={{ height: "100%", width: "100%", zIndex: 0 }}>
               <TileLayer
               attribution={'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}
               url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
               />
               <Marker position={position}>
                  <Popup>
                        Majdan 7 <br/>
                  </Popup>
               </Marker>
            </MapContainer>
         </div>
      </div>
   )
}

export default Map