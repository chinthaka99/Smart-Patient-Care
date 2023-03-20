import React from 'react'
import Logo from '../Img/Logo.png';
import './Styles/header.css';

export default function Header() {
  return (
    <div>
        <nav className='header'>
            <img src={Logo} alt='Logo' className='header-logo' />
            <ul className='header-list'>
                <li className='header-list-item'>My Profile</li>
                <li className='header-list-item'>Service</li>
                <li className='header-list-item'>About Us</li>
            </ul>
            <button className='signup-button'>Sign Up</button>
        </nav>
    </div>
  )
}
