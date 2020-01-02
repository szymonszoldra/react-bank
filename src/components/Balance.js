import React from 'react';
import CurrencyBalance from './CurrencyBalance';
import TotalPLNCash from './TotalPLNCash';

import { connect } from 'react-redux';

const Balance = ({ cash }) => {
   return (
      <div className='balance'>
         <h2 className='balance__title'>Your balance: </h2>
         <div className='balance__container'>
            {cash.map((state, index) => (
               <CurrencyBalance {...state} key={index} />
            ))}
         </div>
         <TotalPLNCash cash={cash} />
      </div>
   );
};
const mapStateToProps = state => ({ cash: state.balance });

export default connect(mapStateToProps)(Balance);
