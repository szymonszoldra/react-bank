import React from 'react';

const TotalPLNCash = ({ cash }) => {
   const dollarsNumber = cash[1].currencyNumber;
   const eurosNumber = cash[2].currencyNumber;
   const poundsNumber = cash[3].currencyNumber;
   const franksNumber = cash[4].currencyNumber;
   let estimatedValue = 0;
   const total = async () => {
      const currencyRates = await fetch(
         'http://api.nbp.pl/api/exchangerates/tables/a/?format=json'
      );

      const readyRates = await currencyRates.json();
      const arrayOfRates = readyRates[0].rates;

      const dolarRatio = arrayOfRates.filter(
         currency => currency.code === 'USD'
      )[0].mid;

      const euroRatio = arrayOfRates.filter(
         currency => currency.code === 'EUR'
      )[0].mid;

      const poundRatio = arrayOfRates.filter(
         currency => currency.code === 'GBP'
      )[0].mid;

      const frankRatio = arrayOfRates.filter(
         currency => currency.code === 'CHF'
      )[0].mid;

      const estimatedTotal =
         dolarRatio * dollarsNumber +
         euroRatio * eurosNumber +
         poundRatio * poundsNumber +
         frankRatio * franksNumber +
         cash[0].currencyNumber;
      console.log(estimatedTotal);
      estimatedValue = estimatedTotal.toFixed(2);
   };
   total();
   return (
      <p className='balance_total'>
         Your estimated balance in PLN is: {estimatedValue} zł
      </p>
   );
};

export default TotalPLNCash;
