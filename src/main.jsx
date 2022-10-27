import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { TourProvider } from '@reactour/tour'
import Steps from './Steps'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <TourProvider steps={Steps}>

    <App />
     </TourProvider>
  </React.StrictMode>
)
