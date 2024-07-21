import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo2 from "../../assets/logo2.png"

const Navbar = () => {
  return (
    <div className=''>
      <header className="p-4">
        <div className="container flex justify-between h-16 mx-auto">
          <div className="flex justify-between w-full">
            <Link  href="/" aria-label="Back to homepage" className="flex items-center p-2">
            <Image src={logo2} quality={100} className='w-12' alt='logo' />
            <span className='text-gray-600 text-2xl font-semibold'> CryptoTracker</span>
            </Link>
            <ul className="items-stretch hidden space-x-3 lg:flex">
              <li className="flex justify-between w-full">
                <a rel="noopener noreferrer" className="flex cursor-pointer  items-center px-4 -mb-1 font-semibold dark:border-transparent">Home</a>
              </li>
              <li className="flex">
                <a rel="noopener noreferrer" className="flex cursor-pointer  items-center px-4 -mb-1 font-semibold ">Exchanges</a>
              </li>
              <li className="flex">
                <a rel="noopener noreferrer" className="flex  cursor-pointer items-center px-4 -mb-1 font-semibold dark:border-transparent">Services</a>
              </li>
              <li className="flex">
                <a rel="noopener noreferrer" className="flex cursor-pointer  items-center px-4 -mb-1 font-semibold dark:border-transparent">News</a>
              </li>
              <li className="flex">
                <a rel="noopener noreferrer" className="flex cursor-pointer  items-center px-4 -mb-1 font-semibold dark:border-transparent">Contact</a>
              </li>
            </ul>
          </div>
       
          <button className="p-0 relative left-4 lg:hidden">

            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              </label>
              <div className='w-32 sm:w-56'>

                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a>Home</a></li>
                  <li><a>Exchanges</a></li>
                  <li><a>Services</a></li>
                  <li><a>News</a></li>
                  <li><a>Contact</a></li>
                </ul>
              </div>

            </div>


          </button>
        </div>
      </header>

    </div>
  )
}

export default Navbar
