import React, { useState } from 'react'
import Logo from '../Assesst/img/Logo.png';
import '../Assesst/style/header.css';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <nav className='header'>
        <img src={Logo} alt='Logo' className='header-logo' />
        <button className='hamburger' onClick={() => setShowMenu(!showMenu)}>☰</button>
        <ul className={`header-list ${showMenu ? "show-menu" : ""}`}>
          <li className='header-list-item'>My Profile</li>
          <li className='header-list-item'>Service</li>
          <li className='header-list-item'>About Us</li>
        </ul>
        <button className='signup-button'>Sign Up</button>
      </nav>
    </div>
  )
}
