import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";


function MobileNav() {
    const [isSidebarOpen, setisSidebarOpen] = useState(false);

    const handleMenuButton = () => {
        setisSidebarOpen(!isSidebarOpen)
    };
    const autocloseMenu = () => {
        setTimeout(() => {
            setisSidebarOpen(!isSidebarOpen)
        }, 5000)
    }
    return (
        <div className="mobileNav">
            <div className="menu-button" onClick={handleMenuButton}><FontAwesomeIcon icon={faBars} size="2x" /></div>
            <nav className={`nav ${isSidebarOpen ? 'show' : ''}`}>
                <div className="close" onClick={handleMenuButton}><FontAwesomeIcon icon={faTimes} size="1x" /></div>
                <div className="menu-items">
                    <div className="menu-list" onClick={autocloseMenu}><NavLink to="/" id="mobile-anch">Enter-5</NavLink></div>
                    <div className="menu-list" onClick={autocloseMenu}><NavLink to="/contactlist" id="mobile-anch">Contact List</NavLink></div>
                    <div className="menu-list" onClick={autocloseMenu}><NavLink to="/signin" id="mobile-anch">Sign In</NavLink></div>
                    <div className="menu-list" onClick={autocloseMenu}><NavLink to="/signup" id="mobile-anch">Sign Up</NavLink></div>
                </div>
            </nav>
        </div>

    )
}

export default MobileNav;
