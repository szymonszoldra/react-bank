import React from 'react';
import { connect } from 'react-redux';

import {
   clearFormsInSavings,
   changePLNFormInSavings,
   changeTransferFormInSavings,
   changeSavings
} from '../redux/savings/savings.actions';

import { changePLNNumber } from '../redux/balance/balance.actions';
const Savings = ({
   sendPLNValue,
   onSavings,
   transferToPLN,
   currentPercent,
   plnBalance,
   clearFormsInSavings,
   changePLNFormInSavings,
   changeTransferFormInSavings,
   changeSavings,
   changePLNNumber
}) => {
   const currentPlnBalance = plnBalance[0].currencyNumber;

   const transferCurrencyToSavingsAccount = () => {
      if (sendPLNValue === '') return;

      if (sendPLNValue > currentPlnBalance) {
         clearFormsInSavings();
         return alert('You do not have enough PLN');
      }

      console.log(changePLNNumber);
      console.log(sendPLNValue);
      changePLNNumber(-sendPLNValue);
      changeSavings(sendPLNValue);
      clearFormsInSavings();

      alert('Everything went correct');
   };

   const transferCurrencyFromSavingsAccount = () => {
      if (transferToPLN === '') return;

      if (transferToPLN > onSavings) {
         clearFormsInSavings();
         return alert('You do not have enough PLN on your SA');
      }
      changeSavings(-transferToPLN);
      changePLNNumber(transferToPLN);
      clearFormsInSavings();

      alert('Everything went correct');
   };

   const increaseTheMoneyOnTheSavingsAccount = () => {
      if (onSavings === 0) return;

      const howMuch = onSavings * (currentPercent / 100);

      changeSavings(howMuch);
   };

   setTimeout(increaseTheMoneyOnTheSavingsAccount, 3000);

   return (
      <div className='savings'>
         <div className='savings__form'>
            <p className='savings__percent-p'>
               Your PLN{' '}
               <span className='savings__percent-span'>
                  {currentPlnBalance}
               </span>
            </p>
            <input
               type='number'
               placeholder='Send to your SA'
               onChange={e => changePLNFormInSavings(e.target.value)}
               value={sendPLNValue}
            />
            <button onClick={transferCurrencyToSavingsAccount}>Send</button>
         </div>
         <div className='savings__percent'>
            <p className='savings__percent-info'>
               Current offer{' '}
               <span className='savings__percent-span'>{currentPercent}%</span>
            </p>
            <p className='savings__percent-p'>(Every 3 seconds)</p>
         </div>
         <div className='savings__account'>
            <h2 className='savings__account-h2'>
               On Savings Account:{' '}
               <span className='savings__account-span'>{onSavings}</span>
            </h2>
            <input
               type='number'
               placeholder='Transfer money from SA'
               onChange={e => changeTransferFormInSavings(e.target.value)}
               value={transferToPLN}
            />
            <button
               className='savings__btn'
               onClick={transferCurrencyFromSavingsAccount}
            >
               Transfer
            </button>
         </div>
      </div>
   );
};

const mapStateToProps = state => ({
   sendPLNValue: state.savings.sendPLNValue,
   onSavings: state.savings.onSavings,
   transferToPLN: state.savings.transferToPLN,
   currentPercent: state.savings.currentPercent,
   plnBalance: state.balance.filter(currency => currency.currencyName === 'PLN')
});
const mapDispatchToProps = dispatch => ({
   changePLNNumber: value => dispatch(changePLNNumber(value)),
   clearFormsInSavings: () => dispatch(clearFormsInSavings()),
   changePLNFormInSavings: value => dispatch(changePLNFormInSavings(value)),
   changeTransferFormInSavings: value =>
      dispatch(changeTransferFormInSavings(value)),
   changeSavings: value => dispatch(changeSavings(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Savings);
