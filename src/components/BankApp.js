import React from 'react';
import Menu from './Menu';
import Application from './Application';

const BankApp = () => {
   return (
      <div className='bankApp__wrapper'>
         <Menu />
         <Application />
      </div>
   );
};

export default BankApp;
