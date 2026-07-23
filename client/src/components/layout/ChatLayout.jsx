import React from 'react'
import { Outlet } from 'react-router'

const ChatLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default ChatLayout