import React from 'react'
import { useLocation } from 'react-router-dom'
import ForEditor from './ForEditor'
import ForAdmin from './ForAdmin'


export default function Leftside() {
    const location= useLocation()
    console.log(location.pathname)
  return (
    <>
        <div className='fixed'>
            <div className='w-[14vw] overflow-y-scroll sm:w-[14vw] h-[96vh] mt-12 pb-12 bg-gray-800'>
                {
                    location.pathname.includes("/editor/") ? <ForEditor/>:<ForAdmin/>
                }
            </div>
        </div>
    </>
  )
}
