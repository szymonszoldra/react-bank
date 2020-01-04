import React from 'react';

const CurrencyBalance = props => {
   return (
      <p className='balance__single-currency'>
         Your balance in {props.currencyName} is:{' '}
         <span className='balance__span'>
            {Number(props.currencyNumber).toFixed(2)}
         </span>
      </p>
   );
};

export default CurrencyBalance;
