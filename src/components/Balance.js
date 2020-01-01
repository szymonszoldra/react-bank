import React from 'react';
import CurrencyBalance from './CurrencyBalance';
import TotalPLNCash from './TotalPLNCash';

const Balance = () => {
   const cash = [
      {
         currencyName: 'PLN',
         currencyNumber: 23632
      },
      {
         currencyName: 'USD',
         currencyNumber: 3450
      },
      {
         currencyName: 'EUR',
         currencyNumber: 7530
      },
      {
         currencyName: 'GBP',
         currencyNumber: 234
      },
      {
         currencyName: 'CHF',
         currencyNumber: 1200
      }
   ];

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

export default Balance;
