import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/navbar.scss';

function NavBar(props) {
  console.log(props)
  
  return (
    <nav className="navbar"> 
      {/* <div>
        <Logo />
        <Header />
      </div>    */}
      <div>
        <p>BY COMPANY SIZE</p>
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
      {/* <NavLink
        className="navbar__link"
        to="/cart"
      >
        <h3 className="nav-cart">Cart <span>0</span></h3>
      </NavLink> */}
    </nav>
  );
}

export default NavBar;