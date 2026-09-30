import React from 'react'
import { NavLink } from 'react-router-dom'
import ImageWed from '../assets/imagewed.webp'
import ImageBirth from '../assets/imagebirth.webp'
import ImagePre from '../assets/imagepre.webp'
import ImageAni from '../assets/imageani.webp'
import ImageTravel from '../assets/imagetravel.webp'


const Portfolio = () => {
  return (
    <section className="bg-[#f7f3eb] py-4 px-4">


      {/* ===================== HERO ====================== */}


      <div
        className="relative h-160 w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ImageWed})` }}
      >

        <div className="absolute inset-0 bg-black/55"></div>


        {/*  Content */}

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-8 md:px-16">

          <div className="max-w-2xl text-white">

            <p className="mb-3 text-[10px] tracking-[0.4em] uppercase">
              My Portfolio
              <span className="ml-3 inline-block h-px w-10 bg-[#e8d5b0]"></span>
            </p>


            <h1 className="font-serif text-5xl leading-tight md:text-7xl">
              Stories Captured
            </h1>


            <h2 className="mt-1 font-script text-5xl italic text-[#e8d5b0] md:text-6xl">
              in Every Frame
            </h2>


            <p className="mt-6 max-w-xl text-sm leading-6 text-gray-200 md:text-base">
              From heartfelt celebrations to candid moments,
              explore a collection of stories, emotions and memories
              captured through my lens.
            </p>

          </div>




          <div className="absolute bottom-20 right-8 hidden md:block">

            <p className="rotate-[-8deg] font-script text-3xl leading-8 text-[#eee0d0]">
              Every frame
              <br />
              tells a story
              <br />
              ♡
            </p>

          </div>

        </div>




        <div
          className="absolute -bottom-5 left-0 z-20 h-8 w-full bg-[#f7f3eb]"
          style={{
            clipPath:
              "polygon(0 55%, 4% 25%, 8% 55%, 13% 20%, 18% 50%, 23% 15%, 28% 52%, 34% 20%, 40% 55%, 46% 18%, 52% 52%, 58% 20%, 64% 55%, 70% 15%, 76% 52%, 82% 20%, 88% 55%, 94% 18%, 100% 50%, 100% 100%, 0 100%)",
          }}
        ></div>

      </div>


     {/* ===================== CATEGORY SECTION ====================== */}

<div className="relative overflow-hidden bg-[#f7f3eb] px-6 pb-16 pt-16 md:px-12 md:pb-20 md:pt-20">

  {/* Soft decorative glow */}
  <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#c9a77c]/10 blur-3xl"></div>

  <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#c9a77c]/10 blur-3xl"></div>


  <div className="relative z-10 mx-auto max-w-7xl">

    {/* ================= SECTION HEADING ================= */}

    <div className="mb-10 text-center">

      {/* Small label */}
      <div className="mb-4 flex items-center justify-center gap-3">

        <span className="h-px w-10 bg-[#c9a77c]"></span>

        <p className="text-[9px] font-medium uppercase tracking-[0.45em] text-[#9b8060]">
          Explore My Work
        </p>

        <span className="h-px w-10 bg-[#c9a77c]"></span>

      </div>


      {/* Heading */}
      <h2 className="font-serif text-3xl leading-tight text-[#302a24] sm:text-4xl md:text-5xl">
        Browse By{" "}
        <span className="italic text-[#a78962]">
          Category
        </span>
      </h2>


      {/* Description */}
      <p className="mx-auto mt-4 max-w-xl text-xs leading-6 text-[#81776b] sm:text-sm">
        A collection of beautiful moments, emotions and stories
        captured through my lens.
      </p>


      {/* Decorative line */}
      <div className="mx-auto mt-6 flex items-center justify-center gap-3">

        <span className="h-px w-12 bg-[#c9a77c]/60"></span>

        <span className="text-sm text-[#b29268]">
          ❦
        </span>

        <span className="h-px w-12 bg-[#c9a77c]/60"></span>

      </div>

    </div>


    {/* ================= CATEGORY NAVIGATION ================= */}

    <div className="mx-auto max-w-5xl">

      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">


        {/* ALL */}
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            `
            group relative overflow-hidden
            flex items-center gap-2
            border px-6 py-3
            text-[9px] font-medium
            uppercase tracking-[0.25em]
            transition-all duration-500
            ${
              isActive
                ? "border-[#5b4630] bg-[#5b4630] text-white shadow-lg shadow-[#5b4630]/20"
                : "border-[#d7c8b4] bg-white/60 text-[#5b4630] hover:border-[#5b4630] hover:bg-[#5b4630] hover:text-white hover:shadow-lg hover:shadow-[#5b4630]/15"
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
            group relative overflow-hidden
            border px-6 py-3
            text-[9px] font-medium
            uppercase tracking-[0.25em]
            transition-all duration-500
            ${
              isActive
                ? "border-[#5b4630] bg-[#5b4630] text-white shadow-lg shadow-[#5b4630]/20"
                : "border-[#d7c8b4] bg-white/60 text-[#5b4630] hover:border-[#5b4630] hover:bg-[#5b4630] hover:text-white hover:shadow-lg hover:shadow-[#5b4630]/15"
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
            group relative overflow-hidden
            border px-6 py-3
            text-[9px] font-medium
            uppercase tracking-[0.25em]
            transition-all duration-500
            ${
              isActive
                ? "border-[#5b4630] bg-[#5b4630] text-white shadow-lg shadow-[#5b4630]/20"
                : "border-[#d7c8b4] bg-white/60 text-[#5b4630] hover:border-[#5b4630] hover:bg-[#5b4630] hover:text-white hover:shadow-lg hover:shadow-[#5b4630]/15"
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
            group relative overflow-hidden
            border px-6 py-3
            text-[9px] font-medium
            uppercase tracking-[0.25em]
            transition-all duration-500
            ${
              isActive
                ? "border-[#5b4630] bg-[#5b4630] text-white shadow-lg shadow-[#5b4630]/20"
                : "border-[#d7c8b4] bg-white/60 text-[#5b4630] hover:border-[#5b4630] hover:bg-[#5b4630] hover:text-white hover:shadow-lg hover:shadow-[#5b4630]/15"
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
            group relative overflow-hidden
            border px-6 py-3
            text-[9px] font-medium
            uppercase tracking-[0.25em]
            transition-all duration-500
            ${
              isActive
                ? "border-[#5b4630] bg-[#5b4630] text-white shadow-lg shadow-[#5b4630]/20"
                : "border-[#d7c8b4] bg-white/60 text-[#5b4630] hover:border-[#5b4630] hover:bg-[#5b4630] hover:text-white hover:shadow-lg hover:shadow-[#5b4630]/15"
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
            group relative overflow-hidden
            border px-6 py-3
            text-[9px] font-medium
            uppercase tracking-[0.25em]
            transition-all duration-500
            ${
              isActive
                ? "border-[#5b4630] bg-[#5b4630] text-white shadow-lg shadow-[#5b4630]/20"
                : "border-[#d7c8b4] bg-white/60 text-[#5b4630] hover:border-[#5b4630] hover:bg-[#5b4630] hover:text-white hover:shadow-lg hover:shadow-[#5b4630]/15"
            }
            `
          }
        >
          Travel
        </NavLink>

      </div>


      {/* ================= BOTTOM DECORATION ================= */}

      <div className="mt-5 flex items-center justify-center gap-4">

        <span className="h-px w-16 bg-[#d8c49b]/50"></span>

        <span className="text-[10px] tracking-[0.3em] text-[#9b8060] uppercase">
          Moments • Memories • Magic
        </span>

        <span className="h-px w-16 bg-[#d8c49b]/50"></span>

      </div>

    </div>

  </div>

</div>

{/* ===================== ALL PORTFOLIO ===================== */}

<div className="relative mx-auto -mt-10 max-w-7xl">

  {/* ================= SECTION HEADING ================= */}

  <div className="mb-8 text-center">

    <div className="mb-3 flex items-center justify-center gap-3">

      <span className="h-px w-8 bg-[#c9a77c]"></span>

      <span className="text-[8px] font-medium uppercase tracking-[0.4em] text-[#9b8060]">
        My Collections
      </span>

      <span className="h-px w-8 bg-[#c9a77c]"></span>

    </div>

    <h3 className="font-serif text-2xl text-[#302a24] sm:text-3xl">
      Stories Worth
      <span className="ml-2 italic text-[#a78962]">
        Remembering
      </span>
    </h3>

    <p className="mx-auto mt-3 max-w-lg text-[10px] leading-5 text-[#81776b] sm:text-xs">
      Explore a collection of beautiful moments, emotions and
      unforgettable stories captured through my lens.
    </p>

  </div>


  {/* ================= PORTFOLIO GRID ================= */}

  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">


    {/* ================= WEDDING ================= */}

    <NavLink
      to="/portfolio/wedding"
      className="group relative h-[330px] overflow-hidden rounded-[4px] bg-black shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >

      <img
        src={ImageWed}
        alt="Wedding Photography"
        className="
          absolute inset-0
          h-full w-full
          object-cover
          transition-transform
          duration-700
          ease-out
          group-hover:scale-110
        "
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/5"></div>

      <div className="absolute inset-x-0 bottom-0 p-5 text-white">

        <div className="mb-2 flex items-center gap-2">

          <span className="text-xs text-[#e1c99e]">
            ♡
          </span>

          <span className="h-px w-6 bg-[#e1c99e]"></span>

        </div>

        <h3 className="font-serif text-xl">
          Wedding Photography
        </h3>

        <p className="mt-1 text-[8px] leading-4 text-gray-300">
          From rituals to celebrations, capturing your big day beautifully.
        </p>

        <div className="mt-3 flex items-center gap-2 text-[8px] uppercase tracking-[0.2em] text-[#e1c99e]">
          <span>Explore More</span>

          <span className="transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </div>

      </div>

    </NavLink>


    {/* ================= PRE WEDDING ================= */}

    <NavLink
      to="/portfolio/pre-wedding"
      className="group relative h-[330px] overflow-hidden rounded-[4px] bg-black shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >

      <img
        src={ImagePre}
        alt="Pre Wedding Photography"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/5"></div>

      <div className="absolute inset-x-0 bottom-0 p-5 text-white">

        <div className="mb-2 flex items-center gap-2">
          <span className="text-xs text-[#e1c99e]">♡</span>
          <span className="h-px w-6 bg-[#e1c99e]"></span>
        </div>

        <h3 className="font-serif text-xl">
          Pre-Wedding Photography
        </h3>

        <p className="mt-1 text-[8px] leading-4 text-gray-300">
          Natural, romantic moments captured before your beautiful beginning.
        </p>

        <div className="mt-3 flex items-center gap-2 text-[8px] uppercase tracking-[0.2em] text-[#e1c99e]">
          <span>Explore More</span>
          <span className="transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </div>

      </div>

    </NavLink>


    {/* ================= BIRTHDAY / PORTRAIT ================= */}

    <NavLink
      to="/portfolio/portrait"
      className="group relative h-[330px] overflow-hidden rounded-[4px] bg-black shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >

      <img
        src={ImageBirth}
        alt="Portrait Photography"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/5"></div>

      <div className="absolute inset-x-0 bottom-0 p-5 text-white">

        <div className="mb-2 flex items-center gap-2">
          <span className="text-xs text-[#e1c99e]">◉</span>
          <span className="h-px w-6 bg-[#e1c99e]"></span>
        </div>

        <h3 className="font-serif text-xl">
          Portrait Photography
        </h3>

        <p className="mt-1 text-[8px] leading-4 text-gray-300">
          Timeless portraits that capture personality, emotion and character.
        </p>

        <div className="mt-3 flex items-center gap-2 text-[8px] uppercase tracking-[0.2em] text-[#e1c99e]">
          <span>Explore More</span>
          <span className="transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </div>

      </div>

    </NavLink>


    {/* ================= TRAVEL ================= */}

    <NavLink
      to="/portfolio/travel"
      className="group relative h-[330px] overflow-hidden rounded-[4px] bg-black shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >

      <img
        src={ImageTravel}
        alt="Travel Photography"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/5"></div>

      <div className="absolute inset-x-0 bottom-0 p-5 text-white">

        <div className="mb-2 flex items-center gap-2">
          <span className="text-xs text-[#e1c99e]">✦</span>
          <span className="h-px w-6 bg-[#e1c99e]"></span>
        </div>

        <h3 className="font-serif text-xl">
          Travel Photography
        </h3>

        <p className="mt-1 text-[8px] leading-4 text-gray-300">
          Places, people and beautiful frames from journeys around the world.
        </p>

        <div className="mt-3 flex items-center gap-2 text-[8px] uppercase tracking-[0.2em] text-[#e1c99e]">
          <span>Explore More</span>
          <span className="transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </div>

      </div>

    </NavLink>


    {/* ================= EVENTS ================= */}

    <NavLink
      to="/portfolio/events"
      className="group relative h-[330px] overflow-hidden rounded-[4px] bg-black shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl lg:col-span-2"
    >

      <img
        src={ImageAni}
        alt="Events Photography"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/5"></div>

      <div className="absolute inset-x-0 bottom-0 p-5 text-white">

        <div className="mb-2 flex items-center gap-2">
          <span className="text-xs text-[#e1c99e]">✦</span>
          <span className="h-px w-6 bg-[#e1c99e]"></span>
        </div>

        <h3 className="font-serif text-xl">
          Events Photography
        </h3>

        <p className="mt-1 max-w-md text-[8px] leading-4 text-gray-300">
          Birthdays, celebrations and special events captured with emotion and detail.
        </p>

        <div className="mt-3 flex items-center gap-2 text-[8px] uppercase tracking-[0.2em] text-[#e1c99e]">
          <span>Explore More</span>
          <span className="transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </div>

      </div>

    </NavLink>

  </div>

</div>
    </section>
  )
}

export default Portfolio