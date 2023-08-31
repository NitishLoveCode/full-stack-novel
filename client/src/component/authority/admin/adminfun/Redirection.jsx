import React from 'react'

export default function Redirection() {
  return (
    <>
      <div className='flex w-full h-[86vh] gap-2'>
        <div className='w-[49%] border-2 border-gray-200'>
          <div className='bg-slate-200 m-2 flex items-center justify-center h-12 rounded-md'>
            <h3>URL redirector</h3>
          </div>
          <div className='flex justify-center'>
            <textarea className='w-full m-2 p-2 border-2 border-primary outline-primary' name="" id="" cols="3s0" placeholder='Pest url end with ,' rows="10"></textarea>
          </div>
        </div>
        <div className='w-[49%] border-2 border-gray-200'>
          <div className='bg-primary text-white active:scale-95 cursor-pointer m-2 flex items-center justify-center h-12 rounded-md'>
            <button>Click to Redirect</button>
          </div>
          <div className='bg-slate-200 mt-16 m-2 flex items-center justify-center h-12 rounded-t-md'>
            <button>New URL</button>
          </div>
          <div className='flex justify-center'>
            <textarea className='w-full m-2 p-2 border-2 border-primary outline-primary' name="" id="" cols="3s0" value={"Your new URL will be here."} rows="10"></textarea>
          </div>
        </div>
      </div>
    </>
  )
}
