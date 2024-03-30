import React from 'react'
import image from '../images/kompleks.jpg'
import Input from './Input'
import Textarea from './Textarea'
import Button from './Button'

const FormContact = () => {
   return (
      <div className='w-full h-full bg-white flex flex-col'>
         <div className='p-4'>
            <img src={image} className='w-full max-h-[160px] object-cover object-center'/>
         </div>
         <div className='px-8 text-gray-700 flex flex-col gap-6 flex-1'>
            <h2 className='text-xl font-semibold flex gap-5'>
               Masz pytania? Napisz do nas
            </h2>
            <Input 
               onChange={() => {}}
               placeholder="Imię i Nazwisko *"/>
            <Input 
               onChange={() => {}}
               placeholder="E-mail*"/>
            <Input 
               onChange={() => {}}
               placeholder="Telefon*"/>
            <Textarea 
               placeholder='Wiadomość'/>
         </div>
         <div className='flex justify-center p-6'>
            <Button label="Wyślij"/>
         </div>
      </div>
   )
}

export default FormContact