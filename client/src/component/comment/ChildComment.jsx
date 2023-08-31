import React from 'react'
import {MdVerified} from "react-icons/md"
import {BsThreeDotsVertical} from "react-icons/bs"

export default function ChildComment() {
  return (
    <>
        <div className='text-gray-900 text-[16px] m-2 sm:m-5'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <div className='w-10 h-10 sm:w-12 sm:h-12  bg-fuchsia-400 rounded-full'></div>
                        <div><p className='text-sm'>Nitish kumar</p></div>
                    </div>
                    
                    <div className='text-sm'>1 hour ago</div>
                    <div className='text-xl'><MdVerified/></div>
                    <div><BsThreeDotsVertical/></div>
                </div>
                <div className='text-start leading-5 ml-5'>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ratione omnis molestias laudantium deleniti amet provident recusandae explicabo, debitis nostrum.</p>
                </div>
                <div className='flex items-center ml-6 m-2 gap-5'>
                    <div className='cursor-pointer bg-gray-300 w-14 h-7 items-center flex rounded-full pl-1'>😀 1</div>
                    <div className='cursor-pointer bg-gray-300 w-14 h-7 items-center flex rounded-full pl-1 '>👏 1</div>                            
                </div>
                <hr />
            </div>
    </>
  )
}
