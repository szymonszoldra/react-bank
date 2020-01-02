import React from 'react';
import logo from '../assets/images/logo512.png';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

const Header = ({ isLogged }) => {
   return (
      <header className='header'>
         <img className='header__logo' src={logo} alt='logo' />
         <h1 className='header__title'>react-bank</h1>
         <Link to='/signin'>
            <p className='header__login'>{`${
               isLogged ? 'Sign In' : 'Sign Out'
            }`}</p>
         </Link>
      </header>
   );
};

const mapStateToProps = state => ({
   isLogged: state.login.isLogged
});

export default connect(mapStateToProps)(Header);
