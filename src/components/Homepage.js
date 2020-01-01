import React from 'react';

import Header from './Header';
import About from './About';
import Footer from './Footer';

const Homepage = () => {
   return (
      <div className='wrapper'>
         <Header />
         <About />
         <Footer />
      </div>
   );
};

export default Homepage;
