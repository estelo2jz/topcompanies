import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar(props) {
  console.log(props)
  
  return (
    <nav className="navbar"> 
      {/* <div>
        <Logo />
        <Header />
      </div>    */}
      <NavLink
        exact
        activeClassName="navbar__link--active"
        className="navbar__link"
        to="/"
      >
        <p>Home</p>
      </NavLink>
      <NavLink
        exact
        activeClassName="navbar__link--active"
        className="navbar__link"
        to="/smallcon"
      >
        <p>Small</p>
      </NavLink>
      <NavLink
        activeClassName="navbar__link--active"
        className="navbar__link"
        to="/Medium"
      >
        <p>Medium</p>
      </NavLink>
      <NavLink
        activeClassName="navbar__link--active"
        className="navbar__link"
        to="/large"
      >
        <p>Large</p>
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