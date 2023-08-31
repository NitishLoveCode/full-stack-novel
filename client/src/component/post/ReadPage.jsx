import React, { useState } from 'react'
import {FaThumbsDown} from "react-icons/fa"
import {FaShare} from "react-icons/fa"
import {BsFillEyeFill} from "react-icons/bs"
import {FaThumbsUp} from "react-icons/fa"
import {MdOutlineInsertComment} from "react-icons/md"
import {FaAngleDoubleRight} from "react-icons/fa"
import Comment from '../comment/Comment'

export default function ReadPage() {
  const [darkModeOn,setdarkModeOn] =useState(false)
  const [rightModeOn,setrightModeOn] =useState(false)
  const [comment, setcomment]= useState(false)

  const darkMode=()=>{
    if(darkModeOn==true){
      setdarkModeOn(false)
    }else{
      setdarkModeOn(true)
    }
  }
  const right_mode=()=>{
    if(rightModeOn==false){
      setrightModeOn(true)
    }else{
      setrightModeOn(false)
    }
  }
  const comment_mode=()=>{
    if(comment==false){
      setcomment(true)
    }else{
      setcomment(false)
    }
  }



  return (
    <>
        <div className={` ${darkModeOn ===true ? "bg-gray-900":"bg-yellow-100"} ${darkModeOn ===true ? "text-gray-400":"text-gray-500"} h-screen overflow-y-hidden`}>
          <div className='flex justify-center rounded-br-2xl rounded-bl-2xl ml-auto mr-auto pl-10 pr-10 w-fit bg-black text-white shadow-2xl items-center'>
            <h2 className='text-2xl'>Don't  get upolo</h2>
          </div>

      
          <div className='flex mt-6 gap-[5vw] sm:gap-[10vw] items-center justify-center'>
              <div onClick={()=>{darkMode()}} className={`w-16 h-8 bg-gray-300 ${darkModeOn ===true ? "justify-end":"justify-start"} flex items-center  rounded-full`}>
                <div className={`w-6 h-6 ml-1 mr-1 ${darkModeOn ===true ? "bg-black":"bg-yellow-600"} rounded-full`}></div>
              </div>
              <div className='flex items-center gap-1'>
                <p><BsFillEyeFill className=' text-[26px]'/></p>
                <p className='text-sm'>53k</p>
              </div>
              <div className='flex gap-1'>
                <FaThumbsUp className=' text-[16px] font-bold'/>
                <p className='text-sm'>9396</p>
              </div>
          </div>

          <div className='flex justify-between'>
            <div className='bg-red-400 hidden sm:block w-[15vw] shadow-2xl rounded-tr-[40px] h-[91vh]'></div>


            <div className='sm:w-[65vw] ml-1 mr-1 sm:ml-0 sm:mr-0 text-justify p-3 rounded-t-2xl border-[1.1px] border-gray-400 h-[85.5vh] mt-2 text-xl leading-9 overflow-y-scroll'>
              <div className='absolute !text-white border-l-2 top-[8.5vh] border-white rounded-r-xl  bg-gray-500 pl-2 pr-2 right-0 sm:right-[19vw]'>
                <p>Next</p>
              </div>
              <div className='absolute !text-white border-r-2 top-[8.5vh] border-white rounded-l-xl bg-gray-500 pl-2 pr-2 left-0 sm:left-[19vw]'>
                <p>Prev</p>
              </div>
              <div className={`absolute top-36 bg-purple-800 bg-opacity-20 ${rightModeOn ===true ? "h-10":"h-72"} pt-2 w-9 rounded-l-2xl right-0 sm:right-[18.5vw]`}>
              <p><FaAngleDoubleRight onClick={()=>{right_mode()}} className='text-primary text-[30px]'/></p>
                <p className='text-sm'></p>
              </div>
              <div onClick={()=>{comment_mode()}} className={`absolute ${rightModeOn==true? "hidden" : ""} top-96 rounded-l-md  right-0  sm:right-[18.2vw]`}>
                <p><MdOutlineInsertComment className=' text-[30px]'/></p>
              
              </div>
              <div className={`absolute ${rightModeOn==true? "hidden" : ""} top-52 rounded-l-md  right-0 sm:right-[18.5vw]`}>
                <p><FaThumbsDown className=' rotate-180 text-[28px]'/></p>
              </div>
              <div className={`absolute ${rightModeOn==true? "hidden" : ""} top-72 rounded-l-md  right-0 sm:right-[18.5vw]`}>
                <p><FaShare className=' text-[26px]'/></p>
              </div>

              
              <div>{comment===true? <Comment/>:""}</div>

              

              <p>
                
                The truth was she never pushed anyone, but no one believed her. 
                As it was cold spring weather, the snow and the wind made their way into the attic through the window cracks, piling layers of coldness onto little Lilly. 
                Soon, an entire day had passed by. 
                No one cared about Lilly, and no one even knew that Debbie had punished her the day before. She was already in a daze as she had yet to eat anything. 
                Richard had ordered that she was not allowed to leave until she admitted that it was her fault.  
                "Mommy…"
                Lilly's lips were turning purple from the cold, and she was shivering. She could only close her eyes and mumble, "Mommy… I didn't do anything wrong… It's not my fault…" 
                She knew that her mother had died from an illness a year ago. 
                After her mother passed on, her dad found another woman, and soon the woman was pregnant with a baby…
                However, the woman was two-faced. She was only nice to Lilly when others were present; otherwise, she would act like a demon punishing her. 
                The truth was she never pushed anyone, but no one believed her. 
                As it was cold spring weather, the snow and the wind made their way into the attic through the window cracks, piling layers of coldness onto little Lilly. 
                Soon, an entire day had passed by. 
                No one cared about Lilly, and no one even knew that Debbie had punished her the day before. She was already in a daze as she had yet to eat anything. 
                Richard had ordered that she was not allowed to leave until she admitted that it was her fault.  
                "Mommy…"
                Lilly's lips were turning purple from the cold, and she was shivering. She could only close her eyes and mumble, "Mommy… I didn't do anything wrong… It's not my fault…" 
                She knew that her mother had died from an illness a year ago. 
                After her mother passed on, her dad found another woman, and soon the woman was pregnant with a baby…
                However, the woman
                The truth was she never pushed anyone, but no one believed her. 
                As it was cold spring weather, the snow and the wind made their way into the attic through the window cracks, piling layers of coldness onto little Lilly. 
                Soon, an entire day had passed by. 
                No one cared about Lilly, and no one even knew that Debbie had punished her the day before. She was already in a daze as she had yet to eat anything. 
                Richard had ordered that she was not allowed to leave until she admitted that it was her fault.  
                "Mommy…"
                Lilly's lips were turning purple from the cold, and she was shivering. She could only close her eyes and mumble, "Mommy… I didn't do anything wrong… It's not my fault…" 
                She knew that her mother had died from an illness a year ago. 
                After her mother passed on, her dad found another woman, and soon the woman was pregnant with a baby…
                However, the woman
                The truth was she never pushed anyone, but no one believed her. 
                As it was cold spring weather, the snow and the wind made their way into the attic through the window cracks, piling layers of coldness onto little Lilly. 
                Soon, an entire day had passed by. 
                No one cared about Lilly, and no one even knew that Debbie had punished her the day before. She was already in a daze as she had yet to eat anything. 
                Richard had ordered that she was not allowed to leave until she admitted that it was her fault.  
                "Mommy…"
                Lilly's lips were turning purple from the cold, and she was shivering. She could only close her eyes and mumble, "Mommy… I didn't do anything wrong… It's not my fault…" 
                She knew that her mother had died from an illness a year ago. 
                After her mother passed on, her dad found another woman, and soon the woman was pregnant with a baby…
                However, the woman

              </p>
              
            </div>


            <div className='bg-red-400 hidden sm:block  w-[15vw] shadow-2xl rounded-tl-[40px] h-[91vh]'></div>
          
          </div>
        </div>
    </>
  )
}
