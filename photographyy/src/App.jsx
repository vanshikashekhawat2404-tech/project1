import React from 'react'
import Layout from './MainLayout/Layout'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Portfolio from './Pages/Portfolio'
import PreWedding from './Pages/PreWedding'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        index:true,
        element:<Home/>
      },

      {
        path:'portfolio',
        element:<Portfolio/>

      },

       {
        path: 'portfolio/pre-wedding',
        element: <PreWedding />
      },

      {
        path:'about',
        element:<About/>
      },

      {
        path:'contact',
        element:<Contact/>
      }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
