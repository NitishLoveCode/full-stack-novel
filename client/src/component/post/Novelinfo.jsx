import React from 'react'
import {AiOutlineHeart} from "react-icons/ai"
import Heading from "../heading/Heading"
import CardThreeCol from '../home/CardThreeCol'
import FooterMaster from '../footer/FooterMaster'
import {BsFillEyeFill} from "react-icons/bs"
import {AiOutlineLike} from "react-icons/ai"

export default function Novelinfo() {
  return (
    <>
        <div className='sm:ml-20 sm:mr-20'>
        <div className='mt-14 sm:mt-28 shadow-2xl rounded-lg p-2 sm:p-10'>
            <div className='flex sm:items-center gap-2 sm:gap-10'>
                <div className='shadow-2xl justify-center items-center w-48 sm:w-60 rounded-md overflow-hidden'>
                    <img src="https://cdn.joyreadings.com/novel_avatar_medium_m/5d0169973f2334845b8cf9bd222e1d0d.jpg" alt="book name" />
                </div>
                <div className="flex flex-col sm:gap-8">
                    <h1 className='sm:text-3xl font-bold'>The Princess to Eight Uncles</h1>
                    <div>
                        <span>Contemporary</span>
                        <span> | Ongoing</span>
                        <span> | Chapter 1222</span>
                    </div>
                    <div className='flex justify-between flex-row sm:gap-40 bg-gray-200 sm:p-5 sm:justify-center rounded-sm'>
                        <div>
                            <div className='flex items-center gap-1'>
                            <BsFillEyeFill/>
                            <p>4523435</p>
                            </div>
                            <p>Reads</p>
                        </div>
                        <div>
                            <div className='flex items-center gap-1'>
                                <AiOutlineLike/>
                                <p>453252</p>
                            </div>
                            <p>Likes</p>
                        </div>
                    </div>
                    <div className='hidden sm:block'>
                        <div className=' flex sm:mt-0 sm:gap-40 text-xl'>
                            <button className='bg-primary sm:p-2 sm:pl-5 sm:pr-5 active:bg-purple-200 text-white rounded-full'>Start Reading</button>
                            <div className='cursor-pointer flex items-center sm:gap-2 border-2 border-red-300 sm:pl-2 sm:pr-2 text-red-300 rounded-full'>
                                <AiOutlineHeart/>
                                <button>Add To Library</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='sm:hidden mt-3'>
                    <div className='flex justify-between sm:mt-0 sm:gap-40 text-xl'>
                        <button className='bg-primary p-1 active:bg-purple-200 text-white rounded-full'>Start Reading</button>
                        <div className='cursor-pointer flex items-center gap-2 border-2 border-red-300 p-1 text-red-300 rounded-full'>
                            <AiOutlineHeart/>
                            <button>Add To Library</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <p>
                    
                Lily was forced to kneel in the freezing snow for a full day because her stepmother had suffered a fall, resulting in a miscarriage. As a result, she was exiled from home because her family believed she brought bad luck. However, just as she was at the brink of death, all eight of her uncles arrived in time to save her. The eldest uncle said, 'It's time for the Hatcher family to go bankrupt.' Her second uncle exclaimed, 'Anyone who harms Lily will be dead!' Mr. Crawford was so furious that he beat her useless father to a pulp while pleading, 'So what if she's the daughter of the Crawford family? She's a jinx that caused her mother's death and her father's bankruptcy!' Little did they know that as soon as Lily returned to the Crawford family, her luck improved, and even the bedridden Mrs. Crawford regained her strength. Lily was later blessed with an amazing father who loved her dearly.
      
                </p>
            </div>
        </div>

        {
            <>
            <Heading Heading={"You may also like"}/>
            <CardThreeCol/>
            
            </>

        }
    </div>
    {
        <FooterMaster/>
    }
        
    </>
  )
}
