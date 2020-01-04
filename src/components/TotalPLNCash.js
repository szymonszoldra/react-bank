import React from 'react';
import { connect } from 'react-redux';
import { getCurrenciesRatio } from '../redux/currenciesRates/currenciesRates.actions';

const getData = (getCurrency, rates) => {
   if (rates.USD !== 0) return;
   getCurrency();
};

const TotalPLNCash = ({ balance, rates, getCurrency }) => {
   // if (rates.USD !== 'WCZYTAJ KURS') return;
   const zlotysNumber = balance.filter(cash => cash.currencyName === 'PLN');
   const dollarsNumber = balance.filter(cash => cash.currencyName === 'USD');
   const eurosNumber = balance.filter(cash => cash.currencyName === 'EUR');
   const poundsNumber = balance.filter(cash => cash.currencyName === 'GBP');
   const franksNumber = balance.filter(cash => cash.currencyName === 'CHF');

   getData(getCurrency, rates);

   const estimatedTotal =
      rates.USD * dollarsNumber[0].currencyNumber +
      rates.EUR * eurosNumber[0].currencyNumber +
      rates.GBP * poundsNumber[0].currencyNumber +
      rates.CHF * franksNumber[0].currencyNumber +
      zlotysNumber[0].currencyNumber;

   console.log(typeof estimatedTotal, estimatedTotal);
   return (
      <>
         <p className='balance__total'>
            Your estimated balance in PLN is:{' '}
            <span className='balance__total-span'>
               {' '}
               {Number(estimatedTotal).toFixed(2)}{' '}
            </span>
            zł{' '}
         </p>{' '}
      </>
   );
};

const mapStateToProps = state => ({
   balance: state.balance,
   rates: state.rates
});

const mapDispatchToProps = dispatch => ({
   getCurrency: () => dispatch(getCurrenciesRatio())
});

export default connect(mapStateToProps, mapDispatchToProps)(TotalPLNCash);
