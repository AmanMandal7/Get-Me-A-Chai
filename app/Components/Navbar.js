import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='bg-[#260d3c] text-[white] flex justify-between items-center h-16 px-6 backdrop-blur-[5px]'>
        <div className='logo font-bold text-lg tracking-[1.5px]'>Get Me A Chai!</div>
        {/* <ul className='flex gap-5'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Sign Up</li>
            <li>Login</li>
        </ul> */}

        <div>
          <Link href={"/Login"}>
            <button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
          </Link>
        </div>
    </nav>
  )
}

export default Navbar