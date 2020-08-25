import React from 'react';
import './Navigation.css';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="Nav-menu">
            <ul className="Nav-menu__list">
                <li className="Nav-menu__item">
                    <NavLink
                        to="/"
                        exact
                        className="Nav-menu__link"
                        activeClassName="Nav-menu__link_active"
                    >Home</NavLink>
                </li>
                <li className="Nav-menu__item">
                    <NavLink
                        to="/add-post"
                        className="Nav-menu__link"
                        activeClassName="Nav-menu__link_active"
                    >Add post</NavLink>
                </li>
                <li className="Nav-menu__item">
                    <NavLink
                        to="/about"
                        className="Nav-menu__link"
                        activeClassName="Nav-menu__link_active"
                    >About</NavLink>
                </li>
                <li className="Nav-menu__item">
                    <NavLink
                        to="/contacts"
                        className="Nav-menu__link"
                        activeClassName="Nav-menu__link_active"
                    >Contacts</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;