import React from 'react'
import { Button } from '../button'

function Header() {
  return (
    <div className='absolute top-0 left-0 right-0 p-3 shadow-sm flex justify-between items-center px-5 bg-white bg-opacity-50'>
        <img src="/trip.png" alt="Trip logo" className="w-16 h-16"/>
        <div>
            <Button>Sign In</Button>
        </div>
    </div>
  )
}

export default Header
