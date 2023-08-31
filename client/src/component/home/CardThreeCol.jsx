import React from 'react'
import {BsFillEyeFill} from "react-icons/bs"

export default function CardThreeCol() {
     
    const books=[
        {name:"His Promise: The Mafia's Babies", view:"342342", catogery:"Billionaire", img:"https://cdn.joyreadings.com/novel_avatar_small_m/4342d337fc67eb4ba719b6fe63576e48.jpg"},
        {name:"My Baby's Daddy", view:"342342", catogery:"Billionaire", img:"https://cdn.joyreadings.com/novel_avatar_small_m/2d3c3973e3cb67b3aa5caa819c8762e5.jpg"},
        {name:"forbidden Heat", view:"342342", catogery:"Billionaire", img:"https://cdn.joyreadings.com/novel_avatar_small_m/3df1a9b4ba231da5627d99827fd53f5d.jpg"},
        {name:"God of War: Pinnacle", view:"342342", catogery:"Billionaire", img:"https://cdn.joyreadings.com/novel_avatar_small_m/178d07f3750c7fc934cd599cc2e771a7.jpg"},
        {name:"The Princess to Eight Uncles", view:"342342", catogery:"Billionaire", img:"https://cdn.joyreadings.com/novel_avatar_small/31a7ee6e7fcac749a6d61b286150031d.jpg"},
        {name:"Mysterious Male Escort Is a Mogul", view:"342342", catogery:"Billionaire", img:"https://cdn.joyreadings.com/novel_avatar_small_m/9e548cda56337ece79f933409e9587cd.jpg"},
    ]


  return (
    <>
        <div className='grid grid-cols-3 sm:gap-10 mt-10 mb-10 justify-between'>

            {
                books?.map((curElement, i) =>{
                    return(
                        <>
                        <div class="flex justify-center">
                            <div className='sm:flex sm:flex-col lg:flex-row items-center justify-center'>
                                <div className="w-24 sm:w-36 rounded-lg overflow-hidden shadow-gray-500 shadow-2xl">
                                    <img src={curElement?.img} alt="Book info" />
                                </div>
                                <div className='hidden lg:block'>
                                    <div className='pl-3 gap-3 flex flex-col justify-center bg-gray-200 w-52 shadow-gray-300 shadow-lg cursor-pointer hover:bg-gray-100 rounded-br-2xl rounded-tr-2xl h-40'>
                                        <h2 className='text-2xl font-semibold'>{curElement?.name}</h2>
                                        <span className='flex items-center gap-1'><BsFillEyeFill/> {curElement?.view}</span>
                                        <p className='text-primary'>{curElement?.catogery}</p>
                                    </div>
                                </div>
                                <p className='w-24 lg:hidden'>{curElement?.name}</p>
                            </div>
                        </div>
                        </>
                    )
                })
            }
        </div>

    </>
  )
}
