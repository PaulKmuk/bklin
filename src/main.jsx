import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ColorContextProvider } from './context/colorContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColorContextProvider>
      <App />
    </ColorContextProvider>
  </React.StrictMode>,
)
