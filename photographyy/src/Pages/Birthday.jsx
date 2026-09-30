import React from 'react'
import { NavLink } from 'react-router-dom'

import ImageBirth from '../assets/imagebirth.webp'
import ImageBirth1 from '../assets/birth1.webp'
import ImageBirth2 from '../assets/birth2.webp'
import ImageBirth3 from '../assets/birth3.webp'
import ImageBirth4 from '../assets/birth4.webp'
import ImageBirth5 from '../assets/birth5.webp'


const Birthday = () => {

  // ===================== GALLERY DATA =====================

  const data = [
    {
      id: 1,
      image: ImageBirth,
      title: 'Beautiful Celebration',
    },
    {
      id: 2,
      image: ImageBirth1,
      title: 'Birthday Joy',
    },
    {
      id: 3,
      image: ImageBirth2,
      title: 'Happy Moments',
    },
    {
      id: 4,
      image: ImageBirth3,
      title: 'Fun & Laughter',
    },
    {
      id: 5,
      image: ImageBirth4,
      title: 'Sweet Memories',
    },
    {
      id: 6,
      image: ImageBirth5,
      title: 'Celebrating Life',
    },
  ]


  return (
    <section className="bg-[#f7f3eb]">


      {/* =====================================================
          HERO
      ===================================================== */}

      <div
        className="relative h-160 w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ImageBirth})` }}
      >

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/55"></div>


        {/* Hero Content */}

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-8 md:px-16">

          <div className="max-w-2xl text-white">

            {/* Small Label */}

            <p className="mb-3 text-[10px] uppercase tracking-[0.4em]">

              Birthday Photography

              <span className="ml-3 inline-block h-px w-10 bg-[#e8d5b0]"></span>

            </p>


            {/* Main Heading */}

            <h1 className="font-serif text-5xl leading-tight md:text-7xl">
              Birthday
            </h1>


            <h2 className="mt-1 font-script text-5xl italic text-[#e8d5b0] md:text-6xl">
              Moments
            </h2>


            {/* Description */}

            <p className="mt-6 max-w-xl text-sm leading-6 text-gray-200 md:text-base">
              Joy, laughter and unforgettable celebrations.
              Explore a collection of birthday moments
              captured with love and creativity.
            </p>

          </div>


          {/* Handwritten Text */}

          <div className="absolute bottom-20 right-8 hidden md:block">

            <p className="rotate-[-8deg] font-script text-3xl leading-8 text-[#eee0d0]">
              Celebrate
              <br />
              Life
              <br />
              Love
              <br />
              & Joy ♡
            </p>

          </div>

        </div>


        {/* Bottom Wave */}

        <div
          className="absolute -bottom-5 left-0 z-20 h-8 w-full bg-[#f7f3eb]"
          style={{
            clipPath:
              "polygon(0 55%, 2% 25%, 4% 50%, 6% 20%, 8% 55%, 10% 30%, 12% 60%, 14% 22%, 16% 52%, 18% 28%, 20% 58%, 22% 20%, 24% 55%, 26% 25%, 28% 60%, 30% 22%, 32% 55%, 34% 28%, 36% 58%, 38% 20%, 40% 55%, 42% 25%, 44% 60%, 46% 20%, 48% 55%, 50% 25%, 52% 58%, 54% 20%, 56% 55%, 58% 28%, 60% 60%, 62% 20%, 64% 55%, 66% 25%, 68% 58%, 70% 20%, 72% 55%, 74% 25%, 76% 60%, 78% 20%, 80% 55%, 82% 25%, 84% 58%, 86% 20%, 88% 55%, 90% 25%, 92% 58%, 94% 20%, 96% 55%, 98% 25%, 100% 55%, 100% 100%, 0 100%)",
          }}
        ></div>

      </div>


      {/* =====================================================
          GALLERY
      ===================================================== */}

      <div className="relative px-6 pb-16 pt-16 md:px-12">


        {/* Left Decoration */}

        <div className="absolute left-0 top-10 hidden text-6xl text-[#d8c5a9] opacity-70 md:block">
          ❧
        </div>


        {/* Right Decoration */}

        <div className="absolute right-0 top-10 hidden rotate-180 text-6xl text-[#d8c5a9] opacity-70 md:block">
          ❧
        </div>


        {/* ================= CATEGORY NAVIGATION ================= */}

        <div className="mx-auto mb-12 max-w-5xl">

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">


            {/* ALL */}

            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `
                group relative flex items-center gap-2
                overflow-hidden border px-6 py-3
                text-[9px] font-medium uppercase
                tracking-[0.25em]
                transition-all duration-500
                ${
                  isActive
                    ? "border-[#5b4630] bg-[#5b4630] text-white shadow-lg shadow-[#5b4630]/20"
                    : "border-[#d7c8b4] bg-white/60 text-[#5b4630] hover:border-[#5b4630] hover:bg-[#5b4630] hover:text-white hover:shadow-lg"
                }
                `
              }
            >
              <span className="text-[#c9a77c] transition-transform duration-300 group-hover:rotate-45">
                ✦
              </span>

              All
            </NavLink>


            {/* PRE WEDDING */}

            <NavLink
              to="/portfolio/pre-wedding"
              className={({ isActive }) =>
                `
                group relative overflow-hidden border px-6 py-3
                text-[9px] font-medium uppercase
                tracking-[0.25em]
                transition-all duration-500
                ${
                  isActive
                    ? "border-[#5b4630] bg-[#5b4630] text-white shadow-lg"
                    : "border-[#d7c8b4] bg-white/60 text-[#5b4630] hover:border-[#5b4630] hover:bg-[#5b4630] hover:text-white hover:shadow-lg"
                }
                `
              }
            >
              Pre Wedding
            </NavLink>


            {/* BIRTHDAY */}

            <NavLink
              to="/portfolio/birthday"
              className={({ isActive }) =>
                `
                group relative overflow-hidden border px-6 py-3
                text-[9px] font-medium uppercase
                tracking-[0.25em]
                transition-all duration-500
                ${
                  isActive
                    ? "border-[#5b4630] bg-[#5b4630] text-white shadow-lg"
                    : "border-[#d7c8b4] bg-white/60 text-[#5b4630] hover:border-[#5b4630] hover:bg-[#5b4630] hover:text-white hover:shadow-lg"
                }
                `
              }
            >
              Birthday
            </NavLink>


            {/* ANNIVERSARY */}

            <NavLink
              to="/portfolio/anniversary"
              className={({ isActive }) =>
                `
                group relative overflow-hidden border px-6 py-3
                text-[9px] font-medium uppercase
                tracking-[0.25em]
                transition-all duration-500
                ${
                  isActive
                    ? "border-[#5b4630] bg-[#5b4630] text-white shadow-lg"
                    : "border-[#d7c8b4] bg-white/60 text-[#5b4630] hover:border-[#5b4630] hover:bg-[#5b4630] hover:text-white hover:shadow-lg"
                }
                `
              }
            >
              Anniversary
            </NavLink>


            {/* WEDDING */}

            <NavLink
              to="/portfolio/wedding"
              className={({ isActive }) =>
                `
                group relative overflow-hidden border px-6 py-3
                text-[9px] font-medium uppercase
                tracking-[0.25em]
                transition-all duration-500
                ${
                  isActive
                    ? "border-[#5b4630] bg-[#5b4630] text-white shadow-lg"
                    : "border-[#d7c8b4] bg-white/60 text-[#5b4630] hover:border-[#5b4630] hover:bg-[#5b4630] hover:text-white hover:shadow-lg"
                }
                `
              }
            >
              Wedding
            </NavLink>


            {/* TRAVEL */}

            <NavLink
              to="/portfolio/travel"
              className={({ isActive }) =>
                `
                group relative overflow-hidden border px-6 py-3
                text-[9px] font-medium uppercase
                tracking-[0.25em]
                transition-all duration-500
                ${
                  isActive
                    ? "border-[#5b4630] bg-[#5b4630] text-white shadow-lg"
                    : "border-[#d7c8b4] bg-white/60 text-[#5b4630] hover:border-[#5b4630] hover:bg-[#5b4630] hover:text-white hover:shadow-lg"
                }
                `
              }
            >
              Travel
            </NavLink>

          </div>


          {/* Bottom Decoration */}

          <div className="mt-5 flex items-center justify-center gap-4">

            <span className="h-px w-16 bg-[#d8c49b]/50"></span>

            <span className="text-[10px] uppercase tracking-[0.3em] text-[#9b8060]">
              Moments • Memories • Magic
            </span>

            <span className="h-px w-16 bg-[#d8c49b]/50"></span>

          </div>

        </div>


        {/* ================= SECTION HEADING ================= */}

        <div className="mx-auto max-w-6xl">

          <div className="mb-10 text-center">

            <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500">
              Birthday Gallery
            </p>

            <h2 className="mt-2 font-serif text-3xl text-gray-900 md:text-4xl">
              Joy in Every Frame
            </h2>

            <div className="mx-auto mt-4 h-px w-12 bg-[#c9a77c]"></div>

          </div>


          {/* ================= IMAGE GRID ================= */}

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">

            {data.map((item) => (

              <div
                key={item.id}
                className="
                  group relative h-75
                  overflow-hidden rounded-sm bg-black
                  shadow-sm transition-all duration-500
                  hover:-translate-y-1 hover:shadow-xl
                  md:h-80
                "
              >

                {/* Image */}

                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    absolute inset-0 h-full w-full
                    object-cover transition-transform
                    duration-700 ease-out
                    group-hover:scale-110
                  "
                />


                {/* Dark Gradient */}

                <div className="
                  absolute inset-0
                  bg-linear-to-t
                  from-black/75 via-black/10 to-transparent
                "></div>


                {/* Gold Hover */}

                <div className="
                  absolute inset-0
                  bg-[#c9a77c]/0
                  transition-all duration-500
                  group-hover:bg-[#c9a77c]/10
                "></div>


                {/* Image Content */}

                <div className="
                  absolute bottom-0 left-0 right-0
                  p-5 text-white
                ">

                  <div className="mb-2 flex items-center gap-2">

                    <span className="text-xs text-[#e8d5b0]">
                      ✦
                    </span>

                    <span className="h-px w-8 bg-[#e8d5b0]"></span>

                  </div>


                  <p className="
                    translate-y-2 text-[10px]
                    uppercase tracking-[0.25em]
                    text-[#e8d5b0]
                    opacity-0
                    transition-all duration-500
                    group-hover:translate-y-0
                    group-hover:opacity-100
                  ">
                    {item.title}
                  </p>

                </div>

              </div>

            ))}

          </div>


          {/* ================= GALLERY NAVIGATION ================= */}

          <div className="mt-10 flex items-center justify-center gap-8">

            <button
              type="button"
              className="text-xl text-gray-500 transition duration-300 hover:text-[#8f7452]"
            >
              ←
            </button>

            <p className="text-xs tracking-widest text-gray-500">
              1 / {data.length}
            </p>

            <button
              type="button"
              className="text-xl text-gray-500 transition duration-300 hover:text-[#8f7452]"
            >
              →
            </button>

          </div>

        </div>

      </div>


      {/* =====================================================
          CTA SECTION
      ===================================================== */}

      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ImageBirth})` }}
      >

        {/* Dark Overlay */}

        <div className="absolute inset-0 bg-black/65"></div>


        <div className="relative z-10">

          <div className="
            mx-auto flex max-w-7xl
            flex-col items-start justify-between
            gap-8 px-8 py-12
            md:flex-row md:items-center md:px-12
          ">

            {/* CTA Content */}

            <div>

              <p className="
                text-[9px] uppercase
                tracking-[0.4em]
                text-[#e8d5b0]
              ">
                Let's Celebrate Together
              </p>


              <h2 className="
                mt-3 font-serif text-3xl
                text-white md:text-4xl
              ">
                Your Celebration. My Lens.
              </h2>


              <p className="
                mt-2 text-[10px]
                leading-5 text-gray-300
              ">
                Let's turn your special celebration into timeless memories.
              </p>

            </div>


            {/* CTA Button */}

            <NavLink
              to="/contact"
              className="
                shrink-0 bg-[#e8d5b0]
                px-8 py-3
                text-[9px] uppercase
                tracking-[0.2em]
                text-black
                transition duration-300
                hover:bg-white
              "
            >
              Get In Touch →
            </NavLink>

          </div>

        </div>

      </div>

    </section>
  )
}


export default Birthday