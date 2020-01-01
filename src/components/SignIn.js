import React from 'react';
import logo from '../assets/images/logo512.png';
import { Link } from 'react-router-dom';

const SignIn = () => {
   return (
      <div className='wrapper'>
         <div className='signIn'>
            <Link to='/'>
               <img className='signIn__logo' alt='logo' src={logo} />
            </Link>
            <h1 className='signIn__title'> react - bank </h1>
            <div className='signIn__container'>
               <input className='signIn__input' type='text' />
               <input className='signIn__input' type='password' />
               <button className='signIn__btn'> Zaloguj </button>
            </div>
         </div>
      </div>
   );
};

export default SignIn;
