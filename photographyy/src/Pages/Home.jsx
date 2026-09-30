import React from 'react'
import ImageHome from '../assets/imagehome.png'
import Image1 from '../assets/image1.webp'
import Image2 from '../assets/image2.webp'
import Image33 from '../assets/image33.webp'
import Image4 from '../assets/image4.webp'
import Image5 from '../assets/image5.webp'
import ImagePre from '../assets/imagepre.webp'
import ImageAni from '../assets/imageani.webp'
import ImageWed from '../assets/imagewed.webp'
import ImageBirth from '../assets/imageBirth.webp'
import ImageTravel from '../assets/imagetravel.webp'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <section className=' bg-white'>

      {/* ----hero seaction----- */}

<div
  className="relative h-160 w-full bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${ImageHome})` }}
>

  {/* HERO OVERLAY */}
  <div className="absolute inset-0 bg-black/30"></div>

  {/* HERO CONTENT */}
  <div className="relative z-10 flex min-h-screen items-center px-8 md:px-16">

    <div className="max-w-2xl text-white">

      <p className="mb-3 text-sm tracking-[0.35em] uppercase">
        Capturing Your
      </p>

      <h1 className="font-serif text-5xl leading-tight md:text-7xl">
        Special Moments
      </h1>

      <h2 className="mt-1 font-serif text-4xl italic md:text-6xl">
        Forever
      </h2>

      <p className="mt-6 max-w-lg text-sm leading-6 text-gray-200 md:text-base">
        From candid laughter to grand celebrations,
        we turn your most precious moments into timeless
        photographs. Because every story deserves to be told beautifully.
      </p>

      <button
        className="mt-7 rounded-full bg-white px-7 py-3
        text-sm font-medium text-black
        transition duration-300 hover:bg-gray-200"
      >
        Explore Gallery →
      </button>

    </div>

  </div>

  {/* GOOD PHOTOS */}
  <div className="absolute bottom-14 right-8 z-20 hidden md:block">
    <p className="rotate-[-8deg] font-script text-3xl leading-8 text-[#eee0d0]">
      Good
      <br />
      Photos.
      <br />
      Better
      <br />
      Memories ♡
    </p>
  </div>

  {/* TORN BOTTOM */}
  <div
    className="absolute -bottom-1 left-0 z-30 h-8 w-full bg-[#f7f3eb]"
    style={{
      clipPath:
        "polygon(0 55%, 4% 25%, 8% 55%, 13% 20%, 18% 50%, 23% 15%, 28% 52%, 34% 20%, 40% 55%, 46% 18%, 52% 52%, 58% 20%, 64% 55%, 70% 15%, 76% 52%, 82% 20%, 88% 55%, 94% 18%, 100% 50%, 100% 100%, 0 100%)",
    }}
  ></div>

</div>


{/* ================= WEDDING PHOTO COLLAGE ================= */}

<div className="relative bg-[#f4eee3] px-6 pb-14 pt-6 md:px-12">

  <div className="mx-auto max-w-6xl">

    {/* PHOTOS */}

    <div className="relative h-52 md:h-64">

      {/* 1. LEFT BIG PHOTO */}

      <div className="absolute left-[-18%] -top-25 z-50 h-40 w-27 shadow-md md:h-48 md:w-63">

        <img
          src={ImageWed}
          alt="Wedding"
          className="h-full w-full object-cover"
        />

      </div>


      {/* 2. SMALL PHOTO */}

      <div className="absolute left-[10%] -top-15 z-50 h-55 w-22 shadow-md md:h-70 md:w-60">

        <img
          src={ImagePre}
          alt="Pre Wedding"
          className="h-full w-full object-cover"
        />

      </div>


      {/* 3. CENTER VERTICAL PHOTO */}

      <div className="absolute left-1/2 -top-12 z-30 h-44 w-27 -translate-x-1/2 border-4 border-white bg-white p-1 shadow-lg md:h-60 md:w-38">

        <img
          src={Image33}
          alt="Portrait"
          className="h-full w-full object-cover grayscale"
        />

      </div>


      {/* 4. RIGHT BIG PHOTO */}

      <div className="absolute right-[12%] top-10 z-20 h-40 w-50 shadow-md md:h-55 md:w-65">

        <img
          src={ImageBirth}
          alt="Birthday"
          className="h-full w-full object-cover"
        />

      </div>


      {/* 5. FAR RIGHT SMALL PHOTO */}

      <div className="absolute -right-30 -top-14 z-50 h-30 w-20 shadow-md md:h-50 md:w-40">

        <img
          src={Image2}
          alt="Wedding"
          className="h-full w-full object-cover"
        />

      </div>

    </div>


    {/* TEXT */}

    <div className="mt-2 text-center">

      <h2 className="font-serif text-2xl leading-tight text-[#776957] md:text-4xl">

        CAPTURING YOUR

        <br />

        EXTRAORDINARY

        <br />

        HAPPILY EVER AFTER

      </h2>

    </div>

  </div>

</div>


{/* ================= SERVICES ================= */}
        
         {/* ================= SERVICES ================= */}

      <div className="relative px-6 py-14 md:px-12">

        <div className="mx-auto max-w-7xl">

          {/* Heading */}

          <div className="mb-8">

            <p className="text-[10px] tracking-[0.4em] text-gray-700 uppercase">
              What We Offer
              <span className="ml-3 inline-block h-px w-8 bg-gray-500"></span>
            </p>

            <h2 className="mt-2 font-serif text-4xl text-gray-900 md:text-5xl">
              Our Services
            </h2>

          </div>


          {/* Handwritten text */}

          <div className="absolute right-[40%] top-8 hidden md:block">

            <p className="rotate-6 text-center font-script text-2xl leading-7 text-gray-700">
              Different occasions,
              <br />
              Same passion ♡
            </p>

          </div>


          {/* ================= SERVICE CARDS ================= */}

<div className="relative mx-auto mt-14 max-w-6xl px-4">

  {/* ================= BACKGROUND DECORATIONS ================= */}

  <div className="pointer-events-none absolute -left-10 top-10 hidden text-7xl text-[#b49a72]/20 md:block">
    ❧
  </div>

  <div className="pointer-events-none absolute -right-10 top-1/3 hidden rotate-12 text-8xl text-[#b49a72]/20 md:block">
    ❦
  </div>

  <div className="pointer-events-none absolute bottom-0 left-1/2 hidden -translate-x-1/2 text-5xl text-[#d8c49b]/20 md:block">
    ✦
  </div>


  <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">


    {/* ================= WEDDING ================= */}

    <div className="group relative mt-0 -rotate-2 transition duration-500 hover:z-30">

      {/* leaf decoration */}
      <div className="pointer-events-none absolute -left-5 bottom-12 z-30 rotate-[-15deg] text-3xl text-[#a88962]/80">
        ❧
      </div>

      {/* small sparkle */}
      <div className="pointer-events-none absolute -right-3 -top-5 z-30 text-xl text-[#c3a875]">
        ✦
      </div>


      <div className="relative bg-[#fffdfa] p-3 pb-9 shadow-[0_12px_35px_rgba(100,75,45,0.13)] ring-1 ring-[#e6dccb] transition duration-500 group-hover:-translate-y-3 group-hover:rotate-0 group-hover:shadow-[0_20px_45px_rgba(100,75,45,0.22)]">

        {/* inner border */}
        <div className="pointer-events-none absolute inset-2 border border-[#eee5d7]"></div>

        {/* image */}
        <div className="relative h-56 overflow-hidden border border-[#e4d9c8]">

          <img
            src={ImageWed}
            alt="Wedding Photography"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent"></div>

          {/* image badge */}
          <div className="absolute right-3 top-3 flex h-9 w-9 rotate-3 items-center justify-center rounded-full border border-white/70 bg-white/85 text-[#a88962] shadow-md backdrop-blur-sm transition duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
            ♡
          </div>

          {/* bottom image ornament */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-lg text-white/90">
            ✦
          </div>

        </div>


        {/* content */}
        <div className="relative pt-5 text-center">

          {/* ornament */}
          <div className="mb-2 flex items-center justify-center gap-2">
            <span className="h-px w-10 bg-[#d8c49b]"></span>
            <span className="text-base text-[#a88962]">❦</span>
            <span className="h-px w-10 bg-[#d8c49b]"></span>
          </div>

          <h3 className="font-script text-2xl tracking-wide text-gray-800">
            Wedding Photography
          </h3>

          <div className="mx-auto mt-2 text-[10px] tracking-[0.35em] text-[#b49a72]">
            LOVE • MOMENTS • FOREVER
          </div>

          <p className="mx-auto mt-3 max-w-xs text-xs leading-5 text-gray-500">
            From rituals to real emotions, we capture your big day beautifully.
          </p>


          {/* button */}
          <NavLink
            to="/portfolio/wedding"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#a88962] bg-[#fffdfa] px-6 py-2.5 text-[10px] tracking-[0.18em] text-[#8b704e] uppercase shadow-sm transition duration-300 hover:bg-[#a88962] hover:text-white hover:shadow-md"
          >
            View More
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </NavLink>

        </div>


        {/* bottom decoration */}
        <div className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 text-xs tracking-[0.4em] text-[#d0b98d]">
          ✦ ❧ ✦
        </div>

      </div>


      {/* tape */}
      <div className="absolute -top-4 left-1/2 z-40 h-8 w-20 -translate-x-1/2 rotate-[-5deg] bg-[#d8c49b]/85 shadow-sm"></div>

    </div>


    {/* ================= PRE WEDDING ================= */}

    <div className="group relative mt-8 rotate-[1.5deg] transition duration-500 hover:z-30">

      <div className="pointer-events-none absolute -right-5 top-20 z-30 rotate-15 text-3xl text-[#a88962]/80">
        ❦
      </div>

      <div className="pointer-events-none absolute -left-3 -top-5 z-30 text-xl text-[#c3a875]">
        ✧
      </div>


      <div className="relative bg-[#fffdfa] p-3 pb-9 shadow-[0_12px_35px_rgba(100,75,45,0.13)] ring-1 ring-[#e6dccb] transition duration-500 group-hover:-translate-y-3 group-hover:rotate-0 group-hover:shadow-[0_20px_45px_rgba(100,75,45,0.22)]">

        <div className="pointer-events-none absolute inset-2 border border-[#eee5d7]"></div>


        <div className="relative h-56 overflow-hidden border border-[#e4d9c8]">

          <img
            src={ImagePre}
            alt="Pre Wedding Photography"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent"></div>

          <div className="absolute right-3 top-3 flex h-9 w-9 -rotate-3 items-center justify-center rounded-full border border-white/70 bg-white/85 text-[#a88962] shadow-md backdrop-blur-sm transition duration-500 group-hover:rotate-6 group-hover:scale-110">
            ♡
          </div>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-lg text-white/90">
            ✧
          </div>

        </div>


        <div className="relative pt-5 text-center">

          <div className="mb-2 flex items-center justify-center gap-2">
            <span className="h-px w-10 bg-[#d8c49b]"></span>
            <span className="text-base text-[#a88962]">❧</span>
            <span className="h-px w-10 bg-[#d8c49b]"></span>
          </div>

          <h3 className="font-script text-2xl tracking-wide text-gray-800">
            Pre-Wedding Photography
          </h3>

          <div className="mx-auto mt-2 text-[10px] tracking-[0.35em] text-[#b49a72]">
            LOVE • ROMANCE • STORY
          </div>

          <p className="mx-auto mt-3 max-w-xs text-xs leading-5 text-gray-500">
            Your love story, our lens. Natural. Romantic. Timeless.
          </p>

          <NavLink
            to="/portfolio/pre-wedding"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#a88962] bg-[#fffdfa] px-6 py-2.5 text-[10px] tracking-[0.18em] text-[#8b704e] uppercase shadow-sm transition duration-300 hover:bg-[#a88962] hover:text-white hover:shadow-md"
          >
            View More
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </NavLink>

        </div>

        <div className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 text-xs tracking-[0.4em] text-[#d0b98d]">
          ✧ ❦ ✧
        </div>

      </div>


      <div className="absolute -top-4 left-1/2 z-40 h-8 w-20 -translate-x-1/2 rotate-[4deg] bg-[#d8c49b]/85 shadow-sm"></div>

    </div>


    {/* ================= PORTRAIT ================= */}

    <div className="group relative mt-0 -rotate-1 transition duration-500 hover:z-30">

      <div className="pointer-events-none absolute -left-5 top-8 z-30 rotate-[-20deg] text-3xl text-[#a88962]/80">
        ❧
      </div>

      <div className="pointer-events-none absolute -right-3 -top-5 z-30 text-xl text-[#c3a875]">
        ✦
      </div>


      <div className="relative bg-[#fffdfa] p-3 pb-9 shadow-[0_12px_35px_rgba(100,75,45,0.13)] ring-1 ring-[#e6dccb] transition duration-500 group-hover:-translate-y-3 group-hover:rotate-0 group-hover:shadow-[0_20px_45px_rgba(100,75,45,0.22)]">

        <div className="pointer-events-none absolute inset-2 border border-[#eee5d7]"></div>


        <div className="relative h-56 overflow-hidden border border-[#e4d9c8]">

          <img
            src={Image33}
            alt="Portrait Photography"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent"></div>

          <div className="absolute right-3 top-3 flex h-9 w-9 rotate-2 items-center justify-center rounded-full border border-white/70 bg-white/85 text-[#a88962] shadow-md backdrop-blur-sm transition duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
            ✦
          </div>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-lg text-white/90">
            ❀
          </div>

        </div>


        <div className="relative pt-5 text-center">

          <div className="mb-2 flex items-center justify-center gap-2">
            <span className="h-px w-10 bg-[#d8c49b]"></span>
            <span className="text-base text-[#a88962]">✿</span>
            <span className="h-px w-10 bg-[#d8c49b]"></span>
          </div>

          <h3 className="font-script text-2xl tracking-wide text-gray-800">
            Portrait Photography
          </h3>

          <div className="mx-auto mt-2 text-[10px] tracking-[0.35em] text-[#b49a72]">
            SOUL • STYLE • EXPRESSION
          </div>

          <p className="mx-auto mt-3 max-w-xs text-xs leading-5 text-gray-500">
            Express your true self with stunning portraits.
          </p>

          <NavLink
            to="/portfolio/portraits"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#a88962] bg-[#fffdfa] px-6 py-2.5 text-[10px] tracking-[0.18em] text-[#8b704e] uppercase shadow-sm transition duration-300 hover:bg-[#a88962] hover:text-white hover:shadow-md"
          >
            View More
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </NavLink>

        </div>

        <div className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 text-xs tracking-[0.4em] text-[#d0b98d]">
          ✦ ✿ ✦
        </div>

      </div>


      <div className="absolute -top-4 left-1/2 z-40 h-8 w-20 -translate-x-1/2 -rotate-3 bg-[#d8c49b]/85 shadow-sm"></div>

    </div>


    {/* ================= TRAVEL ================= */}

    <div className="group relative -mt-1.5 rotate-2 transition duration-500 hover:z-30">

      <div className="pointer-events-none absolute -right-5 bottom-10 z-30 rotate-18 text-3xl text-[#a88962]/80">
        ❧
      </div>

      <div className="pointer-events-none absolute -left-3 -top-5 z-30 text-xl text-[#c3a875]">
        ✧
      </div>


      <div className="relative bg-[#fffdfa] p-3 pb-9 shadow-[0_12px_35px_rgba(100,75,45,0.13)] ring-1 ring-[#e6dccb] transition duration-500 group-hover:-translate-y-3 group-hover:rotate-0 group-hover:shadow-[0_20px_45px_rgba(100,75,45,0.22)]">

        <div className="pointer-events-none absolute inset-2 border border-[#eee5d7]"></div>


        <div className="relative h-56 overflow-hidden border border-[#e4d9c8]">

          <img
            src={ImageTravel}
            alt="Travel Photography"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent"></div>

          <div className="absolute right-3 top-3 flex h-9 w-9 rotate-3 items-center justify-center rounded-full border border-white/70 bg-white/85 text-[#a88962] shadow-md backdrop-blur-sm transition duration-500 group-hover:-rotate-6 group-hover:scale-110">
            ✈
          </div>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-lg text-white/90">
            ✦
          </div>

        </div>


        <div className="relative pt-5 text-center">

          <div className="mb-2 flex items-center justify-center gap-2">
            <span className="h-px w-10 bg-[#d8c49b]"></span>
            <span className="text-base text-[#a88962]">❧</span>
            <span className="h-px w-10 bg-[#d8c49b]"></span>
          </div>

          <h3 className="font-script text-2xl tracking-wide text-gray-800">
            Travel Photography
          </h3>

          <div className="mx-auto mt-2 text-[10px] tracking-[0.35em] text-[#b49a72]">
            TRAVEL • EXPLORE • DISCOVER
          </div>

          <p className="mx-auto mt-3 max-w-xs text-xs leading-5 text-gray-500">
            New places, new stories, beautiful frames.
          </p>

          <NavLink
            to="/portfolio/travel"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#a88962] bg-[#fffdfa] px-6 py-2.5 text-[10px] tracking-[0.18em] text-[#8b704e] uppercase shadow-sm transition duration-300 hover:bg-[#a88962] hover:text-white hover:shadow-md"
          >
            View More
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </NavLink>

        </div>

        <div className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 text-xs tracking-[0.4em] text-[#d0b98d]">
          ✦ ❧ ✦
        </div>

      </div>


      <div className="absolute -top-4 left-1/2 z-40 h-8 w-20 -translate-x-1/2 rotate-[5deg] bg-[#d8c49b]/85 shadow-sm"></div>

    </div>


    {/* ================= EVENTS ================= */}

    <div className="group relative mt-7 rotate-[-1.5deg] transition duration-500 hover:z-30">

      <div className="pointer-events-none absolute -left-5 bottom-8 z-30 -rotate-12 text-3xl text-[#a88962]/80">
        ❦
      </div>

      <div className="pointer-events-none absolute -right-3 -top-5 z-30 text-xl text-[#c3a875]">
        ✦
      </div>


      <div className="relative bg-[#fffdfa] p-3 pb-9 shadow-[0_12px_35px_rgba(100,75,45,0.13)] ring-1 ring-[#e6dccb] transition duration-500 group-hover:-translate-y-3 group-hover:rotate-0 group-hover:shadow-[0_20px_45px_rgba(100,75,45,0.22)]">

        <div className="pointer-events-none absolute inset-2 border border-[#eee5d7]"></div>


        <div className="relative h-56 overflow-hidden border border-[#e4d9c8]">

          <img
            src={ImageBirth}
            alt="Events Photography"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent"></div>

          <div className="absolute right-3 top-3 flex h-9 w-9 -rotate-2 items-center justify-center rounded-full border border-white/70 bg-white/85 text-[#a88962] shadow-md backdrop-blur-sm transition duration-500 group-hover:rotate-6 group-hover:scale-110">
            ✨
          </div>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-lg text-white/90">
            ❦
          </div>

        </div>


        <div className="relative pt-5 text-center">

          <div className="mb-2 flex items-center justify-center gap-2">
            <span className="h-px w-10 bg-[#d8c49b]"></span>
            <span className="text-base text-[#a88962]">✦</span>
            <span className="h-px w-10 bg-[#d8c49b]"></span>
          </div>

          <h3 className="font-script text-2xl tracking-wide text-gray-800">
            Events Photography
          </h3>

          <div className="mx-auto mt-2 text-[10px] tracking-[0.35em] text-[#b49a72]">
            CELEBRATE • SMILE • REMEMBER
          </div>

          <p className="mx-auto mt-3 max-w-xs text-xs leading-5 text-gray-500">
            Corporate, birthday, parties & more — we cover it all.
          </p>

          <NavLink
            to="/portfolio/events"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#a88962] bg-[#fffdfa] px-6 py-2.5 text-[10px] tracking-[0.18em] text-[#8b704e] uppercase shadow-sm transition duration-300 hover:bg-[#a88962] hover:text-white hover:shadow-md"
          >
            View More
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </NavLink>

        </div>

        <div className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 text-xs tracking-[0.4em] text-[#d0b98d]">
          ✦ ❦ ✦
        </div>

      </div>


      <div className="absolute -top-4 left-1/2 z-40 h-8 w-20 -translate-x-1/2 rotate-[-4deg] bg-[#d8c49b]/85 shadow-sm"></div>

    </div>


    {/* ================= PRODUCT ================= */}

    <div className="group relative -mt-0.75 rotate-1 transition duration-500 hover:z-30">

      <div className="pointer-events-none absolute -right-5 top-10 z-30 rotate-15 text-3xl text-[#a88962]/80">
        ❦
      </div>

      <div className="pointer-events-none absolute -left-3 -top-5 z-30 text-xl text-[#c3a875]">
        ✧
      </div>


      <div className="relative bg-[#fffdfa] p-3 pb-9 shadow-[0_12px_35px_rgba(100,75,45,0.13)] ring-1 ring-[#e6dccb] transition duration-500 group-hover:-translate-y-3 group-hover:rotate-0 group-hover:shadow-[0_20px_45px_rgba(100,75,45,0.22)]">

        <div className="pointer-events-none absolute inset-2 border border-[#eee5d7]"></div>


        <div className="relative h-56 overflow-hidden border border-[#e4d9c8]">

          <img
            src={Image4}
            alt="Product Photography"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent"></div>

          <div className="absolute right-3 top-3 flex h-9 w-9 rotate-2 items-center justify-center rounded-full border border-white/70 bg-white/85 text-[#a88962] shadow-md backdrop-blur-sm transition duration-500 group-hover:rotate-[-7deg] group-hover:scale-110">
            ◈
          </div>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-lg text-white/90">
            ✧
          </div>

        </div>


        <div className="relative pt-5 text-center">

          <div className="mb-2 flex items-center justify-center gap-2">
            <span className="h-px w-10 bg-[#d8c49b]"></span>
            <span className="text-base text-[#a88962]">❧</span>
            <span className="h-px w-10 bg-[#d8c49b]"></span>
          </div>

          <h3 className="font-script text-2xl tracking-wide text-gray-800">
            Product Photography
          </h3>

          <div className="mx-auto mt-2 text-[10px] tracking-[0.35em] text-[#b49a72]">
            BRAND • DETAIL • STYLE
          </div>

          <p className="mx-auto mt-3 max-w-xs text-xs leading-5 text-gray-500">
            Make your brand look its best with professional shots.
          </p>

          <NavLink
            to="/portfolio/products"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#a88962] bg-[#fffdfa] px-6 py-2.5 text-[10px] tracking-[0.18em] text-[#8b704e] uppercase shadow-sm transition duration-300 hover:bg-[#a88962] hover:text-white hover:shadow-md"
          >
            View More
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </NavLink>

        </div>

        <div className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 text-xs tracking-[0.4em] text-[#d0b98d]">
          ✧ ❧ ✧
        </div>

      </div>


      <div className="absolute -top-4 left-1/2 z-40 h-8 w-20 -translate-x-1/2 rotate-3 bg-[#d8c49b]/85 shadow-sm"></div>

    </div>

  </div>

</div>
          </div>

        </div>

        


        {/* ================= FEATURED WORK ================= */}

<section className="relative overflow-hidden bg-[#faf8f3] px-6 py-20 md:px-12 md:py-24">

  {/* ================= BACKGROUND DECORATION ================= */}

  <div className="pointer-events-none absolute -left-16 top-20 hidden text-[170px] text-[#d8c49b]/15 md:block">
    ❧
  </div>

  <div className="pointer-events-none absolute -right-16 bottom-10 hidden rotate-12 text-[170px] text-[#d8c49b]/15 md:block">
    ❦
  </div>


  <div className="mx-auto max-w-7xl">


    {/* ================= MAIN LAYOUT ================= */}

    <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.8fr] lg:gap-16">


      {/* ================= LEFT HEADING ================= */}

      <div className="relative text-center lg:text-left">

        <div className="pointer-events-none absolute -left-5 -top-10 hidden rotate-[-20deg] text-4xl text-[#b49a72]/50 lg:block">
          ❧
        </div>

        <p className="text-[10px] tracking-[0.45em] text-[#a88962] uppercase">
          Feature of Work
        </p>

        <h2 className="mt-4 font-serif text-4xl leading-tight text-[#4f473d] md:text-5xl lg:text-6xl">
          Stories
          <br />
          We Love
          <br />
          to Capture
        </h2>

        <div className="mt-6 flex items-center justify-center gap-3 lg:justify-start">

          <span className="h-px w-12 bg-[#d8c49b]"></span>

          <span className="text-lg text-[#a88962]">
            ❦
          </span>

          <span className="h-px w-12 bg-[#d8c49b]"></span>

        </div>

        <p className="mx-auto mt-6 max-w-sm text-xs leading-6 text-gray-500 lg:mx-0 md:text-sm">
          Every celebration has its own emotion, its own story,
          and its own beautiful moments. We turn them into memories
          that stay forever.
        </p>

        <p className="mt-6 hidden rotate-[-5deg] font-script text-2xl leading-6 text-[#88755d] lg:block">
          Every frame
          <br />
          tells a story ♡
        </p>

        <div className="mt-8 hidden items-center gap-3 lg:flex">

          <span className="text-xs text-[#b49a72]">
            ✦
          </span>

          <span className="text-[9px] tracking-[0.35em] text-[#9b8a73] uppercase">
            Moments • Memories • Magic
          </span>

        </div>

      </div>


      {/* ================= IMAGE SHOWCASE ================= */}

      <div className="relative">

        <div className="pointer-events-none absolute -right-2 -top-8 hidden text-3xl text-[#b49a72]/60 md:block">
          ✦
        </div>


        <div className="grid grid-cols-1 items-end gap-8 sm:grid-cols-3 sm:gap-4 md:gap-7">


          {/* ================= ENGAGEMENT ================= */}

          <div className="group relative">

            {/* floating leaf */}

            <div className="pointer-events-none absolute -left-5 top-20 z-20 hidden rotate-[-20deg] text-3xl text-[#b49a72]/70 sm:block">
              ❧
            </div>


            {/* IMAGE */}

            <div className="relative mx-auto h-82.5 w-51.25 overflow-visible border border-[#e4d8c5] bg-white p-1.5 shadow-[0_15px_35px_rgba(90,70,45,0.15)] transition duration-500 group-hover:-translate-y-3 group-hover:shadow-[0_25px_45px_rgba(90,70,45,0.23)] md:h-95 md:w-56.25">

              <div className="relative h-full w-full overflow-hidden rounded-t-[105px] md:rounded-t-[110px]">

                <img
                  src={Image33}
                  alt="Engagement Photography"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent"></div>

                <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/60 bg-white/80 text-sm text-[#a88962] shadow-md backdrop-blur-sm">
                  ♡
                </div>

              </div>


              {/* VERTICAL HEADING */}

              <div className="absolute right-18 top-40 z-20 hidden sm:block">

                <h3 className="rotate-90 whitespace-nowrap font-serif text-sm tracking-[0.3em] text-[#5d5245] uppercase md:text-3xl">
                  anniversary
                </h3>

              </div>

            </div>


            {/* BOTTOM TEXT */}

            <div className="mt-5 text-center">

              <div className="mb-2 text-xs text-[#b49a72]">
                ✦
              </div>

              <p className="mx-auto mt-2 max-w-50 text-[10px] leading-5 text-gray-500">
                Intimate moments filled with love, excitement and promises.
              </p>

            </div>

          </div>


          {/* ================= WEDDINGS ================= */}

          <div className="group relative sm:-translate-y-8">

            {/* sparkle */}

            <div className="pointer-events-none absolute -right-4 top-8 z-20 hidden text-2xl text-[#b49a72]/70 sm:block">
              ✦
            </div>


            {/* IMAGE */}

            <div className="relative mx-auto h-91.75 w-53.75 overflow-visible border border-[#d9cbb5] bg-white p-1.5 shadow-[0_18px_40px_rgba(90,70,45,0.17)] transition duration-500 group-hover:-translate-y-3 group-hover:shadow-[0_28px_50px_rgba(90,70,45,0.25)] md:h-105 md:w-60">

              <div className="relative h-full w-full overflow-hidden rounded-t-[105px] md:rounded-t-[112px]">

                <img
                  src={ImagePre}
                  alt="Wedding Photography"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent"></div>

                <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/60 bg-white/80 text-sm text-[#a88962] shadow-md backdrop-blur-sm">
                  ♡
                </div>

              </div>


              {/* VERTICAL HEADING */}

              <div className="absolute right-21 top-50 z-20 hidden sm:block">

                <h3 className="rotate-90 whitespace-nowrap font-serif text-xl tracking-[0.3em] text-[#5d5245] uppercase md:text-3xl">
                  pre-wedding
                </h3>

              </div>

            </div>


            {/* BOTTOM TEXT */}

            <div className="mt-5 text-center">

              <div className="mb-2 text-xs text-[#b49a72]">
                ❦
              </div>

              <p className="mx-auto mt-2 max-w-50 text-[10px] leading-5 text-gray-500">
                From quiet glances to grand celebrations, every emotion matters.
              </p>

            </div>

          </div>


          {/* ================= ELOPEMENTS ================= */}

          <div className="group relative">

            {/* leaf */}

            <div className="pointer-events-none absolute -right-5 bottom-28 z-20 hidden rotate-20 text-3xl text-[#b49a72]/70 sm:block">
              ❦
            </div>


            {/* IMAGE */}

            <div className="relative mx-auto h-82.5 w-[51.25 overflow-visible border border-[#e4d8c5] bg-white p-1.5 shadow-[0_15px_35px_rgba(90,70,45,0.15)] transition duration-500 group-hover:-translate-y-3 group-hover:shadow-[0_25px_45px_rgba(90,70,45,0.23)] md:h-95 md:w-56.25">

              <div className="relative h-full w-full overflow-hidden rounded-t-[105px] md:rounded-t-[110px]">

                <img
                  src={ImageBirth}
                  alt="Elopement Photography"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent"></div>

                <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/60 bg-white/80 text-sm text-[#a88962] shadow-md backdrop-blur-sm">
                  ✦
                </div>

              </div>


              {/* VERTICAL HEADING */}

              <div className="absolute right-23.5 top-45 z-50 hidden sm:block">

                <h3 className="rotate-90 whitespace-nowrap font-serif text-2xl tracking-[0.3em] text-[#5d5245] uppercase md:text-4xl">
                  birthday
                </h3>

              </div>

            </div>


            {/* BOTTOM TEXT */}

            <div className="mt-5 text-center">

              <div className="mb-2 text-xs text-[#b49a72]">
                ✧
              </div>

              <p className="mx-auto mt-2 max-w-50 text-[10px] leading-5 text-gray-500">
                Just two hearts, one beautiful journey and memories to keep.
              </p>

            </div>

          </div>

        </div>


        {/* ================= BOTTOM LINE ================= */}

        <div className="mt-10 flex items-center justify-center gap-3">

          <span className="h-px w-10 bg-[#d8c49b]"></span>

          <span className="text-sm text-[#a88962]">
            ❧
          </span>

          <span className="text-[9px] tracking-[0.3em] text-[#9b8a73] uppercase">
            Beautifully Yours
          </span>

          <span className="text-sm text-[#a88962]">
            ❦
          </span>

          <span className="h-px w-10 bg-[#d8c49b]"></span>

        </div>


        {/* ================= CTA ================= */}

        <div className="mt-6 text-center">

          <NavLink
            to="/portfolio"
            className="inline-flex items-center gap-3 rounded-full border border-[#a88962] bg-white px-7 py-3 text-[10px] tracking-[0.2em] text-[#806747] uppercase shadow-sm transition duration-300 hover:bg-[#a88962] hover:text-white hover:shadow-lg"
          >
            Explore Our Work

            <span className="text-sm transition-transform duration-300 hover:translate-x-1">
              →
            </span>

          </NavLink>

        </div>

      </div>

    </div>

  </div>

</section>

      

{/* ================= STORY SECTION ================= */}

<section
  className="relative flex min-h-82.5 items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat sm:min-h-90"
  style={{ backgroundImage: `url(${Image5})` }}
>
 

  {/* ================= CENTER CONTENT BOX ================= */}
  <div
    className="
      relative z-10
      mx-5
      w-full
      max-w-3xl
      border border-white/60
      bg-white/75
      px-6
      py-8
      text-center
      backdrop-blur-[2px]
      sm:mx-8
      sm:px-10
      sm:py-9
      md:px-16
      md:py-10
    "
  >
    {/* SMALL LABEL */}
    <div className="mb-4 flex items-center justify-center gap-3">
      <span className="h-px w-8 bg-[#b89d6a] sm:w-12"></span>

      <p className="text-[8px] font-medium uppercase tracking-[0.4em] text-[#8b7655] sm:text-[9px]">
        Let's Make Memories
      </p>

      <span className="h-px w-8 bg-[#b89d6a] sm:w-12"></span>
    </div>

    {/* MAIN HEADING */}
    <h2
      className="
        font-serif
        text-3xl
        leading-[1.15]
        text-[#40372d]
        sm:text-4xl
        md:text-5xl
      "
    >
      Every Story
      <br />

      <span className="italic text-[#a98d5e]">
        Deserves to be Remembered.
      </span>
    </h2>

    {/* DESCRIPTION */}
    <p
      className="
        mx-auto
        mt-4
        max-w-xl
        text-[10px]
        leading-5
        text-[#746b60]
        sm:text-xs
      "
    >
      From quiet glances to unforgettable celebrations,
      we capture the little moments that become your
      forever memories.
    </p>

    {/* DECORATION */}
    <div className="mt-4 flex items-center justify-center gap-3">
      <span className="h-px w-10 bg-[#b89d6a]/70 sm:w-14"></span>

      <span className="text-sm text-[#b89d6a]">
        ❦
      </span>

      <span className="h-px w-10 bg-[#b89d6a]/70 sm:w-14"></span>
    </div>

    {/* CTA */}
    <div className="mt-5 flex flex-col items-center">
      <p className="mb-2 text-[7px] uppercase tracking-[0.3em] text-[#8b8175]">
        Your Story Starts Here
      </p>

      <NavLink
        to="/contact"
        className="
          group
          inline-flex
          items-center
          gap-3
          bg-[#6f4d28]
          px-7
          py-3
          text-[8px]
          font-medium
          uppercase
          tracking-[0.25em]
          text-white
          transition-all
          duration-300
          hover:bg-[#4f351b]
        "
      >
        <span>Get In Touch</span>

        <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </NavLink>
    </div>

    {/* BOTTOM TEXT */}
    <p className="mt-3 text-[7px] tracking-[0.15em] text-[#8b8175]">
      Weddings • Portraits • Celebrations
    </p>
  </div>
</section>


{/* ================= FEATURES ================= */}

<div className="border-t border-white/20 bg-[#40372d]">
  <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">

    {/* Feature 1 */}
    <div className="flex items-center justify-center gap-3 border-r border-white/15 px-4 py-4">
      <span className="text-lg text-[#d8c49b]">
        ◎
      </span>

      <p className="text-[9px] text-gray-300">
        Professional Quality
      </p>
    </div>

    {/* Feature 2 */}
    <div className="flex items-center justify-center gap-3 border-r border-white/15 px-4 py-4 md:border-r">
      <span className="text-lg text-[#d8c49b]">
        ♡
      </span>

      <p className="text-[9px] text-gray-300">
        Natural & Candid
      </p>
    </div>

    {/* Feature 3 */}
    <div className="flex items-center justify-center gap-3 border-r border-white/15 px-4 py-4">
      <span className="text-lg text-[#d8c49b]">
        ☆
      </span>

      <p className="text-[9px] text-gray-300">
        Timeless Memories
      </p>
    </div>

    {/* Feature 4 */}
    <div className="flex items-center justify-center gap-3 px-4 py-4">
      <span className="text-lg text-[#d8c49b]">
        ◉
      </span>

      <p className="text-[9px] text-gray-300">
        Your Story Matters
      </p>
    </div>

  </div>
</div>
  


</section>
  )
}

export default Home
