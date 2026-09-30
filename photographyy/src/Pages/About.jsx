import React from 'react'
import { NavLink } from 'react-router-dom'

import AboutImg from '../assets/about.webp'
import Image1 from '../assets/image1.webp'
import Image2 from '../assets/image2.webp'
import Image33 from '../assets/image33.webp'
import Image4 from '../assets/image4.webp'
import Image5 from '../assets/image5.webp'

const About = () => {
  return (
    <section className="bg-[#f7f3eb] text-[#202020] py-4 px-4">

      {/* ================= HERO ================= */}
      <div
        className="relative h-140 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${AboutImg})` }}
      >

        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/45"></div>

        {/* HERO CONTENT */}
        <div className="relative z-10 mx-auto flex min-h-130 max-w-7xl items-center px-8 md:px-16">

          <div className="max-w-2xl pt-16">

            <p className="text-[9px] tracking-[0.45em] text-white uppercase">
              About Me
            </p>

            <div className="mt-4">
              <h1 className="font-serif text-5xl leading-[1.05] text-white md:text-7xl">
                Behind The Lens,
              </h1>

              <p className="mt-2 font-script text-5xl italic leading-none text-[#e8c9a5] md:text-6xl">
                There's a Story
              </p>
            </div>

            <p className="mt-7 max-w-md text-sm leading-6 text-gray-200">
              I'm not just a photographer, I'm a storyteller —
              capturing emotions, connections and the little
              moments that mean everything.
            </p>

           

          </div>
        </div>

      
        <div className="absolute bottom-32 right-8 z-10 hidden md:block">
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
         <div
          className="absolute -bottom-5 left-0 z-20 h-8 w-full bg-[#f7f3eb]"
          style={{
            clipPath:
              "polygon(0 55%, 4% 25%, 8% 55%, 13% 20%, 18% 50%, 23% 15%, 28% 52%, 34% 20%, 40% 55%, 46% 18%, 52% 52%, 58% 20%, 64% 55%, 70% 15%, 76% 52%, 82% 20%, 88% 55%, 94% 18%, 100% 50%, 100% 100%, 0 100%)",
          }}
        ></div>

      </div>


      {/* ================= ABOUT ME ================= */}
      <div className="bg-[#f8f5ef] px-8 py-16 md:px-16 md:py-20">

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

         
          <div className="relative flex min-h-110 items-center justify-center">

            
            <div className="absolute left-[35%] top-10 h-70 w-57.5 rotate-[8deg] overflow-hidden shadow-lg">
              <img
                src={Image2}
                alt="Photography"
                className="h-full w-full object-cover"
              />
            </div>

          
            <div className="relative z-10 h-85 w-65 rotate-[-5deg] border-8 border-white bg-white p-1 shadow-xl">
              <img
                src={Image1}
                alt="Vanshika Photography"
                className="h-full w-full object-cover"
              />
            </div>

            
            <div className="absolute left-[28%] top-7 z-20 h-8 w-20 rotate-[-8deg] bg-[#d9b98f]/70"></div>

      
            <div className="absolute bottom-14 left-4 text-5xl text-[#a99b87]">
              ❀
            </div>

          
            <p className="absolute bottom-0 left-8 rotate-[-8deg] font-script text-2xl leading-7 text-gray-600">
              Same photographer...
              <br />
              Bigger dreams ♡
            </p>

          </div>


        
          <div>

            <p className="text-[9px] tracking-[0.45em] text-gray-600 uppercase">
              Hello, I'm
            </p>

            <h2 className="mt-3 font-serif text-4xl text-[#171717] md:text-5xl">
              Vanshika Shekhawat
            </h2>

            <div className="mt-4 h-px w-14 bg-[#b68b62]"></div>

            <p className="mt-6 text-sm text-gray-700">
              Photographer
              <span className="mx-3 text-gray-400">|</span>
              
            </p>

            <p className="mt-7 max-w-xl text-sm leading-7 text-gray-600">
              I'm a passionate photographer who finds beauty
              in the little things — a smile, a sunset, a candid moment,
              or the way light falls on something ordinary and
              turns it extraordinary.
            </p>

            <p className="mt-5 max-w-xl text-sm leading-7 text-gray-600">
              Through my lens, I aim to capture real emotions,
              raw moments and timeless memories that you'll
              cherish forever.
            </p>

            
            <p className="mt-6 rotate-[-5deg] font-script text-4xl text-gray-800">
              Vanshika ♡
            </p>

          </div>

        </div>


        {/* ABOUT STATS */}
        <div className="mx-auto mt-14 max-w-7xl border-t border-gray-300 pt-8">

          <div className="grid gap-8 md:grid-cols-4">

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eadbc9] text-xl">
                📷
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Experience
                </p>

                <p className="mt-1 text-sm font-medium">
                  2+ Years
                </p>
              </div>
            </div>


            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eadbc9] text-xl">
                ♧
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Based In
                </p>

                <p className="mt-1 text-sm font-medium">
                  Jaipur, Rajasthan
                </p>
              </div>
            </div>


            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eadbc9] text-xl">
                ♡
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Passionate About
                </p>

                <p className="mt-1 text-sm leading-5 font-medium">
                  People, Nature,
                  <br />
                  Travel, Real Moments
                </p>
              </div>
            </div>


            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eadbc9] text-xl">
                ☆
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Speciality
                </p>

                <p className="mt-1 text-sm leading-5 font-medium">
                  Candid, Natural, Aesthetic
                  <br />
                  Photography
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>


      {/* ================= SKILLS + NUMBERS ================= */}
      <div className="bg-[#f0e9df] px-8 py-14 md:px-16">

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">

          
          <div className="border-r-0 lg:border-r lg:border-gray-400 lg:pr-12">

            <p className="text-[9px] tracking-[0.4em] text-gray-600 uppercase">
              My Skills & Tools
            </p>

            <h2 className="mt-3 font-serif text-3xl md:text-4xl">
              What I Work With
            </h2>

            <p className="mt-4 max-w-md text-sm leading-6 text-gray-600">
              I use the right tools and creative techniques
              to bring your vision to life and deliver
              high-quality, memorable photos.
            </p>

            
            <div className="mt-8 grid grid-cols-2 gap-7 md:grid-cols-4">

              <div className="text-center">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#eadbc9] text-lg">
                  📷
                </div>

                <p className="mt-3 text-[11px] leading-4 text-gray-700">
                  DSLR & Mirrorless
                  <br />
                  Cameras
                </p>
              </div>


              <div className="text-center">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#eadbc9] text-lg">
                  ✧
                </div>

                <p className="mt-3 text-[11px] leading-4 text-gray-700">
                  Photo Editing
                  <br />
                  (LR, PS)
                </p>
              </div>


              <div className="text-center">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#eadbc9] text-lg">
                  ◉
                </div>

                <p className="mt-3 text-[11px] leading-4 text-gray-700">
                  Creative
                  <br />
                  Composition
                </p>
              </div>


              <div className="text-center">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#eadbc9] text-lg">
                  ♧
                </div>

                <p className="mt-3 text-[11px] leading-4 text-gray-700">
                  Natural & Artificial
                  <br />
                  Lighting
                </p>
              </div>

            </div>

          </div>


      
          <div className="relative">

            <p className="text-[9px] tracking-[0.4em] text-gray-600 uppercase">
              By The Numbers
            </p>

            <h2 className="mt-3 font-serif text-3xl md:text-4xl">
              A Little About My Journey
            </h2>

            <div className="mt-4 h-px w-9 bg-[#b68b62]"></div>


        
            <div className="mt-7 grid grid-cols-4">

              <div className="border-r border-gray-300 text-center">
                <p className="font-serif text-2xl font-bold">
                  100+
                </p>

                <p className="mt-1 text-[10px] text-gray-600">
                  Happy Clients
                </p>
              </div>


              <div className="border-r border-gray-300 text-center">
                <p className="font-serif text-2xl font-bold">
                  200+
                </p>

                <p className="mt-1 text-[10px] text-gray-600">
                  Photoshoots
                </p>
              </div>


              <div className="border-r border-gray-300 text-center">
                <p className="font-serif text-2xl font-bold">
                  5+
                </p>

                <p className="mt-1 text-[10px] text-gray-600">
                  Cities Explored
                </p>
              </div>


              <div className="text-center">
                <p className="font-serif text-2xl font-bold">
                  2+
                </p>

                <p className="mt-1 text-[10px] text-gray-600">
                  Years Experience
                </p>
              </div>

            </div>


            
            <div className="mt-10 text-center">

              <p className="font-script text-2xl leading-7 text-gray-700">
                “Every photo is a piece of
                <br />
                my heart.” ♡
              </p>

              <div className="mx-auto mt-3 h-px w-20 rotate-[-5deg] bg-[#b68b62]"></div>

            </div>


      
            <div className="absolute -bottom-8 right-0 hidden text-7xl text-[#c6aa8c] opacity-60 md:block">
              ❧
            </div>

          </div>

        </div>

      </div>


      {/* ================= CTA ================= */}
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Image5})` }}
      >

        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative z-10 mx-auto flex min-h-70 max-w-7xl items-center px-8 py-12 md:px-16">

          <div>

            <p className="text-[9px] tracking-[0.4em] text-gray-300 uppercase">
              Let's Work Together
            </p>

            <h2 className="mt-3 font-serif text-3xl text-white md:text-4xl">
              Ready to Capture Your Story?
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-gray-300">
              Whether it's a wedding, a brand, or a moment worth remembering —
              I'd love to be a part of it.
            </p>

            <NavLink
              to="/contact"
              className="mt-6 inline-block bg-[#f1e4d2] px-7 py-3 text-[9px] tracking-[0.25em] text-black uppercase transition duration-300 hover:bg-white"
            >
              Get In Touch&nbsp; →
            </NavLink>

          </div>

        </div>


  
        <div className="absolute bottom-14 right-8 z-10 hidden md:block">
          <p className="rotate-[-8deg] font-script text-3xl leading-8 text-[#e8c9a5]">
            Same Dreams
            <br />
            Bigger Frames ♡
          </p>
        </div>

      </div>


      {/* ================= BOTTOM================= */}
      <div className="bg-[#111414] px-8 py-5 text-white">

        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">

          <div className="border-r border-white/20 text-center">
            <p className="text-[9px] tracking-[0.2em] uppercase">
              Professional
            </p>
            <p className="mt-1 text-[9px] text-gray-400">
              Quality
            </p>
          </div>

          <div className="border-r border-white/20 text-center">
            <p className="text-[9px] tracking-[0.2em] uppercase">
              Natural
            </p>
            <p className="mt-1 text-[9px] text-gray-400">
              & Candid
            </p>
          </div>

          <div className="border-r border-white/20 text-center">
            <p className="text-[9px] tracking-[0.2em] uppercase">
              Timeless
            </p>
            <p className="mt-1 text-[9px] text-gray-400">
              Memories
            </p>
          </div>

          <div className="text-center">
            <p className="text-[9px] tracking-[0.2em] uppercase">
              Your Story
            </p>
            <p className="mt-1 text-[9px] text-gray-400">
              Matters
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default About
