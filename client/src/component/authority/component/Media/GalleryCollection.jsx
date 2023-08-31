import React from 'react'
import Image from './Image'

export default function GalleryCollection() {
  return (
   <>
    <div className='flex sm:w-[70%] gap-1 flex-col justify-between mt-[2vw]'>
                {/* -----------------------------top image container----------------------------- */}
                <div className='border-[0.1px] overflow-y-scroll shadow-md h-[50vh] border-gray-300'>
                    <div className='flex justify-between flex-wrap'>
                    {/* This frist component is for upload image don't num map on it-------- */}
                        <Image upload={"uploadImg"}/>
                        {/* -------------------------------- */}
                        <Image/>
                        <Image/>
                        <Image/>
                        <Image/>
                        <Image/>
                        <Image/>
                        <Image/>
                        <Image/>
                        <Image/>
                        <Image/>
                        <Image/>
                        <Image/>
                        <Image/>
                        <Image/>
                        <Image/>
                        <Image/>
                        <Image/>
                        <Image/>
                        <Image/>
                        <Image/>
                        <Image/>
                    </div>
                </div>
                {/* -------------------------bottom image info--------------- */}
                <div className='flex justify-between'>
                    <div className='h-[24vh] flex flex-col justify-center items-center w-[49%] border-[0.1px] bg-gradient-to-r from-purple-300 to-blue-200 border-gray-300'>
                        <p className='sm:text-xl'>Alert</p>
                        <p className='text-2xl sm:text-[35px] text-gray-100'>20 Images</p>
                        <p className='sm:text-xl'>has not Alt text</p>

                    </div>
                    <div className='h-[24vh] flex flex-col justify-center items-center w-[49%] border-[0.1px] bg-gradient-to-r from-blue-300 to-green-200 shadow-lg border-gray-300'>
                        <p className='text-xl'>Total</p>
                        <p className='text-[40px] text-gray-50'>20</p>
                        <p className='text-xl'>Images</p>
                    </div>
                </div>
            </div>
   </>
  )
}
