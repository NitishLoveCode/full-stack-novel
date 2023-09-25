import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {BsPlusSquareDotted} from "react-icons/bs"
import Select_novel from './Select_novel';
import CreateCoverPage from './CreateCoverPage';


export default function NewNovelPage() {
    const [content,setcontent]=useState(null)
    const [select_novel, setselect_novel]=useState(false)
    const [newCoverPage, setnewCoverPage]=useState(false)


    const open_select_toggle=()=>{
        if(select_novel===true){
            setselect_novel(false)
        }else{
            setselect_novel(true)
        }
    }

    const open_create_new=()=>{
        if(newCoverPage===true){
            setnewCoverPage(false)
        }else{
            setnewCoverPage(true)
        }
    }

  return (
    <>
    <div className='flex relative'>
        <div className='w-[57vw]'>
            <div>
                <input className='w-full h-10 outline-primary bg-gray-200 rounded-xl pl-3' type="text" name="title" placeholder='Title'/>
            </div>
            <div>
                <input className='w-full h-10 outline-primary bg-gray-200 rounded-xl pl-3 mt-2' type="text" name="url" placeholder='URL'/>
            </div>
            <div className='mt-4 h-[72vh]'>
                {/* <textarea className='w-full rounded-md h-full outline-primary outline-4 bg-gray-200 p-3' name="content" placeholder='Content'></textarea> */}
                <div style={{height: 430}}>
                   <ReactQuill className='h-full' theme="snow" value={content} onChange={setcontent} />
                </div>
            </div>
        </div>


        <div className='w-[30vw] ml-4'>
            <div className='flex items-center justify-between'>
                <button className='bg-primary p-3 rounded-md active:scale-95 text-white px-14'>Publish</button>
                <button className='bg-gray-500 p-3 rounded-md active:scale-95 text-white px-14 '>Save Draft</button>
            </div>

            {/* -------------discription----------- */}
            <div>
                <textarea className='w-full h-28 bg-gray-200 outline-primary mt-4 p-2 rounded-md' name="description" placeholder='Description' ></textarea>
            </div>

            <div className='flex justify-between mt-5'>
                <button onClick={()=>open_select_toggle()} className='bg-primary p-2 px-3 text-white rounded-md active:scale-95'>Select novel</button>
                <button onClick={()=>open_create_new()} className='bg-gray-300 p-2 px-3 rounded-md active:scale-95'>Create new</button>
                <button className='bg-gray-300 p-2 px-3 rounded-md'>Last page: 298</button>
            </div>


            <div className='mt-8'>
                <div className='flex justify-between'>
                    <div className='bg-gray-200 active:scale-95 h-36 rounded-md flex items-center justify-center w-[55%]'>
                        <BsPlusSquareDotted className="text-4xl"/>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <button className='bg-primary p-2 rounded-md text-white py-3 active:scale-95'>Gallery</button>
                        <button className='bg-gray-300 p-2 rounded-md text-gray-900 py-3'>Current Page: 299</button>
                    </div>
                </div>
            </div>

            <div className='mt-5'>
                <input className='w-full h-12 px-2 outline-primary rounded-md bg-gray-200' type="text" name="tag" placeholder='tag1, tag2'/>
            </div>
            {/* --------------bottom for Delete section---------------- */}
            <div className='mt-8 p-2 active:scale-95 flex items-center justify-center text-lg text-white rounded-lg bg-gradient-to-r from-purple-500 to-pink-500'>
                <button>Delete</button>
            </div>

        </div>


        {/* -----------------select novel for adding pages---------------- */}
        <div className={`absolute`}>
            {
                select_novel? <Select_novel/> :""
            }
        </div>
        {/* ----------------------for creating new novel----------------- */}
        <div className={`absolute`}>
            {
                newCoverPage? <CreateCoverPage/> :""
            }
        </div>
    </div>
    </>
  )
}
