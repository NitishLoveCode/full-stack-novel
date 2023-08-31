import React, { useState } from 'react'

export default function Hometag() {
  const[searchToggle, setsearchToggle] =useState(null)

  const tag=["Forbidden", "Love","Werewolf","Billionaire","Forbidden", "Love","Werewolf",
          "Billionaire","Forbidden", "Love","Werewolf","Billionaire",]

  const tagActive=()=>{
    return "bg-primary text-white"
  }
  const idFind=(i)=>{
    setsearchToggle(i)
  }


  return (
    <>
        <div className='gap-1 sm:gap-5 flex flex-wrap'>
          {
            tag?.map((curEle,i) =>{
              return (
                 <button onClick={()=>idFind(i)} key={i} className={`${searchToggle==i ? "bg-primary text-white":""} border-[0.5px] border-primary rounded-full pl-2 pr-2 sm:pl-5 sm:pr-5 text-primary pt-1 pb-1`}>{curEle}</button>
              )
            })
          }
        </div>
    </>
  )
}
