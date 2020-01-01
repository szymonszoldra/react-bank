import React from 'react';
import '../styles/style.scss';
import SignIn from './SignIn';
import Homepage from './Homepage';
import { Switch, Route } from 'react-router-dom';

function App() {
   return (
      <Switch>
         <Route path='/signin' component={SignIn} />
         <Route path='/' component={Homepage} />
      </Switch>
   );
}

export default App;
