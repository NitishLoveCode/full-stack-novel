import React, { useState } from 'react'
import {BsThreeDotsVertical} from "react-icons/bs"
import {MdVerified} from "react-icons/md"
import ChildComment from './ChildComment'

export default function Comment() {
    const [childComment, setchildComment]=useState(null)

    const [writeComment, setwriteComment]=useState(null)
    const [goforName, setgoforName]=useState(false)
    const [commentName, setcommentName]= useState(null)

    const onChildComment=()=>{
        if(childComment==null){
            setchildComment("Child comment Data here")
        }else{
            setchildComment(null)
        }
    }
    const postComment=()=>{
        if(writeComment !==null){
            setgoforName(true)
        }
    }
  return (
    <>
        <div className='overflow-y-scroll w-[85vw] sm:top-[20vh] border-[0.8px] border-gray-400 rounded-xl h-[80vh] sm:w-[50vw] bg-white opacity-90 absolute'>
            
            <div className='mb-8'>
                <div className='text-gray-900 text-[16px] m-2 sm:m-5'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                            <div className='w-12 h-12 sm:w-16 sm:h-16 bg-fuchsia-400 rounded-full'></div>
                            <div><p>Nitish kumar</p></div>
                        </div>
                        
                        <div>1 hour ago</div>
                        <div className='text-xl'><MdVerified/></div>
                        <div><BsThreeDotsVertical/></div>
                    </div>
                    <div className='text-start leading-5 ml-5'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ratione omnis molestias laudantium deleniti amet provident recusandae explicabo, debitis nostrum.</p>
                    </div>
                    <div className='flex items-center ml-6 m-2 gap-5'>
                        <div className='cursor-pointer bg-gray-300 w-14 h-7 items-center flex rounded-full pl-1'>😀 1</div>
                        <div className='cursor-pointer bg-gray-300 w-14 h-7 items-center flex rounded-full pl-1 '>👏 1</div>
                        <div onClick={()=>onChildComment()} className='cursor-pointer bg-gray-300 text-gray-600 w-20 h-7 items-center flex rounded-full pl-1 '>Replay 1</div>
                        
                    </div>
                    <hr />
                   {/* --------------------------------child comment---------------------- */}
                        {childComment !==null ? <ChildComment/>:""}
                    {/* ----------------------------child end---------------------------- */}

                    
                </div>


                <div className='text-gray-900 text-[16px] m-2 sm:m-5'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                            <div className='w-12 h-12 sm:w-16 sm:h-16 bg-fuchsia-400 rounded-full'></div>
                            <div><p>Nitish kumar</p></div>
                        </div>
                        
                        <div>1 hour ago</div>
                        <div className='text-xl'><MdVerified/></div>
                        <div><BsThreeDotsVertical/></div>
                    </div>
                    <div className='text-start leading-5 ml-5'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ratione omnis molestias laudantium deleniti amet provident recusandae explicabo, debitis nostrum.</p>
                    </div>
                    <div className='flex items-center ml-6 m-2 gap-5'>
                        <div className='cursor-pointer bg-gray-300 w-14 h-7 items-center flex rounded-full pl-1'>😀 1</div>
                        <div className='cursor-pointer bg-gray-300 w-14 h-7 items-center flex rounded-full pl-1 '>👏 1</div>
                        <div onClick={()=>onChildComment()} className='cursor-pointer bg-gray-300 text-gray-600 w-20 h-7 items-center flex rounded-full pl-1 '>Replay 1</div>
                        
                    </div>
                    <hr />
                   {/* --------------------------------child comment---------------------- */}
                        {childComment !==null ? <ChildComment/>:""}
                    {/* ----------------------------child end---------------------------- */}

                    
                </div>

                <div className='text-gray-900 text-[16px] m-2 sm:m-5'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                            <div className='w-12 h-12 sm:w-16 sm:h-16 bg-fuchsia-400 rounded-full'></div>
                            <div><p>Nitish kumar</p></div>
                        </div>
                        
                        <div>1 hour ago</div>
                        <div className='text-xl'><MdVerified/></div>
                        <div><BsThreeDotsVertical/></div>
                    </div>
                    <div className='text-start leading-5 ml-5'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ratione omnis molestias laudantium deleniti amet provident recusandae explicabo, debitis nostrum.</p>
                    </div>
                    <div className='flex items-center ml-6 m-2 gap-5'>
                        <div className='cursor-pointer bg-gray-300 w-14 h-7 items-center flex rounded-full pl-1'>😀 1</div>
                        <div className='cursor-pointer bg-gray-300 w-14 h-7 items-center flex rounded-full pl-1 '>👏 1</div>
                        <div onClick={()=>onChildComment()} className='cursor-pointer bg-gray-300 text-gray-600 w-20 h-7 items-center flex rounded-full pl-1 '>Replay 1</div>
                        
                    </div>
                    <hr />
                   {/* --------------------------------child comment---------------------- */}
                        {childComment !==null ? <ChildComment/>:""}
                    {/* ----------------------------child end---------------------------- */}

                    
                </div>


                <div className='text-gray-900 text-[16px] m-2 sm:m-5'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                            <div className='w-12 h-12 sm:w-16 sm:h-16 bg-fuchsia-400 rounded-full'></div>
                            <div><p>Nitish kumar</p></div>
                        </div>
                        
                        <div>1 hour ago</div>
                        <div className='text-xl'><MdVerified/></div>
                        <div><BsThreeDotsVertical/></div>
                    </div>
                    <div className='text-start leading-5 ml-5'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ratione omnis molestias laudantium deleniti amet provident recusandae explicabo, debitis nostrum.</p>
                    </div>
                    <div className='flex items-center ml-6 m-2 gap-5'>
                        <div className='cursor-pointer bg-gray-300 w-14 h-7 items-center flex rounded-full pl-1'>😀 1</div>
                        <div className='cursor-pointer bg-gray-300 w-14 h-7 items-center flex rounded-full pl-1 '>👏 1</div>
                        <div onClick={()=>onChildComment()} className='cursor-pointer bg-gray-300 text-gray-600 w-20 h-7 items-center flex rounded-full pl-1 '>Replay 1</div>
                        
                    </div>
                    <hr />
                   {/* --------------------------------child comment---------------------- */}
                        {childComment !==null ? <ChildComment/>:""}
                    {/* ----------------------------child end---------------------------- */}

                    
                </div>

                <div className='text-gray-900 text-[16px] m-2 sm:m-5'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                            <div className='w-12 h-12 sm:w-16 sm:h-16 bg-fuchsia-400 rounded-full'></div>
                            <div><p>Nitish kumar</p></div>
                        </div>
                        
                        <div>1 hour ago</div>
                        <div className='text-xl'><MdVerified/></div>
                        <div><BsThreeDotsVertical/></div>
                    </div>
                    <div className='text-start leading-5 ml-5'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ratione omnis molestias laudantium deleniti amet provident recusandae explicabo, debitis nostrum.</p>
                    </div>
                    <div className='flex items-center ml-6 m-2 gap-5'>
                        <div className='cursor-pointer bg-gray-300 w-14 h-7 items-center flex rounded-full pl-1'>😀 1</div>
                        <div className='cursor-pointer bg-gray-300 w-14 h-7 items-center flex rounded-full pl-1 '>👏 1</div>
                        <div onClick={()=>onChildComment()} className='cursor-pointer bg-gray-300 text-gray-600 w-20 h-7 items-center flex rounded-full pl-1 '>Replay 1</div>
                        
                    </div>
                    <hr />
                   {/* --------------------------------child comment---------------------- */}
                        {childComment !==null ? <ChildComment/>:""}
                    {/* ----------------------------child end---------------------------- */}

                    
                </div>

                <div className='text-gray-900 text-[16px] m-2 sm:m-5'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                            <div className='w-12 h-12 sm:w-16 sm:h-16 bg-fuchsia-400 rounded-full'></div>
                            <div><p>Nitish kumar</p></div>
                        </div>
                        
                        <div>1 hour ago</div>
                        <div className='text-xl'><MdVerified/></div>
                        <div><BsThreeDotsVertical/></div>
                    </div>
                    <div className='text-start leading-5 ml-5'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ratione omnis molestias laudantium deleniti amet provident recusandae explicabo, debitis nostrum.</p>
                    </div>
                    <div className='flex items-center ml-6 m-2 gap-5'>
                        <div className='cursor-pointer bg-gray-300 w-14 h-7 items-center flex rounded-full pl-1'>😀 1</div>
                        <div className='cursor-pointer bg-gray-300 w-14 h-7 items-center flex rounded-full pl-1 '>👏 1</div>
                        <div onClick={()=>onChildComment()} className='cursor-pointer bg-gray-300 text-gray-600 w-20 h-7 items-center flex rounded-full pl-1 '>Replay 1</div>
                        
                    </div>
                    <hr />
                   {/* --------------------------------child comment---------------------- */}
                        {childComment !==null ? <ChildComment/>:""}
                    {/* ----------------------------child end---------------------------- */}

                    
                </div>

                <div className='text-gray-900 text-[16px] m-2 sm:m-5'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                            <div className='w-12 h-12 sm:w-16 sm:h-16 bg-fuchsia-400 rounded-full'></div>
                            <div><p>Nitish kumar</p></div>
                        </div>
                        
                        <div>1 hour ago</div>
                        <div className='text-xl'><MdVerified/></div>
                        <div><BsThreeDotsVertical/></div>
                    </div>
                    <div className='text-start leading-5 ml-5'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ratione omnis molestias laudantium deleniti amet provident recusandae explicabo, debitis nostrum.</p>
                    </div>
                    <div className='flex items-center ml-6 m-2 gap-5'>
                        <div className='cursor-pointer bg-gray-300 w-14 h-7 items-center flex rounded-full pl-1'>😀 1</div>
                        <div className='cursor-pointer bg-gray-300 w-14 h-7 items-center flex rounded-full pl-1 '>👏 1</div>
                        <div onClick={()=>onChildComment()} className='cursor-pointer bg-gray-300 text-gray-600 w-20 h-7 items-center flex rounded-full pl-1 '>Replay 1</div>
                        
                    </div>
                    <hr />
                   {/* --------------------------------child comment---------------------- */}
                        {childComment !==null ? <ChildComment/>:""}
                    {/* ----------------------------child end---------------------------- */}

                    
                </div>
    
            </div>
            <div className='sticky bottom-1 w-full bg-white  flex justify-between gap-1'>
            
                 <input onChange={(e)=>setwriteComment(e.target.value)} placeholder='add comment' className={`placeholder:text-gray-700 ml-2 pl-2 pr-2 w-[80%] ${goforName==false? "":"hidden"} bg-gray-200 border-[1px] rounded-2xl border-gray-300 h-12 outline-none ml-1 pr-1`} type="text"/>
                 <input onChange={(e)=>setcommentName(e.target.value)} placeholder='Your name please' className={`placeholder:text-gray-700 ml-2 pl-2 pr-2 w-[80%] ${goforName==false? "hidden":""} bg-gray-200 border-[1px] rounded-2xl border-gray-300 h-12 outline-none ml-1-10 pr-1`} type="text" name="" id="" />

                <button onClick={()=>postComment()} className='border-[1px] text-white bg-primary opacity-100 rounded-2xl border-gray-300 h-12 w-24'>Post</button>
            </div>
            
        </div>
    </>
  )
}
