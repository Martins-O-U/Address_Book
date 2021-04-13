import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
      <nav>
        <div className="navbar-left">
          <NavLink to="/">Enter-5-Book</NavLink>
        </div>
        <div className="navber-right">
          {/* <NavLink to="/about" className="Navlinks">About</NavLink> */}
          <NavLink to="/contactlist" className="Navlinks">Contact List</NavLink>
          <NavLink to="/signin" className="Navlinks">Sign-In</NavLink>
          <NavLink to="/signup" className="Navlinks">Sign-Up</NavLink>
        </div>
      </nav>
  );
};

export default Navbar;
