import React from 'react'
import ReactDOM from 'react-dom/client'
import { MainAppProvider } from './context/MainAppProviver'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainAppProvider>
      <RouterProvider router={router}/>
    </MainAppProvider>
  </React.StrictMode>,
)
