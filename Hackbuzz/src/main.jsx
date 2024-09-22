import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Farmer from './pages/Farmer.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
const router =createBrowserRouter([
  {
    path:'/',
    element: <Login/> 
  },
  {
    path:'register',
    element: <Register/> 
  },
  {
    path:'home',
    element: <Home/> 
  },
  {
    path:'farmer',
    element: <Farmer/> 
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)

