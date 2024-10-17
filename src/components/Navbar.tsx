import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/bears">Bears</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            <form className="search">
                <input type="search" name="q" placeholder="Search query" />
                <input type="submit" value="Go!" />
            </form>
        </nav>
    );
};

export default Navbar;
