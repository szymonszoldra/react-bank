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
   changePLNumber
}) => {
   const currentPlnBalance = plnBalance[0].currencyNumber;

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
            <button>Send</button>
         </div>
         <div className='savings__percent'>
            <p className='savings__percent-info'>
               Current offer{' '}
               <span className='savings__percent-span'>{currentPercent}%</span>
            </p>
            <p className='savings__percent-p'>(Every 5 seconds)</p>
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
            <button className='savings__btn'>Transfer</button>
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
