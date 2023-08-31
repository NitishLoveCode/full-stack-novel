import React from 'react'
import CarosoulMaster from '../carousel/CarosoulMaster'
import Heading from '../heading/Heading'
import CardThreeCol from './CardThreeCol'
import Hometag from '../tag/Hometag'
import InfiniteLoad from '../infinitescroll/InfiniteLoad'
import FooterMaster from '../footer/FooterMaster'

export default function Home() {
  return (
    <>
        {
            <>
            <div className='sm:pr-20 sm:pl-20'>
            <CarosoulMaster />
            <Heading Heading={"Editor's Picks"}/>
            <CardThreeCol/>
            <Heading Heading={"Popular Tranding"}/>
            <Hometag/>
            <CardThreeCol/>
            <Heading Heading={"You may also like"}/>
            <InfiniteLoad/>
            </div>
            <FooterMaster/>
            </>
        }
    </>
  )
}
