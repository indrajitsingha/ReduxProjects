import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
   <div className="w-full text-white bg-black dark-mode:text-gray-200 dark-mode:bg-gray-800">
  <div  className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
    <div className="p-4 flex flex-row items-center justify-between">
      <a href="#" className="text-lg font-semibold tracking-widest text-white uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline font-serif">Redux Apps</a>
      <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline" >
        <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
          <path x-show="!open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
          <path x-show="open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>
    <nav className="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row">
      <NavLink to='/' className="px-4 py-2 mt-2 text-sm font-semibold text-white  rounded-lg  ">Counter</NavLink>
      <NavLink to='/todoapp' className="px-4 py-2 mt-2 text-sm font-semibold text-white  rounded-lg ">Todo app</NavLink>
      <NavLink to="/Store" className="px-4 py-2 mt-2 text-sm font-semibold text-white rounded-lg">Store app</NavLink>
      
    </nav>
  </div>
</div>
    
   </>
  )
}

export default Navbar