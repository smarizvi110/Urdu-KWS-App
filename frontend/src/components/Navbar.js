// Navbar.js

import React from 'react';
import logo from '../assets/logo.png';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-logo" href="https://www.c-salt.org">
                <img src={logo} alt="Logo" height="50" />
            </a>
            <a className="navbar-brand" href="/">
                CIPL
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/kws">
                            Keyword Spotting
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/speaker-verification">
                            Speaker Verification
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact-us">
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
