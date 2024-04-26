import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-[#260d3c] text-[white] flex justify-between items-center h-16 px-6'>
        <div className='logo font-bold'>GetMeAChai!</div>
        <ul className='flex gap-5'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Sign Up</li>
            <li>Login</li>
        </ul>
    </nav>
  )
}

export default Navbar