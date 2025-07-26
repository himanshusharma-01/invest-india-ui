import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import AboutUs from './components/AboutUs/AboutUs'
import Login from './components/Login/Login'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home />
      },
     
     
       {
        path: "about",
        element: <AboutUs />
      },
       {
        path: "login",
        element: <Login />
      },

    ]
  }
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router} />
   </StrictMode>,
)
