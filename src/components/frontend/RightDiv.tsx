"use client"
import React from 'react'
import RightSidebar from './RightSidebar'
import PersonalMessage from './Messages/PersonalMessage'
import { usePathname } from 'next/navigation'




const RightDiv = () => {
    const pathname = usePathname()
    const isMessagesRoute = pathname === "/messages";

  return (
    <div>
        {isMessagesRoute ? <PersonalMessage /> : <RightSidebar />}
    </div>
  )
}

export default RightDiv