import React from "react";
import {RiDeleteBin6Fill} from "react-icons/ri"
import {GrUpdate} from "react-icons/gr"
import HeadingCustomize from "./customized/HeadingCustomize";
import HomeTag from "./customized/HomeTag";

export default function Customized() {
  return (
    <>
      <div className="flex flex-col md:flex-row flex-wrap   p-2 gap-2 sm:gap-2">
        <div className="bg-gray-200 p-5 rounded-xl flex flex-col w-full  h-fit sm:w-[312px]">
          <div className="flex flex-col items-center justify-center gap-3">
            <h2 className="text-md sm:text-2xl">Home header Banner</h2>
            <input
              className="w-full pl-2 outline-primary h-8"
              placeholder="Add home banner url"
              type="text"
              name="header banner"
            />
          </div>
          <div className="flex justify-between p-1 gap-2 mt-4">
            <button className="bg-red-300 w-36 p-1 rounded-md active:scale-90 text-white">
              Remove
            </button>
            <button className="bg-primary w-36 p-1 rounded-md active:scale-90 text-white">
              Add
            </button>
          </div>
        </div>

        {/* -----------------------heading Customized---------------------------- */}
        <HeadingCustomize heading={"1"}/>
        <HeadingCustomize heading={"2"}/>
        <HeadingCustomize heading={"3"}/>
        <HomeTag/>
        





      </div>
    </>
  );
}
