import React from 'react'
import {SiDiscogs} from "react-icons/si"
import {BiLibrary} from "react-icons/bi"
import { AiOutlineUser } from 'react-icons/ai'

export default function PhoneFooter() {
  return (
    <>
        <div className='fixed h-14 pl-3 pr-3 bottom-0 w-full bg-primary pt-2 rounded-tr-2xl rounded-tl-2xl text-white'>
            <div className='flex justify-between pr-2 pl-2'>
                <div className='flex flex-col items-center'>
                    <SiDiscogs/>
                    <span className='text-sm'>Discover</span>
                </div>
                <div className='flex flex-col items-center'>
                    <BiLibrary/>
                    <span className='text-sm'>Library</span>
                </div>
                <div className='flex flex-col items-center'>
                    <AiOutlineUser/>
                    <span className='text-sm'>Profile</span>
                </div>
            </div>
        </div>
    </>
  )
}
