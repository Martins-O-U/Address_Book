import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
      <nav>
        <div>
          <NavLink to="/">Enter-5-Book</NavLink>
        </div>
        <div>
          <NavLink to="/about" className="Navlinks">Contact List</NavLink>
          <NavLink to="/addcontact" className="Navlinks">Add Contact</NavLink>
          <NavLink to="/project" className="Navlinks">Sign-In</NavLink>
          <NavLink to="/contact" className="Navlinks">Sign-Up</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
