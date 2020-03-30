import React, { useState } from 'react';

import useDocumentScrollThrottled from '../../functions/HeaderTransition/HeaderTransition';

import "./Header.scss";

function Header() {

    //const [shouldHideHeader, setShouldHideHeader] = useState(false);
    const [shouldShowShadow, setShouldShowShadow] = useState(false);
  
    const MINIMUM_SCROLL = 759;
    //const TIMEOUT_DELAY = 400;
  
    useDocumentScrollThrottled(callbackData => {
        const { previousScrollTop, currentScrollTop } = callbackData;
        //const isScrolledDown = previousScrollTop < currentScrollTop;
        const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;
  
        setShouldShowShadow(isMinimumScrolled);
        /*
        setTimeout(() => {
            setShouldHideHeader(isScrolledDown && isMinimumScrolled);
        }, TIMEOUT_DELAY);
        */
    });
  
    const shadowStyle = shouldShowShadow ? 'shadow' : '';
    //const hiddenStyle = shouldHideHeader ? 'hidden' : '';
  

    return (
        <header className={`header ${shadowStyle}`}>
            <div className="header__container">
                <div className="header__section header__section--logo">
                    <h2>TopicalTom</h2>
                </div>
                <nav className="header__section header__section--nav">
                    <ul className="header__links">
                        <li><a
                            className="header__link"
                            href="/project">
                            Projects
                        </a></li>
                        <li><a
                            className="header__link"
                            href="/about">
                            About
                        </a></li>
                        <li><a
                            className="header__link"
                            href="/resume">
                            Resume
                        </a></li>
                        <li><a
                            className="header__link"
                            href="/contact">
                            Contact
                        </a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;