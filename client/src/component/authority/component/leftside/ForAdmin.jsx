import React from 'react'
import {BsBookHalf} from "react-icons/bs"
import {SiGoogleanalytics} from "react-icons/si"
import {MdPermMedia} from "react-icons/md"
import {FcApproval} from "react-icons/fc"
import {FaUserCog} from "react-icons/fa"
import {BsArrowLeftRight} from "react-icons/bs"
import { Link } from 'react-router-dom'
import {BsSignpostSplit} from 'react-icons/bs'
import {MdOutlineDashboardCustomize} from "react-icons/md"
import {MdOutlineInsertComment} from "react-icons/md"
import {AiOutlineUsergroupAdd} from "react-icons/ai"
import {TfiUnlink} from "react-icons/tfi"

export default function ForAdmin() {
  return (
    <>
        <div className='text-white flex flex-col pl-2 pt-8 sm:pl-4 gap-4 sm:gap-8'>
                <Link to={"/novel/admin/dashboard"}>
                <div className={`hover:bg-primary ${location.pathname=="/novel/editor/dashboard"? "bg-primary":""} active:bg-purple-300 cursor-pointer w-[99.5%] pt-2 pl-1 pb-2 rounded-sm gap-2 flex items-center`}><BsBookHalf className='text-2xl'/><h3 className="hidden sm:block">Novels</h3></div>
                </Link>
                <Link to={"/novel/admin/all-post"}>
                <div className={`hover:bg-primary ${location.pathname=="/novel/editor/all-post"? "bg-primary":""} active:bg-purple-300 cursor-pointer w-[99.5%] pt-2 pl-1 pb-2 rounded-sm gap-2 flex items-center`}><BsSignpostSplit className='text-2xl'/><h3 className="hidden sm:block">All posts</h3></div>
                </Link>
                <Link to={"/novel/admin/customize"}>
                <div className={`hover:bg-primary ${location.pathname=="/novel/editor/dashboard"? "bg-primary":""} active:bg-purple-300 cursor-pointer w-[99.5%] pt-2 pl-1 pb-2 rounded-sm gap-2 flex items-center`}><MdOutlineDashboardCustomize className='text-2xl'/><h3 className="hidden sm:block">Customize</h3></div>
                </Link>
                <Link to={"/novel/admin/comment"}>
                <div className={`hover:bg-primary ${location.pathname=="/novel/editor/comment"? "bg-primary":""} active:bg-purple-300 cursor-pointer w-[99.5%] pt-2 pl-1 pb-2 rounded-sm gap-2 flex items-center`}><MdOutlineInsertComment className='text-2xl'/><h3 className="hidden sm:block">Comments</h3></div>
                </Link>
                <Link to={"/novel/admin/editors"}>
                <div className={`hover:bg-primary ${location.pathname=="/novel/admin/editors"? "bg-primary":""} active:bg-purple-300 cursor-pointer w-[99.5%] pt-2 pl-1 pb-2 rounded-sm gap-2 flex items-center`}><AiOutlineUsergroupAdd className='text-2xl'/><h3 className="hidden sm:block">Editors</h3></div>
                </Link>
                <Link to={"/novel/admin/redirection"}>
                <div className={`hover:bg-primary ${location.pathname=="/novel/admin/redirection"? "bg-primary":""} active:bg-purple-300 cursor-pointer w-[99.5%] pt-2 pl-1 pb-2 rounded-sm gap-2 flex items-center`}><TfiUnlink className='text-2xl'/><h3 className="hidden sm:block">Redirects</h3></div>
                </Link>
                <Link to={"/novel/admin/Analytics"}>
                <div className={`hover:bg-primary ${location.pathname=="/novel/editor/Analytics"? "bg-primary":""} active:bg-purple-300 cursor-pointer w-[99.5%] pt-2 pl-1 pb-2 rounded-sm gap-2 flex items-center`}><SiGoogleanalytics className='text-2xl'/><h3 className="hidden sm:block">Analytics</h3></div>
                </Link>
                <Link to={"/novel/admin/media"}>

                <div className={`hover:bg-primary ${location.pathname=="/novel/editor/media"? "bg-primary":""} active:bg-purple-300 cursor-pointer w-[99.5%] pt-2 pl-1 pb-2 rounded-sm gap-2 flex items-center`}><MdPermMedia className='text-2xl'/><h3 className="hidden sm:block">Media</h3></div>
                </Link>
                <Link to={"/novel/admin/approval"}>

                <div className={`hover:bg-primary ${location.pathname=="/novel/editor/approval"? "bg-primary":""} active:bg-purple-300 cursor-pointer w-[99.5%] pt-2 pl-1 pb-2 rounded-sm gap-2 flex items-center`}><FcApproval className='text-2xl'/><h3 className="hidden sm:block">Approval</h3></div>
                </Link>
                
                <Link to={"/novel/admin/user"}>

                <div className={`hover:bg-primary ${location.pathname=="/novel/editor/user"? "bg-primary":""} active:bg-purple-300 cursor-pointer w-[99.5%] pt-2 pl-1 pb-2 rounded-sm gap-2 flex items-center`}><FaUserCog className='text-2xl'/><h3 className="hidden sm:block">User</h3></div>
                </Link>
                <div className='hover:bg-primary active:bg-purple-300 cursor-pointer w-[99.5%] pt-2 pl-1 pb-2 rounded-sm gap-2 flex items-center'><BsArrowLeftRight className='text-2xl'/><h3 className="hidden sm:block">Hide</h3></div>
        </div>
    </>
  )
}
