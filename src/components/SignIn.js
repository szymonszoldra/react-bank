import React from 'react';
import logo from '../assets/images/logo512.png';

const SignIn = () => {
   return (
      <div className='wrapper'>
         <div className='signIn'>
            <img className='signIn__logo' alt='logo' src={logo} />
            <h1 className='signIn__title'> react-bank</h1>
            <div className='signIn__container'>
               <input className='signIn__input' type='text' />
               <input className='signIn__input' type='password' />
               <button className='signIn__btn'>Zaloguj</button>
            </div>
         </div>
      </div>
   );
};

export default SignIn;
