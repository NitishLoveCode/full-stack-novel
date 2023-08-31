import React from 'react'
import GalleryCollection from './GalleryCollection'
import { BsCloudUploadFill } from 'react-icons/bs'

export default function Gallery() {
  return (
    <>
        <div className='flex flex-col sm:flex-row justify-between'>
        {/* -------------right side imageCollections-- reuseable in post and page--------- */}
            <GalleryCollection/>

            {/* ----------------right upload image-------------- */}
            <div className='right-0 flex sm:w-[29%] gap-1 flex-col justify-between mt-[2vw]'>
                <div className='border-[0.2px] h-[74.5vh] border-gray-300'>
                    <div className="flex gap-4 flex-col items-center mt-2">
                        <label className='w-[100%] flex items-center justify-center' htmlFor="imgUpload">
                        <div className='w-[80%] h-40 active:scale-90 cursor-pointer bg-slate-200 justify-center rounded-lg flex items-center'>
                            <BsCloudUploadFill className='w-14 h-14'/>
                        </div>
                        </label>
                        {/* ------------------------------this field for every onePoint------------------- */}
                        <input className='hidden' type="file" name="" id="imgUpload" /> 
                        <div className='w-[80%] flex flex-col gap-2 justify-center'>
                {/*----------------------------------- use here image title slice to resuce image name size--------- */}
                            <p>Image name: <span className='text-gray-500'>The princess xyzfdsafadsfasdfasd</span></p>
                            <p>size: <span className='text-gray-500'>20kb</span></p>
                            <p>Formet: <span className='text-gray-500'>.png</span></p>
                        </div>
                        <div className='w-[80%] flex flex-col gap-2'>
                            <input className='border-[0.1px] border-gray-300 h-10 pl-2 outline-none' type="text" name="title" placeholder='Image alt' />
                            <input className='border-[0.1px] border-gray-300 h-10 pl-2 outline-none' type="text" name="tag" placeholder='Image tag, tag1, tag2, tag3' />
                        </div>
                        <div className='bg-primary cursor-pointer active:scale-90 w-[80%] flex justify-center'>
                            <h2 className='text-white text-2xl'>Upload now</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}


{/* <div className='w-[30%] h-[75vh] border-[0.2px] border-gray-500'>
                    fdsfa
                </div> */}