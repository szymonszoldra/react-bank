import React from 'react';

const CurrencyBalance = props => {
   return (
      <p className='balance__single-currency'>
         Your balance in {props.currencyName} is:{' '}
         <span className='balance__span'>{props.currencyNumber}</span>
      </p>
   );
};

export default CurrencyBalance;
