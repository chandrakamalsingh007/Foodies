import React from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import Navbar from './Components/Navbar/Navbar'
import {Route, Routes} from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'
import { ToastContainer } from "react-toastify";
import Home from './pages/Home/Home'

const App = () => {

  const url ="https://foodies-backend-d9sc.onrender.com";

  return (
    <div>
      <ToastContainer/>
        <Navbar/>
        <hr />
        <div className="app-content">
          <Sidebar/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/add' element={<Add url={url}/>}/>
              <Route path='/list' element={<List url={url}/>}/>
              <Route path='/orders' element={<Orders url={url}/>}/>
          </Routes>
      </div>
    </div>
  )
}

export default App