import React, { useState } from 'react'
import {BsPlusSquareDotted} from "react-icons/bs"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function CreateCoverPage() {
    const [title, settitle]=useState("")
    const [description, setdescription]=useState("")
    const [author, setauthor]=useState("")
    const [coverimg, setcoverimg]=useState(null)
    const [TotalPage, setTotalPage]=useState(0)

    // -------------tost Notification----------------
        const sucessNotify=()=>{
                toast.success('New novel Created', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
        }
    // ------------------------------------------------

    // -------------calling localStorage for user information------------
    const userData=JSON.parse(localStorage.getItem("userData"))
    const userId=userData.id

    // ----------local image upload---------------------
    const uploadLocalImage=async(ev)=>{
        const files=ev.target.files
        const data= new FormData()
        for(let i=0;i<files.length;i++){
            data.append('photos',files[i])
        }
        try{
            axios.post("http://localhost:8000/local-img-upload",
            data,{
                headers:{
                    "Content-type":"mulitpart/form-data"
                }
            }).then(res=>{
                setcoverimg(...res.data)
            })
        }catch(err){
            console.log(err)
        }
    }


    // ----------------sending data to backend-------------
    const createNewCoverPage=async()=>{
        if(title && description && author){
            const res=await fetch("http://localhost:8000/new-nove-cover-page",{
            credentials:"include",
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({
                title,description,author,coverimg,userId,TotalPage
            })
        })
        const data=await res.json()
        localStorage.setItem("selected_novel_for_edit",JSON.stringify(data))
        if(res.status===201){
            sucessNotify()
            setTimeout(function () {
                // Reload the page after 2 seconds
                window.location.reload();
            }, 2000)
        }

        }else{
            alert("Please fill all require fields")
        }
    }
  return (
    <>
        <div className='flex flex-col p-4 gap-4 overflow-hidden bg-gray-200 border-[1px] border-gray-400 overflow-y-scroll 
            m-10 rounded-xl w-[50vw] h-[60vh]'>
        <div>
            <input value={title} onChange={e=>settitle(e.target.value)} className='h-9 p-2 outline-primary rounded-md w-[45vw]' type="text" name="search" placeholder='Novel Title'/>
        </div>
        <div>
            <textarea value={description} onChange={e=>setdescription(e.target.value)} name="description"  className='outline-primary w-[45vw] p-2' placeholder='Description'></textarea>
        </div>
        <div className='flex gap-2'>
            <label className='bg-white active:scale-95 h-36 rounded-md flex items-center justify-center w-[25%]'htmlFor="create_new_Cover_Page">
                {
                   coverimg !==null ? <img src={`http://localhost:8000/uploads/${coverimg}`} alt="cover imge" /> :<>
                   <input onChange={uploadLocalImage} className='hidden' type="file" name="image" id="create_new_Cover_Page" />
                <BsPlusSquareDotted className="text-4xl"/></>
                }
            </label>
            <div className='flex flex-col gap-2'>
                <input value={author} onChange={e=>setauthor(e.target.value)} className='w-[33vw] h-8 rounded-md pl-2' placeholder='Author' type="text" />
            </div>
            
        </div>
        <div>
            <button onClick={()=>createNewCoverPage()} className='w-full bg-primary h-10 text-xl text-white mt-5 rounded-md active:scale-95'>Create new</button>
        </div>
        
        {/* -----tost Notification---------------- */}
        <>
        <ToastContainer/>
        </>
    </div>

    </>
  )
}
