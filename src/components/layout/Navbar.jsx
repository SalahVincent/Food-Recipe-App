import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='navbar flex flex-wrap items-center justify-between px-10 py-3 '>
        <label>
            <h1 className='font-bold text-[#e63946] text-[2.5rem]'>Cook<span className='navbar-span'>er</span><sub className='font-[Inter] text-[20px]'>CMR</sub></h1>
        </label>
        <nav>
            <ul className='flex flex-row gap-3'>
                <li><a href="/">Dashboard</a></li>
                <li><a href="/favorites">Favorites</a></li>
            </ul>
        </nav>
        <form action="submit" className='bg-[#00000013] flex items-center gap-2 px-3 py-1.5 rounded-2xl'>
            <img src="./search.svg" alt="search icon" className='cursor-pointer' />
            <input type="text" placeholder="Search recipes..." />
        </form>
    </div>
    </>
  )
}

export default Navbar