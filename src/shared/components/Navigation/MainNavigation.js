import React from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import "./MainNavigation.css";

const MainNavigation = () => {
    return (
        <MainHeader>
            <button className="main-navigation__menu-btn">
                <span />
                <span />
                <span />
            </button>
            <h1 className="main-navigation__title">
                <Link to="/">Your Places</Link>
            </h1>
            <nav className="main-navigation__header-nav">
                <ul>
                    <li>
                        <a href="/">Users</a>
                    </li>
                    <li>
                        <a href="/">Share Places</a>
                    </li>
                    <li>
                        <a href="/">Login</a>
                    </li>
                </ul>
            </nav>
        </MainHeader>
    )
    };

    export default MainNavigation;