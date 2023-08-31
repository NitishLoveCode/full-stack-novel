import React, { useEffect, useState } from 'react'
import DeskFooter from './DeskFooter'
import PhoneFooter from './PhoneFooter'

export default function FooterMaster() {
    const devise=window.innerWidth
    console.log(devise)
    
  return (
    <>
        {
            devise>=768 ? <DeskFooter/> :<PhoneFooter/>
        }
    </>
  )
}
