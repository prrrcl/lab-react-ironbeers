import React from 'react';
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="app-nav">
      <Link to="/"><span role="img" aria-label="house">&#127968;</span></Link>
    </nav>
  )
}
