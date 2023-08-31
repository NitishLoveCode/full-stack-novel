import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'

export default function Controller() {
    const pageUrl = useLocation()
    
  return (
    <>
        {pageUrl.pathname.includes("/novel/")? "" : <Navbar/>}
    </>
  )
}
