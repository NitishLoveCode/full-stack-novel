import React from 'react'
import RecentCreate from '../novel/RecentCreate'

export default function Posts() {
    // ------------for RecentCreate page data---------------------------
    const RecentCreateData=
      {
      title:"The Cursed Alpha's Mate",
      imgurl:"https://cdn.joyreadings.com/novel_avatar_small/446e427b680b4008418ef1f12130238d.jpg",
      pages:"843",
      creat_at:"26-08-2023",
      publish:true,
      finish:true,
      novel_url:"#"
    }
    // -----------------for example in ResentCreate for wrong----------
    const RecentCreateData0=
      {
      title:"The Cursed Alpha's Mate",
      imgurl:"https://cdn.joyreadings.com/novel_avatar_small/446e427b680b4008418ef1f12130238d.jpg",
      pages:"843",
      creat_at:"26-08-2023",
      publish:false,
      finish:true,
      novel_url:"#"
    }
    const RecentCreateData1=
      {
      title:"The Cursed Alpha's Mate",
      imgurl:"https://cdn.joyreadings.com/novel_avatar_small/446e427b680b4008418ef1f12130238d.jpg",
      pages:"843",
      creat_at:"26-08-2023",
      publish:true,
      finish:false,
      novel_url:"#"
    }
    const RecentCreateData2=
      {
      title:"The Cursed Alpha's Mate",
      imgurl:"https://cdn.joyreadings.com/novel_avatar_small/446e427b680b4008418ef1f12130238d.jpg",
      pages:"843",
      creat_at:"26-08-2023",
      publish:false,
      finish:false,
      novel_url:"#"
    }

  return (
    <>
        <div className='mt-12 flex-col md:flex-row flex flex-wrap justify-between'>
          <RecentCreate novel_data={RecentCreateData}/>
          <RecentCreate novel_data={RecentCreateData0}/>
          <RecentCreate novel_data={RecentCreateData1}/>
          <RecentCreate novel_data={RecentCreateData1}/>
          <RecentCreate novel_data={RecentCreateData1}/>
          <RecentCreate novel_data={RecentCreateData1}/>
          <RecentCreate novel_data={RecentCreateData1}/>
          <RecentCreate novel_data={RecentCreateData1}/>
          <RecentCreate novel_data={RecentCreateData1}/>
        </div>
    </>
  )
}
