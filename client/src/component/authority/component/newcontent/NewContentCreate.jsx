import React from 'react'
import {BsPlusSquareDotted} from "react-icons/bs"

export default function NewContentCreate() {
  return (
    <>
        <div className='flex flex-col sm:flex-row  gap-5'>
            <div className='border-[1px] rounded-md flex flex-col items-center border-gray-300 w-full sm:w-[55vw] h-[86vh]'>
                <div className='w-[98%] active:scale-95 rounded-full mt-2 bg-slate-200'>
                    <input className='bg-transparent h-9 pl-3 w-full border-1 outline-none active:scale-100' type="text" name="title" placeholder='Title'/>
                </div>
                <div className='w-[98%] active:scale-95 rounded-full mt-2 bg-slate-200'>
                    <input className='bg-transparent h-9 pl-3 w-full outline-none' type="text" name="url" placeholder='URL'/>
                </div>
                <div className='w-full active:scale-95 flex justify-center items-center mt-2'>
                    <textarea placeholder='Content' className='h-[68vh] w-[98%] p-2 bg-slate-200 outline-primary' name="content" cols="30" rows="10"></textarea>
                </div>
            </div>

            {/* ---------------------right sidebar-------------------- */}
            <div>
                <div className='border-[1px] flex flex-col rounded-md items-center border-gray-300 w-full sm:w-[28vw] h-[86vh]'>
                    <div className='flex justify-between w-[90%] gap-2 mt-2'>
                        <button className='bg-gray-600 text-gray-100 active:scale-95 w-32 h-11 rounded-md'>Publish</button>
                        <button className='bg-primary text-white active:scale-95 w-32 h-11 rounded-md'>Draft</button>
                    </div>
                    <div className='w-full flex justify-center'>
                        <textarea placeholder='Description' className='bg-slate-200 rounded-md mt-5 w-[95%] p-2 outline-primary' name="Description" cols="5" rows="4"></textarea>
                    </div>
                    <div className='flex justify-between gap-2 mt-5 w-[95%]'>
                        <button className='bg-slate-300 text-black rounded-md active:scale-95 w-32 h-12'>Select Novel</button>
                        <button className='bg-slate-300 text-black rounded-md active:scale-95 w-32 h-12'>Last page: 98</button>
                    </div>

                    <div className='w-[95%] mt-3 h-[25%] flex gap-5'>
                        <div className='bg-gray-200 w-[80%] cursor-pointer active:scale-95 h-full flex items-center justify-center text-5xl'>
                            <BsPlusSquareDotted/>
                        </div>
                        <div className='flex flex-col w-full justify-between gap-4'>
                            <button className='bg-gray-200 h-[50%] active:scale-95'>Galery</button>
                            <button className='bg-gray-200 h-[50%] justify-center flex items-center'>Current page: <span className='text-2xl'>564</span></button>
                        </div>
                    </div>
                    <div className='mt-5 w-[95%]'>
                        <textarea className='w-[100%] bg-slate-200 outline-primary p-2' placeholder="tag1, tag2" name="tag" cols="20" rows="1"></textarea>
                    </div>
                    <div className='w-full mt-5 flex items-center justify-center'>
                        <button className="bg-gradient-to-r active:scale-95 from-purple-500 to-pink-500 h-10 text-xl text-white w-[95%]">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
