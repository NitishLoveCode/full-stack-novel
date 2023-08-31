import React from 'react'
import { Link } from 'react-router-dom'
import {BiLibrary} from "react-icons/bi"
import {RiSearchLine} from "react-icons/ri"


export default function Navbar() {
  return (
    <>
        <header className='fixed z-10 top-0 w-full bg-slate-100'>
            <div className='flex pl-1 pr-4 sm:pr-20 sm:pl-20 items-center justify-between pt-3 pb-3 shadow-sm'>
                <div className='flex items-center pl-2'>
                    <div className="phone_logo sm:hidden w-20"> 
                        <img src="https://cdn.joyreadings.com/web/joyread-pc/en/img/logo.f781e9b.png" alt="logo for phone" />
                    </div>
                    <div className='desktop_logo hidden sm:block w-[129px]'>
                        <img src="https://cdn.joyreadings.com/web/joyread-pc/en/img/main-logo.a7653db.png" alt="Logo" />
                    </div>
                    <menu className='hidden sm:hidden lg:block '>
                        <div className='flex ml-20 md:10 gap-5 text-gray-600'>
                            <Link>Home</Link>
                            <Link>Ranking</Link>
                            <Link>Genres</Link>
                        </div>
                    </menu>
                </div>
                <div className='hidden sm:block'>
                    <div className='flex items-center gap-10 text-gray-600'>
                            <div className="border-2 rounded-full flex items-center pl-4 pr-4 pt-1 pb-1">
                                <input className='sm:w-1 bg-transparent md:w-40 outline-none' type="text" name="" placeholder='Search' />
                                <RiSearchLine className='cursor-pointer pl-1 text-2xl font-bold text-primary'/>
                            </div>
                            <div className="library flex items-center gap-1">
                                <BiLibrary className='text-xl'/>
                                <p>Library</p>
                            </div>
                            <div className=" cursor-pointer justify-center login pl-6 pr-6 pt-1 pb-1 text-white bg-primary rounded-full">
                                <button>Log in</button>
                            </div>
                    </div>
                </div>
                <div className='sm:hidden'>
                    <div className='flex items-center gap-4'>
                        <RiSearchLine className='text-primary text-2xl'/>
                        <img className='w-5' src="https://cdn.joyreadings.com/web/joyread-pc/en/img/menu.e61b567.png" alt="search icon" />
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}
