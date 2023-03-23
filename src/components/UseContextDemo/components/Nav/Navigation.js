import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';

const Navigation = props => {
  return (
    <header className="main-header">
      <nav>
        <ul>
          <li>
            <NavLink to="/use-context">All Products</NavLink>
          </li>
          <li>
            <NavLink to="/use-context/favorites">Favorites</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
