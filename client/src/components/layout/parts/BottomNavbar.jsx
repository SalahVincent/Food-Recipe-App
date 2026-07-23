import React from 'react'

const BottomNavbar = () => {
  return (
    <>
    <div className='sticky bottom-0 bg-[white] h-15 backdrop-blur-[3px] flex justify-between px-35 py-2.5'>
        <img
        className=''
        src="./account.svg" alt="" />
        <img
        className=''
        src="./dashboard.svg" alt="" />
        <img
        className=''
        src="./notifications.svg" alt="" />
    </div>
    </>
  )
}

export default BottomNavbar