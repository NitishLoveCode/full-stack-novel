import React from 'react'

export default function Ediorprofile() {
  return (
    <>
      <div className='flex mt-10 items-center justify-center'>
        <div className='flex w-[40vw] h-[40vh] gap-4 p-10 bg-gradient-to-r from-purple-300 to-pink-200 rounded-md'>
          <div className='w-32 h-32'>
            <img src="https://www.dgvaishnavcollege.edu.in/dgvaishnav-c/uploads/2021/01/dummy-profile-pic-300x300.jpg.webp" alt="fsdfas" />
          </div>
          <div>
            <h3><span className='text-gray-500'>Name: </span> Nitish kumar</h3>
            <h3><span className='text-gray-500'>Gmail: </span> xyz@gmail.com</h3>
            <h3><span className='text-gray-500'>Joined: </span> 27-08-2023</h3>
            <h3><span className='text-gray-500'>Contrubution: </span> 90 Novels</h3>
            <h3><span className='text-gray-500'>Contrubution: </span> 329 images</h3>
          </div>
        </div>
      </div>
    </>
  )
}
