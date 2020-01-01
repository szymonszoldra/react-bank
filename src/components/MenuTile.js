import React from 'react';
import { Link } from 'react-router-dom';

const MenuTile = props => {
   return (
      <Link to={props.path}>
         <li className='menu__li'>
            <i className={props.icon}></i>
            <p>{props.description}</p>
         </li>
      </Link>
   );
};

export default MenuTile;
