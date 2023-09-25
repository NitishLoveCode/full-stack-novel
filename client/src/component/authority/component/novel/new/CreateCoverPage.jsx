import React from 'react'
import {BsPlusSquareDotted} from "react-icons/bs"

export default function CreateCoverPage() {
  return (
    <>
        <div className='flex flex-col p-4 gap-4 overflow-hidden bg-gray-200 border-[1px] border-gray-400 overflow-y-scroll 
            m-10 rounded-xl w-[50vw] h-[60vh]'>
        <div>
            <input className='h-9 p-2 outline-primary rounded-md w-[45vw]' type="text" name="search" placeholder='Novel Title'/>
        </div>
        <div>
            <textarea name="description"  className='outline-primary w-[45vw] p-2' placeholder='Description'></textarea>
        </div>
        <div className='flex gap-2'>
            <label className='bg-white active:scale-95 h-36 rounded-md flex items-center justify-center w-[25%]'htmlFor="create_new_Cover_Page">
                <input className='hidden' type="file" name="image" id="create_new_Cover_Page" />
                <BsPlusSquareDotted className="text-4xl"/>
            </label>
            <div>
                <input className='w-[33vw] h-8 rounded-md pl-2' placeholder='Author' type="text" name="" id="" />
            </div>
        </div>
        <div>
            <button className='w-full bg-primary h-10 text-xl text-white mt-5 rounded-md active:scale-95'>Create new</button>
        </div>
    </div>

    </>
  )
}
