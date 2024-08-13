import React from 'react'
import { Button } from '../button'

function Header() {
  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-5'>
        <img src="/trip.png" alt="Trip logo" className="w-16 h-16"/>
        <div>
            <Button>Sign In</Button>
        </div>
    </div>
  )
}

export default Header