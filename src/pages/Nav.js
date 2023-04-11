import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
        <div className='links'>
            <Link to='/' className='link'>Home</Link>
            <Link to='/Students'className='link'>Student Data</Link>
            <Link to='/ConatctUs'className='link'>Contact Us</Link>
        </div>
    </div>
  )
}

export default Nav