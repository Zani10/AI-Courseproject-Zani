import React from 'react'
import { Button } from '../button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-cover bg-center' style={{ backgroundImage: "url('/background-image.jpg')" }}>
        <h1 className='font-extrabold text-[50px] text-white text-center drop-shadow-lg mt-20'>
           <span className='text-[#ffb01e]'>Your Dream Vacation, Powered by AI:</span> Custom Itineraries in Seconds</h1>
        <p className='text-xl text-white text-center mt-4 mb-8 drop-shadow-md'>
            Let AI craft your perfect journey, blending your passions with seamless planning, all within your budget.
        </p>
        <Link to={'/create-trip'}>
            <Button className='bg-gradient-to-r from-orange-400 to-green-400 hover:from-green-400 hover:to-orange-400 text-white py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105'>Get Started</Button>
        </Link>
    </div>
  )
}

export default Hero
