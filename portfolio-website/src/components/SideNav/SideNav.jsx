import React from 'react';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import "./SideNav.scss";

const SideNav = props => {

    return (
        <div className="side-nav">
            <h3 
                className="side-nav__header">
                {props.header}
            </h3>
            <ul className="side-nav__links">
                {props.links.map(link => {
                    return (
                        <li>
                            <Link
                                activeClass="active"
                                to={link}
                                spy={true}
                                className="side-nav__link"
                                smooth={true}
                                offset={-240}
                                duration={500}>
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