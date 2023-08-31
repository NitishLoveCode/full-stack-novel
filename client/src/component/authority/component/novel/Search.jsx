import React from "react";
import {LuSearch} from "react-icons/lu"


export default function Search() {
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div className="border-[1px] shadow-md flex items-center rounded-sm overflow-hidden h-12 border-gray-300 w-[100%] sm:w-[60vw]">
          <input placeholder="Search novel" className="w-full outline-none bg-transparent pl-2 h-10 " type="text" name="search" id="search" />
          <button className="bg-primary h-full w-16 flex items-center justify-center"><LuSearch className="text-2xl text-white border-l-gray-500"/></button>
        </div>
        <div className="flex items-center mt-1 sm:mt-0 text-sm w-full sm:w-auto justify-between">
          <label>Not finish
          <input className="w-sm sm:w-10" type="checkbox" name="" id="" />
          </label>
          <label>Finished only
          <input className="w-sm sm:w-10" type="checkbox" name="" id="" />
          </label>
          <label>Subimited
          <input className="w-sm sm:w-10" type="checkbox" name="" id="" />
          </label>

        </div>
      </div>
    </>
  );
}
