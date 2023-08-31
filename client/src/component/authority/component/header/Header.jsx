import React from 'react'
import { useLocation } from 'react-router-dom'


export default function Header() {
  const location =useLocation()

  return (
    <>
        <div className='fixed w-full z-10'>
          <div className='flex justify-between ml-auto mr-auto sm:pl-5 sm:pr-5 pl-2 pr-2 pt-2 bg-gray-800 items-center text-white'>
              <div>
              <h2 className='text-xl sm:text-2xl  font-bold'>Dashboard</h2>
              </div>
              <div>
                  <p className='text-sm sm:text-xl'>Hi, {location.pathname.includes("/admin")? "Admin" : "Editor"}</p>
              </div>
              <div className='flex items-center gap-5'>
                  <div className='hidden sm:block'><p>Nitish kumar</p></div>
                  <div className='w-11 h-11 justify-center flex bg-slate-400 items-center rounded-full'>logo</div>
              </div>
          </div>
        </div>
    </>
  )
}
