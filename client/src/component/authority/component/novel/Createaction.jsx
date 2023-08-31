import React from 'react'

export default function Createaction({bg_img,actionName,new_novel}) {
    console.log(bg_img, actionName,new_novel)
    
  return (
    <>
        <div className={` shadow-xl ${new_novel!=="new create" ? "bg-gradient-to-r from-sky-600 to-indigo-300":"bg-gradient-to-r from-violet-600 to-fuchsia-300 "} gap-3 border-[1.5px] border-gray-300 sm:gap-2 w-70 sm:w-75 flex overflow-hidden rounded-md p-2`}>
                <div className='bg-gradient-to-r from-sky-500 to-indigo-500 rounded-mdchr w-[120px] h-[160px] flex items-center justify-center text-2xl text-center'>
                  {
                    new_novel=="new create" ? <h1 className='text-white'>Create Novel</h1> : <img className='h-40' src={`${bg_img}`} alt="img" />
                  }
                </div>
                <div>
                  {
                    new_novel=="new create" ? <h2 className='text-md sm:text-xl text-gray-100'>Click to Create new Novel</h2> : <h2 className='text-md sm:text-xl text-gray-100'>The Princess to Elight</h2>
                  }
                  {
                    new_novel=="new create" ? <p className='text-gray-200 text-sm'>Created at: XX-XX-XXXX</p> : <p className='text-gray-200 text-sm'>Created at: 25-08-2023</p>
                  }
                  {/* <h2 className='text-md sm:text-xl text-gray-100'>The Princess to Eight</h2> */}
                  
                  <button className={`${new_novel!=="new create" ? "bg-black active:bg-slate-500":"bg-green-600 active:bg-green-400"} mt-5 sm:mt-4  p-1 sm:p-1 text-sm sm:text-[17px] text-white rounded-md`}>{actionName}</button>
                </div>
        </div>
    </>
  )
}
