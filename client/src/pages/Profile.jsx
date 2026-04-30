import React from 'react'

const Profile = () => {
  return (
    <div className='px-20 py-10 flex gap-10'>
        <div className='w-[65%] bg-[#00000013] h-100'>
            <div className='flex flex-col justify-center items-center '>
            <img className="w-16 h-16" src="./account.svg" alt="account icon" />
            <h1 className='text-xl font-bold'>Vincent Salah</h1>
            <p className='text-[12px]'>Food Enthusiast</p>
            </div>
        </div>
        <div className='w-[35%] p-6 rounded-3xl border border-[#00000013] h-fit'>
          <p>SAVED RECIPES</p>
        </div>
    </div>
  )
}

export default Profile