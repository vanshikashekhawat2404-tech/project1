import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
   <nav className='absolute top-0 left-0 w-full text-white z-50'>
    <div className='mx-auto flex max-w-7xl items-center justify-between px-16 py-8'>
      {/*------ Logo--------- */}
        <NavLink to="/" className="flex items-center gap-2">
        <span className="font-script text-5xl font-bold tracking-tighter z-10">
                        V
    <span className="italic font-light text-4xl -ml-0.5 z-10">s</span>
  </span>
  <div className="flex flex-col leading-none">
    <span className="font-serif text-xl tracking-widest uppercase z-10">
      Vanshika
    </span>
    <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400">
      Photography
    </span>
  </div>

      
        </NavLink>

        {/* -----navbar links----- */}
        <div className=''>
        <ul className='flex gap-10'>
           <NavLink to="/">
          <li className='border-b-2 border-transparent transition-colors duration-300 hover:text-gray-300 hover:border-yellow-400'>Home</li>
        </NavLink>

        <NavLink to="/portfolio">
          <li className='transition  duration-300 hover:text-gray-300 hover:border-b-2 border-transparent inline-block hover:border-yellow-400'>portfolio</li>
        </NavLink>

        <NavLink to="/about">
          <li className='transition  duration-300 hover:text-gray-300 hover:border-b-2 border-transparent inline-block hover:border-yellow-400'>about</li>
        </NavLink>

        <NavLink to="/contact">
          <li className='transition  duration-300 hover:text-gray-300 hover:border-b-2 border-transparent inline-block hover:border-yellow-400'>contact</li>

          
        </NavLink>


            {/* ================= SEARCH ICON ================= */}

            <li>

              <button
                className="flex h-9 w-9 items-center justify-center rounded-full transition duration-300 hover:bg-white/10"
                aria-label="Search"
              >

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-4.35-4.35m2.1-5.4a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
                  />
                </svg>

              </button>

            </li>

         <li>

              <NavLink
                to="/contact"
                className="inline-block border border-[#e8d5b0] bg-[#e8d5b0] px-5 py-2.5 text-[10px] font-medium tracking-[0.18em] text-black uppercase transition duration-300 hover:border-white hover:bg-white"
              >
                Book a Shot
              </NavLink>

            </li>


        </ul>
       
        </div>




    </div>
   </nav>
  )
}

export default Header
