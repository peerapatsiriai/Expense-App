import React from 'react'
import './style/Navbar.css'
import 'boxicons';

function Navbar() {
  return (
    <div className='content'>
      <div className="logo">
        Dairy
      </div>
      <div className="menu">
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
        </ul>
      </div>
      <div className="icon">
        user
       <i class='bx bxs-user'></i>
      </div>
    </div>
  )
}

export default Navbar
