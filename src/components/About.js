import React from 'react';

const About = () => {
   return (
      <main className='about'>
         <h2 className='about__title'>What we offer: </h2>
         <div className='about__container'>
            <div className='about__tile'>
               <img
                  src='https://i.wpimg.pl/330x192/d.wpimg.pl/1323254280--1161130386/pieniadze.jpg'
                  className='about__img'
                  alt='money'
               />
               <p className='about__text'>
                  Lorem ipsum dolor sit amet, massa a sit rhoncus vel blandit,
                  malesuada sapiente dignissim fusce torquent, elit qui sed et
                  nec, in a nibh interdum ac.
               </p>
            </div>
            <div className='about__tile'>
               <img
                  src='http://prod-upp-image-read.ft.com/3dcdfe5a-61c3-11e8-bdd1-cc0534df682c'
                  className='about__img'
                  alt='money'
               />
               <p className='about__text'>
                  Lorem ipsum dolor sit amet, massa a sit rhoncus vel blandit,
                  malesuada sapiente dignissim fusce torquent, elit qui sed et
                  nec, in a nibh interdum ac.
               </p>
            </div>
         </div>
      </main>
   );
};

export default About;
