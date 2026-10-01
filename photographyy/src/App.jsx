import React from 'react'
import Layout from './MainLayout/Layout'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Portfolio from './Pages/Portfolio'
import PreWedding from './Pages/PreWedding'
import Birthday from './Pages/Birthday'
import Anniversary from './Pages/Anniversary'
import Wedding from './Pages/Wedding'
import Travel from './Pages/Travel'


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
        path:'portfolio/birthday',
        element:<Birthday/>
      },

      {
        path:'portfolio/anniversary',
        element:<Anniversary/>
      },

      {
        path:'portfolio/wedding',
        element:<Wedding/>
      },
      
      {
        path:'portfolio/travel',
        element:<Travel/>
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
