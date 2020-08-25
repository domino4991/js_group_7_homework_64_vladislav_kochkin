import React from 'react';
import './Header.css';
import Navigation from "./Navigation/Navigation";

const Header = () => {
    return (
        <header className="Header">
            <div className="container">
                <div className="Header-inner">
                    <span className="Header__logo">My blog</span>
                    <Navigation />
                </div>
            </div>
        </header>
    );
};

export default Header;