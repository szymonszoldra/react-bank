import React from 'react';

import { connect } from 'react-redux';

import {
   changeNewPasswordForm,
   changeOldPasswordForm,
   changeNewPasswordConfirmForm,
   clearChangePasswordForms
} from '../redux/changePassword/changePassword.actions';

import { changePassword } from '../redux/login/login.actions';

const Settings = ({
   oldPasswordForm,
   newPasswordForm,
   newPasswordFormConfirm,
   oldPassword,
   changeNewPasswordForm,
   changeOldPasswordForm,
   changeNewPasswordConfirmForm,
   clearForms,
   changePassword
}) => {
   return (
      <div className='settings__wrapper'>
         <div className='settings'>
            <p className='settings__paragraph'>Change your password</p>
            <input
               className='settings__input'
               type='password'
               placeholder='old password'
               onChange={e => changeOldPasswordForm(e.target.value)}
               value={oldPasswordForm}
            />
            <input
               className='settings__input'
               type='password'
               placeholder='new password'
               onChange={e => changeNewPasswordForm(e.target.value)}
               value={newPasswordForm}
            />
            <input
               className='settings__input'
               type='password'
               placeholder='confirm password'
               onChange={e => changeNewPasswordConfirmForm(e.target.value)}
               value={newPasswordFormConfirm}
            />
            <button
               className='settings__btn'
               onClick={() => {
                  if (
                     oldPasswordForm === oldPassword &&
                     newPasswordForm === newPasswordFormConfirm
                  ) {
                     changePassword(newPasswordForm);
                     clearForms();
                  }
               }}
            >
               Change!
            </button>
         </div>
      </div>
   );
};

const mapDispatchToProps = dispatch => ({
   clearForms: () => dispatch(clearChangePasswordForms()),
   changePassword: value => dispatch(changePassword(value)),
   changeOldPasswordForm: value => dispatch(changeOldPasswordForm(value)),
   changeNewPasswordConfirmForm: value =>
      dispatch(changeNewPasswordConfirmForm(value)),
   changeNewPasswordForm: value => dispatch(changeNewPasswordForm(value))
});

const mapStateToProps = state => ({
   oldPasswordForm: state.changePasswordFormValues.oldPassword,
   newPasswordForm: state.changePasswordFormValues.newPassword,
   newPasswordFormConfirm: state.changePasswordFormValues.newPasswordConfirm,
   oldPassword: state.login.correctPassword
});
export default connect(mapStateToProps, mapDispatchToProps)(Settings);
