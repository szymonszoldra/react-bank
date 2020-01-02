import React from 'react';
import { connect } from 'react-redux';
import { getCurrenciesRatio } from '../redux/currenciesRates/currenciesRates.actions';

const TotalPLNCash = ({ balance, rates, getCurrency }) => {
   const zlotysNumber = balance.filter(cash => cash.currencyName === 'PLN')
      .currencyNumber;
   const dollarsNumber = balance.filter(cash => cash.currencyName === 'USD')
      .currencyNumber;
   const eurosNumber = balance.filter(cash => cash.currencyName === 'EUR')
      .currencyNumber;
   const poundsNumber = balance.filter(cash => cash.currencyName === 'GBP')
      .currencyNumber;
   const franksNumber = balance.filter(cash => cash.currencyName === 'CHF')
      .currencyNumber;

   getCurrency();

   const estimatedTotal =
      rates.USD * dollarsNumber +
      rates.EUR * eurosNumber +
      rates.GBP * poundsNumber +
      rates.CHF * franksNumber +
      zlotysNumber;

   return (
      <>
         <p className='balance__total'>
            Your estimated balance in PLN is:{' '}
            <span className='balance__total-span'>{estimatedTotal}</span>zł
         </p>
         <button className='balance__btn'>Oblicz</button>
      </>
   );
};

const mapStateToProps = state => ({
   balance: state.balance,
   rates: state.rates
});

const mapDispatchToProps = dispatch => ({
   getCurrency: () => dispatch(getCurrenciesRatio)
});

export default connect(mapStateToProps, mapDispatchToProps)(TotalPLNCash);
