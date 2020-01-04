import React from 'react';
import { connect } from 'react-redux';

import {
   changePLNNumber,
   changeUSDNumber,
   changeEURNumber,
   changeGBPNumber,
   changeCHFNumber
} from '../redux/balance/balance.actions';

import {
   changeFirstSelect,
   changeSecondSelect,
   changeHowMuchBuy,
   changeHowMuchSell,
   clearAllChangeCurrency
} from '../redux/currencyChange/currencyChange.actions';

const Currencies = ({
   USD_RATE,
   EUR_RATE,
   GBP_RATE,
   CHF_RATE,
   plnBalance,
   usdBalance,
   eurBalance,
   gbpBalance,
   chfBalance,
   firstValue,
   secondValue,
   howMuchBuy,
   howMuchSell,
   changePLNNumber,
   changeUSDNumber,
   changeEURNumber,
   changeGBPNumber,
   changeCHFNumber,
   changeFirstSelect,
   changeSecondSelect,
   changeHowMuchBuy,
   changeHowMuchSell,
   clearAllChangeCurrency
}) => {
   const currentPlnBalance = plnBalance[0].currencyNumber;
   const currentUsdBalance = usdBalance[0].currencyNumber;
   const currentEurBalance = eurBalance[0].currencyNumber;
   const currentGbpBalance = gbpBalance[0].currencyNumber;
   const currentChfBalance = chfBalance[0].currencyNumber;

   const buyCurrencyPrice = {
      USD: (USD_RATE * 0.97).toFixed(4),
      EUR: (EUR_RATE * 0.97).toFixed(4),
      GBP: (GBP_RATE * 0.98).toFixed(4),
      CHF: (CHF_RATE * 0.96).toFixed(4)
   };

   const sellCurrencyPrice = {
      USD: (USD_RATE * 1.04).toFixed(4),
      EUR: (EUR_RATE * 1.06).toFixed(4),
      GBP: (GBP_RATE * 1.07).toFixed(4),
      CHF: (CHF_RATE * 1.05).toFixed(4)
   };

   const sellCurrency = () => {
      let howMuchPLN;
      switch (firstValue) {
         case 'USD':
            if (howMuchSell > currentUsdBalance) {
               clearAllChangeCurrency();
               return alert('You cannot sell more money that you have!');
            }
            changeUSDNumber(-1 * howMuchSell);

            howMuchPLN = (howMuchSell * buyCurrencyPrice.USD).toFixed(2);
            break;
         case 'EUR':
            if (howMuchSell > currentEurBalance) {
               clearAllChangeCurrency();
               return alert('You cannot sell more money that you have!');
            }
            changeEURNumber(-howMuchSell);

            howMuchPLN = (howMuchSell * buyCurrencyPrice.EUR).toFixed(2);
            break;
         case 'GBP':
            if (howMuchSell > currentGbpBalance) {
               clearAllChangeCurrency();
               return alert('You cannot sell more money that you have!');
            }
            changeGBPNumber(-howMuchSell);

            howMuchPLN = (howMuchSell * buyCurrencyPrice.GBP).toFixed(2);
            break;

         case 'CHF':
            if (howMuchSell > currentChfBalance) {
               clearAllChangeCurrency();
               return alert('You cannot sell more money that you have!');
            }
            changeCHFNumber(-howMuchSell);

            howMuchPLN = (howMuchSell * buyCurrencyPrice.CHF).toFixed(2);
            break;
         default:
            return alert('Please choose currency correctly');
      }

      changePLNNumber(howMuchPLN);
      alert('Check your balance!');

      clearAllChangeCurrency();
   };
   const buyCurrency = () => {
      let howMuchPLN;
      switch (secondValue) {
         case 'USD':
            howMuchPLN = (howMuchBuy * sellCurrencyPrice.USD).toFixed(2);

            if (howMuchPLN > currentPlnBalance) {
               clearAllChangeCurrency();
               return alert('You do not have enough PLN to do this');
            }
            changeUSDNumber(howMuchBuy);
            break;
         case 'EUR':
            howMuchPLN = (howMuchBuy * sellCurrencyPrice.EUR).toFixed(2);

            if (howMuchPLN > currentPlnBalance) {
               clearAllChangeCurrency();
               return alert('You do not have enough PLN to do this');
            }
            changeEURNumber(howMuchBuy);
            break;
         case 'GBP':
            howMuchPLN = (howMuchBuy * sellCurrencyPrice.GBP).toFixed(2);

            if (howMuchPLN > currentPlnBalance) {
               clearAllChangeCurrency();
               return alert('You do not have enough PLN to do this');
            }
            changeGBPNumber(howMuchBuy);
            break;
         case 'CHF':
            howMuchPLN = (howMuchBuy * sellCurrencyPrice.CHF).toFixed(2);

            if (howMuchPLN > currentPlnBalance) {
               clearAllChangeCurrency();
               return alert('You do not have enough PLN to do this');
            }
            changeCHFNumber(howMuchBuy);
            break;
         default:
            return;
      }
      changePLNNumber(-howMuchPLN);
      clearAllChangeCurrency();
      alert('Check your balance!');
   };

   return (
      <div className='currencies'>
         <div className='currencies__prices'>
            <h3 className='currencies__title'>Prices</h3>
            <div className='currencies__prices-container'>
               <p>Currency</p>
               <p>Buying</p>
               <p>Selling</p>
            </div>
            <div className='currencies__prices-container'>
               <p>USD</p>
               <p>{buyCurrencyPrice.USD}</p>
               <p>{sellCurrencyPrice.USD}</p>
            </div>
            <div className='currencies__prices-container'>
               <p>EUR</p>
               <p>{buyCurrencyPrice.EUR}</p>
               <p>{sellCurrencyPrice.EUR}</p>
            </div>
            <div className='currencies__prices-container'>
               <p>GBP</p>
               <p>{buyCurrencyPrice.GBP}</p>
               <p>{sellCurrencyPrice.GBP}</p>
            </div>
            <div className='currencies__prices-container'>
               <p>CHF</p>
               <p>{buyCurrencyPrice.CHF}</p>
               <p>{sellCurrencyPrice.CHF}</p>
            </div>
         </div>
         <div className='currencies__form'>
            <label htmlFor='sell-select'>I want to sell: </label>
            <div className='currencies__form-wrapper'>
               <select
                  id='sell-select'
                  onChange={e => changeFirstSelect(e.target.value)}
                  value={firstValue}
               >
                  <option value=''>--</option>
                  <option value='USD'>USD</option>
                  <option value='EUR'>EUR</option>
                  <option value='GBP'>GBP</option>
                  <option value='CHF'>CHF</option>
               </select>
               <input
                  id='how-much-sell'
                  placeholder='How much?'
                  onChange={e => changeHowMuchSell(e.target.value)}
                  value={howMuchSell}
               />
               <button onClick={sellCurrency}>Sell</button>
            </div>
            <label htmlFor='buy-select'>I want to buy: </label>

            <div className='currencies__form-wrapper'>
               <select
                  onChange={e => changeSecondSelect(e.target.value)}
                  id='buy-select'
                  value={secondValue}
               >
                  <option value=''>--</option>
                  <option value='USD'>USD</option>
                  <option value='EUR'>EUR</option>
                  <option value='GBP'>GBP</option>
                  <option value='CHF'>CHF</option>
               </select>
               <input
                  id='how-much-buy'
                  placeholder='How much?'
                  onChange={e => changeHowMuchBuy(e.target.value)}
                  value={howMuchBuy}
               />
               <button onClick={buyCurrency}>Buy</button>
            </div>
         </div>
      </div>
   );
};

const mapStateToProps = state => ({
   USD_RATE: state.rates.USD,
   EUR_RATE: state.rates.EUR,
   GBP_RATE: state.rates.GBP,
   CHF_RATE: state.rates.CHF,
   plnBalance: state.balance.filter(
      currency => currency.currencyName === 'PLN'
   ),
   usdBalance: state.balance.filter(
      currency => currency.currencyName === 'USD'
   ),
   eurBalance: state.balance.filter(
      currency => currency.currencyName === 'EUR'
   ),
   gbpBalance: state.balance.filter(
      currency => currency.currencyName === 'GBP'
   ),
   chfBalance: state.balance.filter(
      currency => currency.currencyName === 'CHF'
   ),
   firstValue: state.currencyChange.firstSelect,
   secondValue: state.currencyChange.secondSelect,
   howMuchBuy: state.currencyChange.howMuchBuy,
   howMuchSell: state.currencyChange.howMuchSell
});

const mapDispatchToProps = dispatch => ({
   changePLNNumber: value => dispatch(changePLNNumber(value)),
   changeUSDNumber: value => dispatch(changeUSDNumber(value)),
   changeEURNumber: value => dispatch(changeEURNumber(value)),
   changeGBPNumber: value => dispatch(changeGBPNumber(value)),
   changeCHFNumber: value => dispatch(changeCHFNumber(value)),
   changeFirstSelect: value => dispatch(changeFirstSelect(value)),
   changeSecondSelect: value => dispatch(changeSecondSelect(value)),
   changeHowMuchBuy: value => dispatch(changeHowMuchBuy(value)),
   changeHowMuchSell: value => dispatch(changeHowMuchSell(value)),
   clearAllChangeCurrency: () => dispatch(clearAllChangeCurrency())
});

export default connect(mapStateToProps, mapDispatchToProps)(Currencies);
