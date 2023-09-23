import React from 'react'

export default function NewNovelPage() {
  return (
    <>
    <div className='flex'>
        <div className='w-[60vw]'>
            <div className='border-[1px] overflow-hidden border-gray-600 h-10 rounded-md flex items-center'>
                <input className='w-full h-full pl-2 outline-primary' type="text" name="title" placeholder='Title'/>
            </div>
            <div className='mt-2 border-[1px] overflow-hidden border-gray-600 h-10 rounded-md flex items-center'>
                <input className='w-full h-full pl-2 outline-primary' type="text" name="url" placeholder='URL'/>
            </div>
            <div className='border-[1px] border-gray-600 rounded-md overflow-hidden mt-4 h-[70vh]'>
                <textarea className='w-full h-full p-2 outline-primary' name="content" placeholder='Content'></textarea>
            </div>
        </div>


        <div className='w-[30vw] ml-4'>
            <div className='flex items-center justify-between'>
                <button className='bg-primary p-3 rounded-md text-white px-14'>Save Draft</button>
                <button className='bg-primary p-3 rounded-md text-white px-14'>Publish</button>
            </div>

        </div>
    </div>
    </>
  )
}
