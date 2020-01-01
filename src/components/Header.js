import React from 'react';
import logo from '../assets/images/logo512.png';

const Header = () => {
   const isLogged = false;
   return (
      <header className='header'>
         <img className='header__logo' src={logo} alt='logo' />
         <h1 className='header__title'>react-bank</h1>
         <p className='header__login'>{`${
            !isLogged ? 'Sign In' : 'Sign Out'
         }`}</p>
      </header>
   );
};

export default Header;
