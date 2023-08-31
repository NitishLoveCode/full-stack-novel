import React from 'react'
import {FaFacebook} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaPinterestSquare} from "react-icons/fa"
import {VscGraphLine} from "react-icons/vsc"
import {MdBusinessCenter} from "react-icons/md"
import {LuFileEdit} from "react-icons/lu"


export default function DeskFooter() {
  return (
    <>
        <div className='flex justify-between pl-20 pr-20 bg-slate-100 pt-5 mt-24 pb-9'>
            <div className="flex flex-col gap-4">
                <h3 className="text-2xl pb-4 font-bold">LEGAL</h3>
                <p>Terms of service</p>
                <p>Privacy policy</p>
            </div>
            <div className="flex flex-col gap-4">
                <h3 className="text-2xl pb-4 font-bold">RESOURCES</h3>
                <p>Download App</p>
                <p>Create</p>
            </div>
            <div className="flex flex-col gap-4">
                <h3 className="text-2xl pb-4 font-bold">FOLLOW US</h3>
                <div className='flex items-center gap-2'>
                    <FaFacebook className="text-xl"/> 
                    <p>Facebook</p>
                </div>
                <div className='flex items-center gap-2'>
                    <FaTwitter className="text-xl"/>
                    <p>Twitter</p>
                </div>
                <div className='flex items-center gap-2'>
                    <FaPinterestSquare className="text-xl"/>
                    <p>Pinterest</p>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <h3 className="text-2xl pb-4 font-bold">CONTACT US</h3>
                <div className='flex items-center gap-2'>
                    <VscGraphLine className="text-xl"/>
                    <p>XYZ-service@gmail.com</p>
                </div>
                <div className='flex items-center gap-2'>
                    <MdBusinessCenter className="text-xl"/>
                    <p>xyz-business@gmail.com</p>
                </div>
                <div className='flex items-center gap-2'>
                    <LuFileEdit className="text-xl"/>
                    <p>xyz-editorial@gmail.com</p>
                </div>
            </div>
        </div>
    </>
  )
}
