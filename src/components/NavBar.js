import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/navbar.scss';

function NavBar(props) {
  console.log(props)
  
  return (
    <div className="nav-outside">
      <nav className="navbar"> 
        <div className="navbar-company-size">
          <p>BY COMPANY SIZE:</p>
        </div>
        <NavLink
          exact
          activeClassName="navbar__link--active"
          className="navbar__link"
          to="/small"
        >
          <p>SMALL</p>
        </NavLink>
        <NavLink
          activeClassName="navbar__link--active"
          className="navbar__link"
          to="/medium"
        >
          <p>MEDIUM</p>
        </NavLink>
        <NavLink
          activeClassName="navbar__link--active"
          className="navbar__link"
          to="/large"
        >
          <p>LARGE</p>
        </NavLink>

      </nav>
    </div>
  );
}

export default NavBar;