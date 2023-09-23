import React from 'react'
import { useLocation } from 'react-router-dom'
import Novels from "../component/Novels"
import Analytics from '../component/analytics/Analytics'
import Media from "../component/Media/Media"
import Approval from "../component/approval/Approval"
import Ediorprofile from "../component/User/Ediorprofile"
import Header from '../component/header/Header'
import Leftside from '../component/leftside/Leftside'
import NewNovelPage from '../component/novel/new/NewNovelPage'

export default function Dashboard() {
  const location=useLocation()
  console.log(location.pathname)
  return (
    <>
      <div>
        {/* ----------------------------heaer component---------------------------- */}
        <Header/>

        {/* --------------------------header component end------------- */}

          <div className='flex'>
            {/* -----------------left sidebar here------------------------- */}
            <Leftside/>
            {/* --------------------left sidebar end---------------------------- */}

            <div className="w-full pt-20 pr-1 pl-[15vw]">

            {

            location.pathname=="/novel/editor/dashboard"? <Novels/>:""
            
            }
            {
            location.pathname=="/novel/editor/Analytics"? <Analytics/>:""
            }
            {
              location.pathname=="/novel/editor/media" ? <Media/>:""
            }
            {
              location.pathname=="/novel/editor/approval" ? <Approval/>:""
            }
            {
              location.pathname=="/novel/editor/user" ? <Ediorprofile/>:""
            }
            {
              location.pathname=="/novel/editor/new-novel-page" ? <NewNovelPage/>:""
            }

            </div>

          </div>

      

      </div>
    </>
  )
}
