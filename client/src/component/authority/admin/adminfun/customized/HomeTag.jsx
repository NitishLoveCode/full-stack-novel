import React from 'react'
import Hometag from '../../../../tag/Hometag'

export default function HomeTag() {
  return (
    <>
        <div className="bg-gray-200 h-44 rounded-lg gap-2 p-2 flex flex-col sm:w-[400px]">
          <div className='flex gap-3'>
            <input className='w-[70%]  outline-primary p-2' placeholder='Add tag here' type="text" name="" id="" />
            <button className='bg-primary text-white text-xl active:scale-90 w-[25%]'>Add</button>
          </div>
          <div className='flex flex-wrap overflow-y-scroll gap-2'>
            <p className='border-2 border-primary p-1 rounded-full'>Best noval</p>
            <p className='border-2 border-primary p-1 rounded-full'>Billionaire</p>
            <p className='border-2 border-primary p-1 rounded-full'>Forbidden</p>
            <p className='border-2 border-primary p-1 rounded-full'>Werewolf</p>
            <p className='border-2 border-primary p-1 rounded-full'>Best noval</p>
            <p className='border-2 border-primary p-1 rounded-full'>Billionaire</p>
            <p className='border-2 border-primary p-1 rounded-full'>Forbidden</p>
            <p className='border-2 border-primary p-1 rounded-full'>Werewolf</p>
            <p className='border-2 border-primary p-1 rounded-full'>Best noval</p>
            <p className='border-2 border-primary p-1 rounded-full'>Billionaire</p>
            <p className='border-2 border-primary p-1 rounded-full'>Forbidden</p>
            <p className='border-2 border-primary p-1 rounded-full'>Werewolf</p>
            
          </div>
        </div>
    </>
  )
}
