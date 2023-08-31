import React from 'react'
import {MdCloudDone} from "react-icons/md"
import {AiOutlineFileDone} from "react-icons/ai"
import {HiLink} from "react-icons/hi"
import {MdEditSquare} from "react-icons/md"
import {MdUnpublished} from "react-icons/md"



export default function RecentCreate({novel_data}) {
    const {title,imgurl,pages,creat_at,publish,finish,novel_url}=novel_data
  return (

    <div className='overflow-hidden h-[157px] gap-2 flex mb-5 w-full md:w-[29.5%] rounded-md border-[0.5px] shadow-xl'>
        <div className='min-w-32 w-32'>
            <img src={imgurl} alt="afsd" />
        </div>
        <div className='text-sm flex flex-col justify-stretch gap-1 sm:gap-1 pt-1 sm:pb-1'>
            <div className=''><p>{title}</p></div>
            {
                publish==true ? 
                <><div className='flex items-center'><MdCloudDone className='text-green-400 text-2xl'/><span className='text-sm'>Publish</span></div></>
                :
                <><div className='flex items-center'><MdUnpublished className='text-red-400 text-2xl'/><span className='text-sm'>Unpublish</span></div></>

            }


            <div><p>Pages: {pages}</p></div>
            <div><p>Create at: {creat_at}</p></div>
            <div className='flex items-center gap-1'>
            {
                finish ==true ? 
                <><AiOutlineFileDone className='text-green-400 text-2xl' /><span className='text-sm'>Done</span></>
                :
                <><MdEditSquare className='text-gray-700 text-2xl' /><span className='text-sm'>Remaining</span></>

            
            }

                <HiLink className='text-green-400 text-2xl'/>
                <span className='text-sm'>Link</span>
            </div>
            
                
                {/* ------------------fild for admin----------------- */}
                {/* <p className='flex  gap-1'>
                    <span className='bg-green-400 p-[2px] sm:p-1  sm:pl-2 sm:pr-2 sm:rounded-2xl'>Publish</span> 
                    <span className='bg-green-400 p-[2px] sm:p-1 pl-2 pr-2 sm:rounded-2xl'>Finish</span>
                </p> */}
                
        </div>
    </div>
  )
}
