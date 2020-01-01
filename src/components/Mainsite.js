import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BankApp from './BankApp';

const Mainsite = () => {
   return (
      <div className='mainsite__wrapper'>
         <Header />
         <BankApp />
         <Footer />
      </div>
   );
};

export default Mainsite;
