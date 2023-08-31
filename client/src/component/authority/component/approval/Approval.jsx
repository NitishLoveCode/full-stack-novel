import React from "react";
import { HiLink } from "react-icons/hi";
import { FcApproval } from "react-icons/fc";
import { TiDelete } from "react-icons/ti";
import { useLocation } from "react-router-dom";
import {IoMdMail} from "react-icons/io"

export default function Approval() {
  const location=useLocation()
  return (
    <>
      <div className="flex justify-between text-xl s text-gray-600">
        <div className="w-[40%]">
          <h2>Novel</h2>
        </div>
        <div className="w-[20%]">
          <h2>Status</h2>
        </div>

        <div className="w-[20%]">
          {
            location.pathname.includes("/admin")? <><h2>Editor</h2></>:<><h2>Submitted</h2></>
          }
        </div>

        <div className="w-[20%]">
          <h2>Status</h2>
        </div>
      </div>

      {/* ----------------------------map can use from here----- */}
      <div className="flex justify-between text-gray-600 mt-10">
        <div className="w-[40%] flex gap-2">
          <div className="flex gap-2">
            <img
              className="w-24"
              src="https://cdn.joyreadings.com/novel_avatar_small_m/b73ce2807c6f7a3c89395ccfd44e1f13.jpg"
              alt="sadfasd"
            />
          </div>

          <div className="flex flex-col justify-between">
            <p>
              <span className="text-gray-500">Name:</span> Mother's Words Are
              Law! Law!Mother's Words Are Law!
            </p>
            {/* -------------its novel updated heading tag------------------- */}
            <p>
              <span className="text-gray-500">Updated: </span>Chapter 1 He's
              Coming Back
            </p>
            <div className="flex gap-2 items-center">
              <p>
                <span className="text-gray-500">Created at:</span> 27-08-2023
              </p>
              <div className="flex items-center text-green-400">
                <HiLink /> <p>Open</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[20%]">
          <div className="bg-blue-300 w-fit rounded-full">
            <h2 className="text-white pl-1 pr-1">New Novel</h2>
          </div>
        </div>

        <div className="w-[20%]">
          <div className="w-fit rounded-full">
            {
              location.pathname.includes("/admin")? <>
              <h2 className="pl-1 pr-1">Nitish kumar</h2>
              <h2 className="pl-1 pr-1">xyz@gmail.com</h2>
              </>:<><h2 className="pl-1 pr-1">Sucessfully</h2></>
            }
            
          </div>
        </div>

        <div className="w-[20%]">
          <div className=" w-fit cursor-pointer flex items-center gap-2 rounded-full">
            <p>Approved</p>
            <FcApproval className="text-2xl" />
          </div>
          {
            location.pathname.includes("/admin") ? <>
              <div className=" w-fit text-red-400 cursor-pointer flex items-center gap-2 rounded-full">
                <p>Reject</p>
                <TiDelete className="text-3xl" />
              </div>
              <div className=" w-fit cursor-pointer flex items-center gap-2 rounded-full">
                <p>Mail</p>
                <IoMdMail className="text-3xl" />
              </div>
            </>:""
          }
          
        </div>
      </div>
      {/* -------------------------------map till end------  */}


      <div className="flex justify-between text-gray-600 mt-10">
        <div className="w-[40%] flex gap-2">
          <div className="flex gap-2">
            <img
              className="w-24"
              src="https://cdn.joyreadings.com/novel_avatar_small_m/b73ce2807c6f7a3c89395ccfd44e1f13.jpg"
              alt="sadfasd"
            />
          </div>

          <div className="flex flex-col justify-between">
            <p>
              <span className="text-gray-500">Name:</span> Mother's Words Are
              Law! Law!Mother's Words Are Law!
            </p>
            {/* -------------its novel updated heading tag------------------- */}
            <p>
              <span className="text-gray-500">Updated: </span>Chapter 1 He's
              Coming Back
            </p>
            <div className="flex gap-2 items-center">
              <p>
                <span className="text-gray-500">Created at:</span> 27-08-2023
              </p>
              <div className="flex items-center text-green-400">
                <HiLink /> <p>Open</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[20%]">
          <div className="bg-blue-300 w-fit rounded-full">
            <h2 className="text-white pl-1 pr-1">New Novel</h2>
          </div>
        </div>

        <div className="w-[20%]">
          <div className="w-fit rounded-full">
            {
              location.pathname.includes("/admin")? <>
              <h2 className="pl-1 pr-1">Nitish kumar</h2>
              <h2 className="pl-1 pr-1">xyz@gmail.com</h2>
              </>:<><h2 className="pl-1 pr-1">Sucessfully</h2></>
            }
            
          </div>
        </div>

        <div className="w-[20%]">
          
          {
            location.pathname.includes("/admin") ? <>
            <div className=" w-fit cursor-pointer flex items-center gap-2 rounded-full">
            <p>Accept</p>
            <FcApproval className="text-2xl" />
          </div>
              <div className=" w-fit text-red-400 cursor-pointer flex items-center gap-2 rounded-full">
                <p>Reject</p>
                <TiDelete className="text-3xl" />
              </div>
              <div className=" w-fit cursor-pointer flex items-center gap-2 rounded-full">
                <p>Mail</p>
                <IoMdMail className="text-3xl" />
              </div>
            </>:
            <>
            <div className=" w-fit cursor-pointer flex items-center gap-2 rounded-full">
            <p>Requested</p>
            
          </div>
            </>
          }
          
        </div>
      </div>

      <div className="flex justify-between text-gray-600 mt-10">
        <div className="w-[40%] flex gap-2">
          <div className="flex gap-2">
            <img
              className="w-24"
              src="https://cdn.joyreadings.com/novel_avatar_small_m/b73ce2807c6f7a3c89395ccfd44e1f13.jpg"
              alt="sadfasd"
            />
          </div>

          <div className="flex flex-col justify-between">
            <p>
              <span className="text-gray-500">Name:</span> Mother's Words Are
              Law! Law!Mother's Words Are Law!
            </p>
            {/* -------------its novel updated heading tag------------------- */}
            <p>
              <span className="text-gray-500">Updated: </span>Chapter 1 He's
              Coming Back
            </p>
            <div className="flex gap-2 items-center">
              <p>
                <span className="text-gray-500">Created at:</span> 27-08-2023
              </p>
              <div className="flex items-center text-green-400">
                <HiLink /> <p>Open</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[20%]">
          <div className="bg-blue-300 w-fit rounded-full">
            <h2 className="text-white pl-1 pr-1">New Novel</h2>
          </div>
        </div>

        <div className="w-[20%]">
          <div className="w-fit rounded-full">
            {
              location.pathname.includes("/admin")? <>
              <h2 className="pl-1 pr-1">Nitish kumar</h2>
              <h2 className="pl-1 pr-1">xyz@gmail.com</h2>
              </>:<><h2 className="pl-1 pr-1">Sucessfully</h2></>
            }
            
          </div>
        </div>

        <div className="w-[20%]">
          <div className=" w-fit cursor-pointer flex items-center gap-2 rounded-full">
            <p>Approved</p>
            <FcApproval className="text-2xl" />
          </div>
          {
            location.pathname.includes("/admin") ? <>
              <div className=" w-fit text-red-400 cursor-pointer flex items-center gap-2 rounded-full">
                <p>Reject</p>
                <TiDelete className="text-3xl" />
              </div>
              <div className=" w-fit cursor-pointer flex items-center gap-2 rounded-full">
                <p>Mail</p>
                <IoMdMail className="text-3xl" />
              </div>
            </>:""
          }
          
        </div>
      </div>

      <div className="flex justify-between text-gray-600 mt-10">
        <div className="w-[40%] flex gap-2">
          <div className="flex gap-2">
            <img
              className="w-24"
              src="https://cdn.joyreadings.com/novel_avatar_small_m/b73ce2807c6f7a3c89395ccfd44e1f13.jpg"
              alt="sadfasd"
            />
          </div>

          <div className="flex flex-col justify-between">
            <p>
              <span className="text-gray-500">Name:</span> Mother's Words Are
              Law! Law!Mother's Words Are Law!
            </p>
            {/* -------------its novel updated heading tag------------------- */}
            <p>
              <span className="text-gray-500">Updated: </span>Chapter 1 He's
              Coming Back
            </p>
            <div className="flex gap-2 items-center">
              <p>
                <span className="text-gray-500">Created at:</span> 27-08-2023
              </p>
              <div className="flex items-center text-green-400">
                <HiLink /> <p>Open</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[20%]">
          <div className="bg-blue-300 w-fit rounded-full">
            <h2 className="text-white pl-1 pr-1">New Novel</h2>
          </div>
        </div>

        <div className="w-[20%]">
          <div className="w-fit rounded-full">
            {
              location.pathname.includes("/admin")? <>
              <h2 className="pl-1 pr-1">Nitish kumar</h2>
              <h2 className="pl-1 pr-1">xyz@gmail.com</h2>
              </>:<><h2 className="pl-1 pr-1">Sucessfully</h2></>
            }
            
          </div>
        </div>

        <div className="w-[20%]">
          <div className=" w-fit cursor-pointer flex items-center gap-2 rounded-full">
            <p>Approved</p>
            <FcApproval className="text-2xl" />
          </div>
          {
            location.pathname.includes("/admin") ? <>
              <div className=" w-fit text-red-400 cursor-pointer flex items-center gap-2 rounded-full">
                <p>Reject</p>
                <TiDelete className="text-3xl" />
              </div>
              <div className=" w-fit cursor-pointer flex items-center gap-2 rounded-full">
                <p>Mail</p>
                <IoMdMail className="text-3xl" />
              </div>
            </>:""
          }
          
        </div>
      </div>


      <div className="flex justify-between text-gray-600 mt-10">
        <div className="w-[40%] flex gap-2">
          <div className="flex gap-2">
            <img
              className="w-24"
              src="https://cdn.joyreadings.com/novel_avatar_small_m/b73ce2807c6f7a3c89395ccfd44e1f13.jpg"
              alt="sadfasd"
            />
          </div>

          <div className="flex flex-col justify-between">
            <p>
              <span className="text-gray-500">Name:</span> Mother's Words Are
              Law! Law!Mother's Words Are Law!
            </p>
            {/* -------------its novel updated heading tag------------------- */}
            <p>
              <span className="text-gray-500">Updated: </span>Chapter 1 He's
              Coming Back
            </p>
            <div className="flex gap-2 items-center">
              <p>
                <span className="text-gray-500">Created at:</span> 27-08-2023
              </p>
              <div className="flex items-center text-green-400">
                <HiLink /> <p>Open</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[20%]">
          <div className="bg-blue-300 w-fit rounded-full">
            <h2 className="text-white pl-1 pr-1">New Novel</h2>
          </div>
        </div>

        <div className="w-[20%]">
          <div className="w-fit rounded-full">
            {
              location.pathname.includes("/admin")? <>
              <h2 className="pl-1 pr-1">Nitish kumar</h2>
              <h2 className="pl-1 pr-1">xyz@gmail.com</h2>
              </>:<><h2 className="pl-1 pr-1">Sucessfully</h2></>
            }
            
          </div>
        </div>

        <div className="w-[20%]">
          <div className=" w-fit cursor-pointer flex items-center gap-2 rounded-full">
            <p>Approved</p>
            <FcApproval className="text-2xl" />
          </div>
          {
            location.pathname.includes("/admin") ? <>
              <div className=" w-fit text-red-400 cursor-pointer flex items-center gap-2 rounded-full">
                <p>Reject</p>
                <TiDelete className="text-3xl" />
              </div>
              <div className=" w-fit cursor-pointer flex items-center gap-2 rounded-full">
                <p>Mail</p>
                <IoMdMail className="text-3xl" />
              </div>
            </>:""
          }
          
        </div>
      </div>

      <div className="flex justify-between text-gray-600 mt-10">
        <div className="w-[40%] flex gap-2">
          <div className="flex gap-2">
            <img
              className="w-24"
              src="https://cdn.joyreadings.com/novel_avatar_small_m/b73ce2807c6f7a3c89395ccfd44e1f13.jpg"
              alt="sadfasd"
            />
          </div>

          <div className="flex flex-col justify-between">
            <p>
              <span className="text-gray-500">Name:</span> Mother's Words Are
              Law! Law!Mother's Words Are Law!
            </p>
            {/* -------------its novel updated heading tag------------------- */}
            <p>
              <span className="text-gray-500">Updated: </span>Chapter 1 He's
              Coming Back
            </p>
            <div className="flex gap-2 items-center">
              <p>
                <span className="text-gray-500">Created at:</span> 27-08-2023
              </p>
              <div className="flex items-center text-green-400">
                <HiLink /> <p>Open</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[20%]">
          <div className="bg-blue-300 w-fit rounded-full">
            <h2 className="text-white pl-1 pr-1">New Novel</h2>
          </div>
        </div>

        <div className="w-[20%]">
          <div className="w-fit rounded-full">
            {
              location.pathname.includes("/admin")? <>
              <h2 className="pl-1 pr-1">Nitish kumar</h2>
              <h2 className="pl-1 pr-1">xyz@gmail.com</h2>
              </>:<><h2 className="pl-1 pr-1">Sucessfully</h2></>
            }
            
          </div>
        </div>

        <div className="w-[20%]">
          <div className=" w-fit cursor-pointer flex items-center gap-2 rounded-full">
            <p>Approved</p>
            <FcApproval className="text-2xl" />
          </div>
          {
            location.pathname.includes("/admin") ? <>
              <div className=" w-fit text-red-400 cursor-pointer flex items-center gap-2 rounded-full">
                <p>Reject</p>
                <TiDelete className="text-3xl" />
              </div>
              <div className=" w-fit cursor-pointer flex items-center gap-2 rounded-full">
                <p>Mail</p>
                <IoMdMail className="text-3xl" />
              </div>
            </>:""
          }
          
        </div>
      </div>
    </>
  );
}
