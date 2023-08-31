import React from "react";
import {AiOutlineRight} from "react-icons/ai";

export default function Heading({Heading}) {
  return (
    <>
        <div className="flex justify-between mt-5 mb-5 sm:border-b-[1.5px] sm:border-solid sm:border-gray-300">
            <div className="flex items-center text-gray-600">
                <div className="sm:w-1 sm:h-8 sm:rounded-full sm:bg-primary"></div>
                <div><h3 className="text-xl sm:ml-1 sm:text-2xl font-bold">{Heading}</h3></div>
            </div>
            <div className="text-primary flex items-center">
                <p className="text-md">More</p>
                <AiOutlineRight className="text-1xl"/>
            </div>
            
        </div>
    </>
  );
}
