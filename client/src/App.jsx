import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './component/header/Navbar'
import Home from './component/home/Home'
import Novelinfo from './component/post/Novelinfo'
import ReadPage from './component/post/ReadPage'
import Controller from './component/header/Controller'
import Dashboard from './component/authority/editor/Dashboard'
import AdminDashboard from './component/authority/admin/AdminDashboard'

export default function App() {
  return (
    <>
      <BrowserRouter>
          <Controller/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/novel' element={<Novelinfo/>}/>
            <Route path='/novel/:pageUrl' element={<ReadPage/>}/>
            <Route path='/novel/editor/:featurs' element={<Dashboard/>}/>
            <Route path='/novel/admin/:featurs' element={<AdminDashboard/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}
