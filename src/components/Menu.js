import React from 'react';
import MenuTile from './MenuTile';

const Menu = () => {
   const tiles = [
      {
         path: '/bank/balance',
         icon: 'fas fa-money-check-alt',
         description: 'Your balance'
      },
      {
         path: '/bank/savings-account',
         icon: 'fas fa-piggy-bank',
         description: 'Savings account'
      },
      {
         path: '/bank/currencies',
         icon: 'fas fa-euro-sign',
         description: 'Currencies'
      },
      {
         path: '/bank/settings',
         icon: 'fas fa-cog',
         description: 'Settings'
      }
   ];

   return (
      <nav className='menu'>
         <ul className='menu__ul'>
            {tiles.map((tile, index) => (
               <MenuTile key={index} {...tile} />
            ))}
         </ul>
      </nav>
   );
};

export default Menu;
