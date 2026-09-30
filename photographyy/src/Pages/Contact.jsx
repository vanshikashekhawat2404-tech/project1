import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

import ContactImg from '../assets/contact.webp'
import Image2 from '../assets/image2.webp'
import Image5 from '../assets/image5.webp'
import emailjs from '@emailjs/browser'



const Contact = () => {

  const [name, setName]= useState('')
const [email, setEmail]= useState('')
const [message, setMessage]= useState('')
const [subject, setSubject]= useState('')

const handleSubmit = (e) =>{
  e.preventDefault()

  console.log(name);
  console.log(email);
  console.log(message);
  console.log(subject);

  const serviceId ="service_b1rv1jp"
  const templateId ="template_z696rfp"
  const publicKey = "KJm6ux0NdasgjjDwc"

  const templateParams ={
    name: name,
    email: email,
    subject: subject,
    message:message,
  }

  emailjs.send(serviceId, templateId, templateParams, publicKey)
  .then((response) =>{
    alert('meassage set successfully')
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
  })
  .catch((error)=>{
    console.error('Error', error);
    
  })
  
}
  return (
    <section className="bg-[#f7f3eb] text-[#202020] py-4 px-4">


      {/* ================= HERO ================= */}

      <div
        className="relative min-h-130 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ContactImg})` }}
      >

        
        <div className="absolute inset-0 bg-black/50"></div>


        {/* Hero Content */}

        <div className="relative z-10 mx-auto flex min-h-130 max-w-7xl items-center px-8 md:px-16">

          <div className="max-w-2xl pt-12">

            <p className="text-[9px] tracking-[0.45em] text-white uppercase">
              Get In Touch
            </p>


            <h1 className="mt-4 font-serif text-5xl leading-[1.05] text-white md:text-6xl">
              Let's Create
              <br />
              Something Beautiful
            </h1>


            <p className="mt-2 font-script text-5xl italic leading-none text-[#e8c9a5] md:text-6xl">
              Together
            </p>


            <p className="mt-7 max-w-md text-sm leading-6 text-gray-200">
              Have a project in mind or just want to say hello?
              <br />
              I'd love to hear from you. Feel free to reach out
              <br />
              — I'll get back to you as soon as possible.
            </p>


            <NavLink
              to="#message"
              className="mt-7 inline-block bg-[#f1e4d2] px-7 py-3 text-[9px] tracking-[0.25em] text-black uppercase transition duration-300 hover:bg-white"
            >
              Send A Message&nbsp; →
            </NavLink>

          </div>

        </div>


  

        <div className="absolute bottom-40 right-8 z-10 hidden md:block">

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



      {/* ================= CONTACT INFORMATION ================= */}

      <div className="bg-[#f8f5ef] px-8 py-12 md:px-16">

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center md:grid-cols-5">


            {/* Heading */}

            <div className="md:pr-8">

              <p className="font-script text-4xl italic text-gray-700">
                Contact
              </p>

              <h2 className="mt-1 font-serif text-3xl md:text-4xl">
                Information
              </h2>

              <div className="mt-5 h-px w-10 bg-[#b68b62]"></div>

            </div>



            {/* Phone */}

            <div className="border-t border-gray-200 px-5 py-7 text-center md:border-l md:border-t-0">

              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#eadbc9] text-xl">
                ☎
              </div>

              <h3 className="mt-3 font-serif text-xl">
                Phone
              </h3>

              <p className="mt-3 text-xs leading-6 text-gray-600">
                +91 8888888888
                <br />
                +91 5555555555
              </p>

              <p className="mt-1 text-[9px] text-gray-500">
                (Mon - Sat, 10 AM - 7 PM)
              </p>

            </div>



            {/* Email */}

            <div className="border-t border-gray-200 px-5 py-7 text-center md:border-l md:border-t-0">

              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#eadbc9] text-xl">
                ✉
              </div>

              <h3 className="mt-3 font-serif text-xl">
                Email
              </h3>

              <p className="mt-3 text-xs leading-6 text-gray-600">
                photography@gmail.com
                <br />
                hello@photography.in
              </p>

              <p className="mt-1 text-[9px] text-gray-500">
                (We reply within 24 hours)
              </p>

            </div>



            {/* Location */}

            <div className="border-t border-gray-200 px-5 py-7 text-center md:border-l md:border-t-0">

              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#eadbc9] text-xl">
                ♧
              </div>

              <h3 className="mt-3 font-serif text-xl">
                Location
              </h3>

              <p className="mt-3 text-xs leading-6 text-gray-600">
                Jaipur, Rajasthan
              </p>

              <p className="mt-1 text-[9px] text-gray-500">
                (Available for travel
                <br />
                across India)
              </p>

            </div>



            {/* Follow */}

            <div className="border-t border-gray-200 px-5 py-7 text-center md:border-l md:border-t-0">

              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#eadbc9] text-xl">
                📷
              </div>

              <h3 className="mt-3 font-serif text-xl">
                Follow Us
              </h3>

              <p className="mt-3 text-xs text-gray-600">
                @tphotography
              </p>

              <p className="mt-1 text-[9px] text-gray-500">
                Let's stay connected!
              </p>

              <p className="mt-1 text-sm text-[#b68b62]">
                ♡
              </p>

            </div>

          </div>

        </div>

      </div>



      {/* ================= MESSAGE SECTION ================= */}

      <div
        id="message"
        className="bg-[#f4eee5] px-8 py-14 md:px-16"
      >

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">


          {/* ================= FORM ================= */}

          <div>

            <p className="text-[9px] tracking-[0.4em] text-gray-600 uppercase">
              Drop Us A Message
            </p>

            <h2 className="mt-3 font-serif text-3xl md:text-4xl">
              Send Us a Message
            </h2>

            <p className="mt-2 max-w-md text-xs leading-5 text-gray-600">
              Tell us about your vision, event, or any questions
              you have. We're here to help!
            </p>


            <form className="mt-7 "onSubmit={handleSubmit}>


              {/* Name + Email */}

              <div className="grid gap-4 md:grid-cols-2">

                <input
                  type="text"
                  placeholder="Your Name *"
                  className="h-11 w-full rounded border border-gray-300 bg-white/70 px-3 text-xs outline-none transition duration-300 focus:border-[#b68b62]"
                  value={name} onChange={(e)=> setName (e.target.value)}
                />

                <input
                  type="email"
                  placeholder="Your Email *"
                  className="h-11 w-full rounded border border-gray-300 bg-white/70 px-3 text-xs outline-none transition duration-300 focus:border-[#b68b62]"
                  value={email} onChange={(e)=> setEmail (e.target.value)}
                />

              </div>


              {/* Subject */}

              <select
                className="mt-4 h-11 w-full rounded border border-gray-300 bg-white/70 px-3 text-xs text-gray-500 outline-none transition duration-300 focus:border-[#b68b62]"
                value={subject} onChange={(e)=> setSubject (e.target.value)}
              >

                <option>
                  Subject *
                </option>

                <option>
                  Wedding Photography
                </option>

                <option>
                  Pre-Wedding Shoot
                </option>

                <option>
                  Birthday Shoot
                </option>

                <option>
                  Event Photography
                </option>

                <option>
                  Other
                </option>

              </select>


              {/* Message */}

              <textarea
                placeholder="Your Message *&#10;Write your message here..."
                className="mt-4 h-32 w-full resize-none rounded border border-gray-300 bg-white/70 px-3 py-3 text-xs outline-none transition duration-300 focus:border-[#b68b62]"
                value={message} onChange={(e)=> setMessage (e.target.value)}
              ></textarea>



              <div className="mt-4 flex items-center justify-between gap-5">

                <button
                  type="submit"
                  className="border-2 border-[#222] bg-[#222] px-8 py-3 text-[9px] tracking-[0.25em] text-white uppercase transition duration-300 hover:bg-transparent hover:text-black"
                >
                  Send Message&nbsp; →
                </button>


                <p className="hidden rotate-[-5deg] font-script text-xl leading-5 text-gray-600 sm:block">
                  I can't wait
                  <br />
                  to hear from you! ♡
                </p>

              </div>

            </form>

          </div>



          {/* ================= CARD ================= */}

          <div className="relative overflow-hidden bg-[#e8ddce]">

            {/* top image */}

            <div className="relative h-67.5">

              <img
                src={Image2}
                alt="Photography"
                className="h-full w-full object-cover"
              />


              

              <div className="absolute inset-0 bg-black/10"></div>


         

              <div className="absolute left-1/2 top-2 h-7 w-20 -translate-x-1/2 rotate-[-4deg] bg-[#d9b98f]/80"></div>

            </div>


           

            <div className="absolute right-0 top-0 hidden h-56.25 w-[42%] bg-[#202a24] md:block">

              <div className="flex h-full items-center justify-center">

                <p className="rotate-[-7deg] text-center font-script text-3xl leading-8 text-[#e8c9a5]">
                  Capture
                  <br />
                  Your
                  <br />
                  Story ♡
                </p>

              </div>

            </div>


            {/* Card content */}

            <div className="px-8 py-7">

              <h3 className="font-serif text-2xl">
                Quick Contact
              </h3>

              <p className="mt-2 max-w-md text-xs leading-5 text-gray-600">
                For bookings, inquiries or urgent matters,
                feel free to call or WhatsApp us.
              </p>


              <button
                className="mt-5 rounded bg-[#24362e] px-6 py-3 text-xs text-white transition duration-300 hover:bg-[#17231e]"
              >
                ◉ &nbsp; WhatsApp Us
              </button>

            </div>


         

            <div className="absolute bottom-2 right-5 text-6xl text-[#b7a18a] opacity-60">
              ❧
            </div>

          </div>

        </div>

      </div>



      {/* ================= MAP SECTION ================= */}

      <div className="px-4 py-5 md:px-8">

        <div className="relative mx-auto h-45 max-w-7xl overflow-hidden rounded bg-[#e8e1d6]">

       

          <div className="absolute inset-0 opacity-40">

            <div className="absolute left-0 top-1/2 h-px w-full rotate-[8deg] bg-white"></div>

            <div className="absolute left-0 top-1/3 h-px w-full rotate-[-5deg] bg-white"></div>

            <div className="absolute left-1/4 top-0 h-full w-px rotate-15 bg-white"></div>

            <div className="absolute left-1/2 top-0 h-full w-px rotate-12 bg-white"></div>

            <div className="absolute left-3/4 top-0 h-full w-px rotate-[8deg] bg-white"></div>

            <div className="absolute bottom-5 left-10 h-px w-1/2 rotate-20 bg-[#c8bba8]"></div>

          </div>


         

          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e97b70] text-white shadow-lg">
              ●
            </div>

            <p className="mt-1 font-serif text-sm text-gray-700">
              Jaipur
            </p>

          </div>


          {/* Find Us */}

          <div className="absolute right-8 top-1/2 -translate-y-1/2 md:right-16">

            <p className="rotate-[-5deg] font-script text-3xl leading-7 text-gray-700">
              Find
              <br />
              Us Here
            </p>

            <p className="mt-2 text-center text-xl">
              ↙
            </p>

          </div>

        </div>

      </div>



      {/* ================= BOTTOM ================= */}

      <div
        className="relative bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${Image5})` }}
      >

        <div className="absolute inset-0 bg-black/65"></div>


        <div className="relative z-10 mx-auto flex min-h-70 max-w-7xl items-center justify-between gap-8 px-8 py-10 md:px-auto">


          {/* Left */}

          <div className="flex items-center gap-5">

            <div className="hidden h-12 w-12 items-center justify-center rounded-full border border-[#e8d5b0] text-xl text-[#e8d5b0] md:flex">
              📷
            </div>


            <div>

              <p className="text-[9px] tracking-[0.4em] text-gray-300 uppercase">
                Ready To
              </p>

              <h2 className="mt-2 font-serif text-3xl text-white md:text-4xl">
                Capture Your Story?
              </h2>

              <p className="mt-2 text-xs text-gray-300">
                Let's turn your moments into timeless memories.
              </p>

            </div>

          </div>



          <NavLink
            to="/contact"
            className="shrink-0 bg-[#f1e4d2] px-8 py-3 text-[9px] tracking-[0.25em] text-black uppercase transition duration-300 hover:bg-white"
          >
            Get In Touch&nbsp; →
          </NavLink>

        </div>

      </div>


    </section>
  )
}

export default Contact