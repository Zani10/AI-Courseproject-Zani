import React from 'react'
import { Button } from '../button'
import { Link } from 'react-router-dom'

function HomeHero() {
  return (
    <div className='relative flex flex-col items-center justify-center h-screen bg-cover bg-center' style={{ backgroundImage: "url('/background-image.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center text-center">
        <h1 className='font-extrabold text-[50px] text-white drop-shadow-lg'>
           <span className='text-[#ffb01e]'>Your Dream Vacation, Powered by AI:</span> Custom <br /> Itineraries in Seconds
        </h1>
        <p className='text-xl text-white mt-4 mb-8 drop-shadow-md'>
            Let AI craft your perfect journey, blending your passions with seamless planning, all within your budget.
        </p>
        <Link to={'/create-trip'}>
            <Button className='bg-gradient-to-r from-orange-400 to-green-400 hover:from-green-400 hover:to-orange-400 text-white py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105'>Get Started</Button>
        </Link>
      </div>
    </div>
  )
}

export default HomeHero
