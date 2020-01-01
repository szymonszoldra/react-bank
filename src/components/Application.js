import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Balance from './Balance';
import Savings from './Savings';
import Currencies from './Currencies';
import Settings from './Settings';

const Application = () => {
   return (
      <Switch>
         <Route path='/bank/balance' component={Balance} />
         <Route path='/bank/savings-account' component={Savings} />
         <Route path='/bank/currencies' component={Currencies} />
         <Route path='/bank/settings' component={Settings} />
      </Switch>
   );
};

export default Application;
