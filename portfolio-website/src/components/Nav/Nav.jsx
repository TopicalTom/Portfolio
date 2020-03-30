import React from 'react';
import {Link} from "react-router-dom";
import "./Nav.scss";

import chevron from "../../assets/icons/chevron.svg";

const Nav = () => {
    return (
        <nav className="nav">
            <div className="nav__container">
                <Link to="/">
                    <div className="nav__action">
                        <img 
                            className="nav__chevron"
                            src={chevron} 
                        />
                        <h3
                            className="nav__back">
                            Back
                        </h3>
                    </div>
                </Link>
                <div className="nav__switch">

                </div>
            </div>
        </nav>
    );
};

export default Nav;