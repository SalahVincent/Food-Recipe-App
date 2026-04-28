import React from 'react'

const Feed = () => {
  return (
    <div className='main-content flex flex-row px-20 gap-4'>

    <div className=" rounded-xl w-[25%]" > 
        <h1 className='border-b pb-3'>Who To Follow</h1>
        <div className='flex gap-4 mr-5'>
            <div className='flex gap items-center py-3'>
                <img className="h-12" src="./account.svg" alt="" />
            <h1 className='text-[16px] font-bold'>Nyap Bless</h1>
            </div>
            <button className='text-[#e64936] font-bold cursor-pointer'>Follow</button>
        </div>
        </div>

    <div className="rounded-xl w-[51.5%]">
        <h1 className='text-3xl py-3'>Your Culinary Feed</h1>
        <nav>
            <ul className='flex gap-3 my-2'>
                <li>Popular</li>
                <li>Recent</li>
            </ul>
        </nav>
        <div>
            <img
            className='rounded-[15px]'
            src="./dummy_bg.jpg" alt="dummy_post" />
        </div>
    </div>

    <div className='w-[20%]'>
    <div className="h-fit bg-[#0000000a] border-[#00000069] rounded-xl p-5" >
        <div className='flex flex-col justify-center items-center '>
            <img className="h-16" src="account.svg" alt="" />
            <h1 className='text-xl font-bold'>Vincent Salah</h1>
            <p className='text-[12px]'>Food Enthusiast</p>
            </div>
            </div>

            <footer className='text-[#000000a2] mt-5 flex flex-col items-center gap-3 sticky top-0'>
                <div className='text-[15px] gap-5 flex flex-wrap leading-1 py-3'>
                    <a href="">About</a>
                    <a href="">Help</a>
                    <a href="">Privacy</a>
                    <a href="">Terms</a>
                    <a href="">Logout</a>
                </div>
                <div className='flex flex-wrap'>
                    <h1 className='text-[19px] font-bold'>Cooker<sub>CMR</sub></h1>
                <span className='text-[12px]'>Rebase Code Camp © 2025-2026</span>
                </div>
                </footer>    
    </div>
    
    </div>
  )
}

export default Feed