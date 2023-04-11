import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import Nav from './Nav'

function Home() {
  return (
    <div>
        <Nav/>
        <div>
            <h1>
                Home
            </h1>
        </div>
    </div>
  )
}

export default Home