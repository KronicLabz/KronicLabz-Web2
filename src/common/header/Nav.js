import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <ul className="mainmenu">
            <li><Link to="/startup">Home</Link></li>

            <li><Link to="/service">Services</Link></li>

            <li><Link to="/team">Team</Link></li>

            <li><Link to="/blog-grid-sidebar">Blog</Link></li>

            <li><Link to="/portfolio-three-column">Portfolio</Link></li>

            <li><Link to="/contact">Contact</Link></li>
        </ul>
    )
}
export default Nav;
