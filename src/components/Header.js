import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div>
        <div className='header'>
      <div className='logo'>
        <img src={logo} alt="Logo" />
        </div>
        <div className='company-title'>
            <h1>Manju Shree Tailors</h1>
        </div> 
        </div>
    </div>
  );
}

export default Header;