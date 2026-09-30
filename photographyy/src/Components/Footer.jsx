import React from 'react'
import { NavLink } from 'react-router-dom'
import FooterImage from '../assets/footer.webp'

const Footer = () => {
  return (
    <footer
      className="relative bg-cover bg-center bg-no-repeat bg-amber-950 px-8 py-10 text-white"
      
    >

    

      <div className="absolute inset-0 bg-black/65"></div>


      {/* Footer Content */}

      <div className="relative z-10 mx-auto max-w-7xl">

        <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:items-start">


          {/* Logo  */}

          <div className="text-center md:text-left">

            <NavLink
              to="/"
              className="inline-flex items-center gap-2"
            >

              <span className="font-script text-5xl font-bold tracking-tighter text-[#e8d5b0]">
                V
                <span className="ml-0.5 text-4xl font-light italic">
                  s
                </span>
              </span>


              <div className="flex flex-col text-left leading-none">

                <span className="font-serif text-xl tracking-widest uppercase">
                  Vanshika
                </span>

                <span className="mt-1 text-[10px] tracking-[0.3em] text-gray-300 uppercase">
                  Photography
                </span>

              </div>

            </NavLink>


            <p className="mt-4 max-w-xs text-xs leading-5 text-gray-300">
              Capturing beautiful moments,
              <br />
              one frame at a time.
            </p>

          </div>


          {/* ================= LINKS ================= */}

          <div className="flex items-center">

            <ul className="m-0 flex list-none flex-wrap items-center justify-center gap-7 p-0 text-sm text-gray-300">

              <li>
                <NavLink
                  to="/"
                  className="transition duration-300 hover:text-[#e8d5b0]"
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/gallery"
                  className="transition duration-300 hover:text-[#e8d5b0]"
                >
                  Gallery
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className="transition duration-300 hover:text-[#e8d5b0]"
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className="transition duration-300 hover:text-[#e8d5b0]"
                >
                  Contact
                </NavLink>
              </li>

            </ul>

          </div>


          {/* ================= ICONS ================= */}

          <div className="flex gap-3">

            <NavLink
              to="/instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-[10px] transition duration-300 hover:border-[#e8d5b0] hover:bg-[#e8d5b0] hover:text-black"
            >
              IG
            </NavLink>

            <NavLink
              to="/facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-[10px] transition duration-300 hover:border-[#e8d5b0] hover:bg-[#e8d5b0] hover:text-black"
            >
              FB
            </NavLink>

            <NavLink
              to="/linkedin"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-[10px] transition duration-300 hover:border-[#e8d5b0] hover:bg-[#e8d5b0] hover:text-black"
            >
              IN
            </NavLink>

          </div>

        </div>


      

        <div className="mt-10 border-t border-white/20"></div>


      

        <div className="flex flex-col items-center justify-between gap-5 pt-5 md:flex-row">

          <p className="text-xs text-gray-400">
            © 2026 Vanshika Photography. All rights reserved.
          </p>

          <p className="font-script text-2xl italic text-[#e8d5b0]">
            Your story. My lens. Forever. ♡
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer