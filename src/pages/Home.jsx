import React from 'react'
import { Link } from 'react-router'

function Home() {
  return (
    <div>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/register">Register</Link>
    </div>
  )
}

export default Home
