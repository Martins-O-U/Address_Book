import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
      <nav>
        <div className="navbar-left">
          <NavLink to="/">Enter-5-Book</NavLink>
        </div>
        <div className="navber-right">
          <NavLink to="/contactlist" className="Navlinks">Contact List</NavLink>
          <NavLink to="/addcontact" className="Navlinks">Add Contact</NavLink>
          <NavLink to="/project" className="Navlinks">Sign-In</NavLink>
          <NavLink to="/contact" className="Navlinks">Sign-Up</NavLink>
        </div>
      </nav>
  );
};

export default Navbar;
