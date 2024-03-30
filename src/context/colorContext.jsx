import { createContext, useState } from "react";

export const ColorContext = createContext();

export const ColorContextProvider = ({ children }) => {

   const [selectColor, setSelectColor] = useState({
      color: 'bg-yellow-500',
      text: 'text-yellow-500',
      hover: 'bg-yellow-100'
   })

   return (
      <ColorContext.Provider value={{ selectColor, setSelectColor }}>
         {children}
      </ColorContext.Provider>
   )
}