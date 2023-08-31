import React from 'react'
import {RiDeleteBin6Fill} from "react-icons/ri"
import { GrUpdate } from 'react-icons/gr'

export default function HeadingCustomize({heading}) {
  return (
    <>
        <div className="bg-gray-200 w-full rounded-lg gap-2 p-2 flex flex-col justify-center items-center sm:w-[400px]">
          <h2 className="text-2xl">Home Heading {heading}</h2>
          <div className="flex  flex-wrap sm:flex-nowrap gap-2 justify-between">
            
          <div className="flex flex-col">
            <div className="bg-primary max-w-14 w-14 h-[77px]">
                <img className="w-14" src="https://cdn.joyreadings.com/novel_avatar_small/446e427b680b4008418ef1f12130238d.jpg" alt="sdfas" />
              </div>
              <div className="gap-1 absolute flex">
                <button className="text-red-400 bg-gray-50 p-1 rounded-full mt-1"><RiDeleteBin6Fill/></button>
                <button className="bg-gray-100 p-1 rounded-full mt-1"><GrUpdate/></button>
              </div>
            </div>
    
            <div className="flex flex-col relative">
            <div className="bg-primary max-w-14 w-14 h-[77px]">
                <img className="w-14" src="https://cdn.joyreadings.com/novel_avatar_small/446e427b680b4008418ef1f12130238d.jpg" alt="sdfas" />
              </div>
              <div className="absolute gap-1 flex">
                <button className="text-red-400 bg-gray-50 p-1 rounded-full mt-1"><RiDeleteBin6Fill/></button>
                <button className="bg-gray-100 p-1 rounded-full mt-1"><GrUpdate/></button>
              </div>
            </div>
    
            <div className="flex flex-col relative">
              <div className="bg-primary max-w-14 w-14 h-[77px]">
                <img className="w-14" src="https://cdn.joyreadings.com/novel_avatar_small/446e427b680b4008418ef1f12130238d.jpg" alt="sdfas" />
              </div>
              <div className="absolute gap-1 flex">
                <button className="text-red-400 bg-gray-50 p-1 rounded-full mt-1"><RiDeleteBin6Fill/></button>
                <button className="bg-gray-100 p-1 rounded-full mt-1"><GrUpdate/></button>
              </div>
            </div>
    
            <div className="flex flex-col relative">
            <div className="bg-primary max-w-14 w-14 h-[77px]">
                <img className="w-14" src="https://cdn.joyreadings.com/novel_avatar_small/446e427b680b4008418ef1f12130238d.jpg" alt="sdfas" />
              </div>
              <div className="absolute gap-1 flex">
                <button className="text-red-400 bg-gray-50 p-1 rounded-full mt-1"><RiDeleteBin6Fill/></button>
                <button className="bg-gray-100 p-1 rounded-full mt-1"><GrUpdate/></button>
              </div>
            </div>
    
            <div className="flex flex-col relative">
            <div className="bg-primary max-w-14 w-14 h-[77px]">
                <img className="w-14" src="https://cdn.joyreadings.com/novel_avatar_small/446e427b680b4008418ef1f12130238d.jpg" alt="sdfas" />
              </div>
              <div className="absolute gap-1 flex">
                <button className="text-red-400 bg-gray-50 p-1 rounded-full mt-1"><RiDeleteBin6Fill/></button>
                <button className="bg-gray-100 p-1 rounded-full mt-1"><GrUpdate/></button>
              </div>
            </div>
    
            <div className="flex flex-col relative">
            <div className="bg-primary max-w-14 w-14 h-[77px]">
                <img className="w-14" src="https://cdn.joyreadings.com/novel_avatar_small/446e427b680b4008418ef1f12130238d.jpg" alt="sdfas" />
              </div>
              <div className="absolute gap-1 flex">
                <button className="text-red-400 bg-gray-50 p-1 rounded-full mt-1"><RiDeleteBin6Fill/></button>
                <button className="bg-gray-100 p-1 rounded-full mt-1"><GrUpdate/></button>
              </div>
            </div>
    
            
          </div>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 w-full h-8 text-white active:scale-90">Remove all</button>
        </div>
    </>
  )
}
