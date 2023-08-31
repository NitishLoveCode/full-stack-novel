import React from 'react'
import {BsCloudUploadFill} from "react-icons/bs"

export default function Image({upload}) {
    
    const imgData="https://cdn.joyreadings.com/novel_avatar_small_m/178d07f3750c7fc934cd599cc2e771a7.jpg"

  return (
    <>
        {
            upload==="uploadImg" ? 

            <>
            <label className='max-w-[15%] w-[15%] flex justify-center' htmlFor="imageUploadIn">
            <div className='max-w-[100%] w-[100%] items-center justify-center flex flex-col p-1 cursor-pointer hover:bg-primary active:scale-50 shadow-md'>
                <BsCloudUploadFill className='w-[50%] h-[50%]'/><p>Upload</p>
            </div>
            </label>
            <input className='hidden' type="file" name="image upload" id="imageUploadIn"/>
            </>:

            <>
            <div className='max-w-[15%] w-[15%] items-center justify-center flex p-1 cursor-pointer hover:bg-primary active:scale-50 shadow-md'>
            <img src={imgData} alt="this is image" />
            </div>
            </>
        }
    </>
  )
}
