import React from 'react'
import { useLocation } from 'react-router-dom'
import Novels from "../component/Novels"
import Analytics from '../component/analytics/Analytics'
import Media from "../component/Media/Media"
import Approval from "../component/approval/Approval"
import Ediorprofile from "../component/User/Ediorprofile"
import Header from '../component/header/Header'
import Leftside from '../component/leftside/Leftside'
import AllPost from './adminfun/AllPost'
import Customized from './adminfun/Customized'
import Comment from './adminfun/Comment'
import Editors from './adminfun/Editors'
import Redirection from './adminfun/Redirection'

export default function AdminDashboard() {
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

            location.pathname=="/novel/admin/dashboard"? <Novels/>:""
            
            }
            {

            location.pathname=="/novel/admin/all-post"? <AllPost/>:""
            
            }
            {

            location.pathname=="/novel/admin/customize"? <Customized/>:""

            }
            {

            location.pathname=="/novel/admin/editors"? <Editors/>:""

            }
            {

            location.pathname=="/novel/admin/redirection"? <Redirection/>:""

            }
            {
            location.pathname=="/novel/admin/Analytics"? <Analytics/>:""
            }
            {
              location.pathname=="/novel/admin/media" ? <Media/>:""
            }
            {
              location.pathname=="/novel/admin/comment" ? <Comment/>:""
            }
            {
              location.pathname=="/novel/admin/approval" ? <Approval/>:""
            }
            {
              location.pathname=="/novel/admin/user" ? <Ediorprofile/>:""
            }

            </div>

          </div>

      

      </div>
    </>
  )
}
