import { combineReducers } from 'redux';

import loginReducer from './login/login.reducer';
import balanceReducer from './balance/balance.reducer';
import currenciesRates from './currenciesRates/currenciesRates.reducer';
import signInReducer from './signIn/signIn.reducer';

export default combineReducers({
   login: loginReducer,
   balance: balanceReducer,
   rates: currenciesRates,
   formValues: signInReducer
});
