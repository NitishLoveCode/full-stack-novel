import React from 'react'
import Search from './novel/Search'
import Createaction from './novel/Createaction'
import NovelPostinfo from './novel/NovelPostinfo'
import RecentCreate from './novel/RecentCreate'
import Posts from "../component/post/Posts"

export default function Novels() {
  
  // static image for on going novel----------
  const BgGoingNovel="https://cdn.joyreadings.com/novel_avatar_small_m/178d07f3750c7fc934cd599cc2e771a7.jpg"

  
  

  return (
    <>
      <div>
        <Search/>
        <div className='sm:flex gap-2 flex flex-col sm:flex-row sm:gap-10 mt-12'>
          <Createaction bg_img={BgGoingNovel} actionName={"Continue eaditing"}/>
          <Createaction bg_img={BgGoingNovel} new_novel={"new create"} actionName={"Create new Novel"}/>
          <NovelPostinfo/>
        </div>
        {/* ------recent Create novel */}
        <Posts/>
        <Posts/>
        <Posts/>
        <Posts/>
        <Posts/>
        <Posts/>
      </div>
    </>
  )
}
