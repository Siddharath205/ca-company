import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header.jsx'
import React from 'react'
import Home from './Component/Home.jsx'
import ServiceDetail from './Component/ServiceDetail.jsx'
import Applayout from './Component/AppLayout.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Resources from './Component/Resources.jsx'
import Company from './Component/Company.jsx'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Applayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/ServiceDetail',
          element: <ServiceDetail />
        },
        {
          path: '/Resources',
          element: <Resources />
        },
        {
          path: '/Company',
          element: <Company />
        }           
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
      {/* <Header />
      { <Home /> }
      <ServiceDetail /> */}
    </>
  )
}

export default App

