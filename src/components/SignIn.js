import React from 'react';
import logo from '../assets/images/logo512.png';
import { Link } from 'react-router-dom';
import {
   changeStateOfTheLogin,
   changeStateOfThePassword
} from '../redux/signIn/signIn.actions';
import { changeIsLoggedStatus } from '../redux/login/login.actions';
import { connect } from 'react-redux';

const SignIn = ({
   changeStateOfTheLogin,
   changeStateOfThePassword,
   currentStateOfLogin,
   currentStateOfPassword,
   changeIsLoggedStatus,
   correctLogin,
   correctPassword
}) => {
   const changeStatus = () => {
      if (
         currentStateOfLogin === correctLogin &&
         currentStateOfPassword === correctPassword
      ) {
         changeIsLoggedStatus();
      }
   };
   return (
      <div className='wrapper'>
         <div className='signIn'>
            <Link to='/'>
               <img className='signIn__logo' alt='logo' src={logo} />
            </Link>
            <h1 className='signIn__title'> react - bank </h1>
            <div className='signIn__container'>
               <input
                  onChange={e => changeStateOfTheLogin(e.target.value)}
                  className='signIn__input'
                  type='text'
                  value={currentStateOfLogin}
               />
               <input
                  onChange={e => changeStateOfThePassword(e.target.value)}
                  className='signIn__input'
                  type='password'
                  value={currentStateOfPassword}
               />
               <button className='signIn__btn' onClick={() => changeStatus()}>
                  {' '}
                  Zaloguj{' '}
               </button>
            </div>
         </div>
      </div>
   );
};

const mapDispatchToProps = dispatch => ({
   changeStateOfTheLogin: value => dispatch(changeStateOfTheLogin(value)),
   changeStateOfThePassword: value => dispatch(changeStateOfThePassword(value)),
   changeIsLoggedStatus: () => dispatch(changeIsLoggedStatus())
});

const MapStateToProps = state => ({
   correctLogin: state.login.correctLogin,
   correctPassword: state.login.correctPassword,
   currentStateOfLogin: state.formValues.login,
   currentStateOfPassword: state.formValues.password
});

export default connect(MapStateToProps, mapDispatchToProps)(SignIn);
