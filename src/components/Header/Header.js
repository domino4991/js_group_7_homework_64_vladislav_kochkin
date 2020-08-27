import React from 'react';
import './Header.css';
import Navigation from "./Navigation/Navigation";
import {GiAnarchy} from "react-icons/gi";

const Header = () => {
    return (
        <header className="Header">
            <div className="container">
                <div className="Header-inner">
                    <span className="Header__logo"><GiAnarchy /> My blog</span>
                    <Navigation />
                </div>
            </div>
        </header>
    );
};

export default Header;