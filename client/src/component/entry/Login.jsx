import React, { useState } from 'react'

export default function Login() {
    const [email, setemail]=useState("")
    const [password, setpassword]=useState("")

    const register_user=async()=>{
        try{
            if(email && password){
                const res_user= await fetch("https://full-stack-novel.vercel.app/login-user",{
                    method:"POST",
                    credentials:"include",
                    headers:{
                        "content-type":"application/json"
                    },
                    body:JSON.stringify({
                        email,password
                    })
                })
                const resData=await res_user.json()
                console.log(resData)
                localStorage.setItem("userData",JSON.stringify(resData))


            }else(
                alert("Please fill all require fields.")
            )

        }catch(err){
            console.log(err)
        }
    }
  return (
    <>
        <div className='flex items-center justify-center h-[45vw]'>
            <div className='flex-col gap-4 items-center justify-center flex border-[1px] border-gray-300 shadow-md w-[30vw] p-5 rounded-md'>
                <div>
                    <h1 className='text-2xl'>Login</h1>
                </div>
                <div className='flex flex-col w-full gap-4'>
                    <input value={email} onChange={e=>setemail(e.target.value)} className='px-2 h-10 rounded-md bg-gray-200' type="email" name="email" placeholder='Email'/>
                    <input value={password} onChange={e=>setpassword(e.target.value)} className='px-2 h-10 rounded-md bg-gray-200' type="password" name="password" placeholder='Password'/>
                </div>
                <div className='w-full'>
                    <button onClick={e=>register_user()} className='w-full h-10 rounded-md text-white active:scale-95 bg-primary'>Login</button>
                </div>
            </div>
        </div>
    </>
  )
}
