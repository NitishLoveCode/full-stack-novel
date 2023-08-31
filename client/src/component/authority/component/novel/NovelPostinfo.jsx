import React from "react";

export default function NovelPostinfo() {
  return (
    <>
      <div className="flex shadow-md border-[1.5px] bg-gradient-to-r from-purple-200 to-blue-100 border-gray-300 w-full sm:w-[347px] h-[175px] rounded-md">
        <div className="w-[50%]  bg-transparent text-center justify-center flex items-center"><h3 className="flex flex-col"><span className="text-xl">Eaditing</span><span className="text-2xl"> 168</span><br/> <span className="text-xl">Submitted</span><span className="text-2xl"> 600</span></h3></div>
        <div className="w-[50%] bg-transparent text-center justify-center flex items-center"><h3><span className="text-2xl">Total</span><br/> <span className="text-[50px] font-extrabold">768</span><br/> <span className="text-xl">Novel</span></h3></div>

      </div>
    </>
  );
}
