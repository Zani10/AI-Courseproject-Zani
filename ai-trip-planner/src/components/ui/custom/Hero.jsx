import React from 'react'
import { Button } from '../button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
        <h1
        className='font-extrabold text-[50px] text-center mt-16'
        >
           <span className='text-[#ffb01e]'>Your Dream Vacation, Powered by AI:</span> Custom Itineraries in Seconds</h1>
        <p className='text-xl text-gray-500 text-center'>Let AI craft your perfect journey, blending your passions with seamless planning, all within your budget.</p>

        <Link to={'/create-trip'}>
            <Button>Get Started</Button>
        </Link>
        
    </div>
  )
}

export default Hero