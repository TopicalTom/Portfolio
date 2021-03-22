import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import uuid from "react-uuid"; 
import "./SideNav.scss";

const SideNav = props => {

    const {handleSetActive, links, header} = props

    const [navHeader, setNavHeader] = useState("Jump to");

    const listenScrollEvent = (event) => {
        if (window.scrollY > 250) {
            setNavHeader(header)
        } else {
            setNavHeader("Jump to")
        } 
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
      
        return () =>
            window.removeEventListener('scroll', listenScrollEvent);
    }, []);

    return (
        <div className="side-nav">
            <h3 
                className="side-nav__header">
                {navHeader}
            </h3>
            <ul className="side-nav__links">
                {links.map(link => {
                    return (
                        <li key={uuid()}>
                            <Link
                                activeClass="active"
                                to={link}
                                spy={true}
                                className="side-nav__link"
                                smooth={true}
                                offset={-240}
                                duration={500}
                                onSetActive={handleSetActive}
                                >
                                {link}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default SideNav;