import React from 'react';
import logo from '../assets/images/logo512.png';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { changeIsLoggedStatus } from '../redux/login/login.actions';

const Header = ({ isLogged, changeIsLoggedStatus }) => {
   console.log(isLogged);
   return (
      <header className='header'>
         <img className='header__logo' src={logo} alt='logo' />
         <h1 className='header__title'>react-bank</h1>
         <Link to={`/${isLogged ? '' : 'signin'}`}>
            <p
               className='header__login'
               onClick={isLogged ? changeIsLoggedStatus : null}
            >{`${isLogged ? 'Sign Out' : 'Sign In'}`}</p>
         </Link>
      </header>
   );
};

const mapStateToProps = state => ({
   isLogged: state.login.isLogged
});

const mapDispatchToProps = dispatch => ({
   changeIsLoggedStatus: () => dispatch(changeIsLoggedStatus())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
