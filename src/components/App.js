import React from 'react';
import '../styles/style.scss';
import SignIn from './SignIn';
import Homepage from './Homepage';
import Mainsite from './Mainsite';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function App({ isLogged }) {
   return (
      <Switch>
         <Route
            exact
            path='/signin'
            render={() =>
               isLogged ? <Redirect to='/bank/balance' /> : <SignIn />
            }
         />
         <Route
            path='/bank'
            render={() =>
               !isLogged ? <Redirect to='/signin' /> : <Mainsite />
            }
         />
         <Route path='/' component={Homepage} />
      </Switch>
   );
}

const mapStateToProps = state => ({
   isLogged: state.login.isLogged
});

export default connect(mapStateToProps)(App);
