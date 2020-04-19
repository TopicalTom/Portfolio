import React, { useState, useEffect } from 'react';

import "./Nav.scss";

import chevron from "../../assets/icons/chevron.svg";
import Share from "../../components/Share/Share";
import Switch from "../Switch/Switch";


function Nav() {

    const [hasShadow, setShouldShowShadow] = useState("");

    const listenScrollEvent = (event) => {
        if (window.scrollY > 100) {
            setShouldShowShadow("shadow")
        } else {
            setShouldShowShadow("")
        } 
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
      
        return () =>
            window.removeEventListener('scroll', listenScrollEvent);
    }, []);

    return (
        <nav className={`nav ${hasShadow}`}>
            <div className="nav__container">
                <a href="/">
                    <div className="nav__action">
                        <img 
                            className="nav__chevron"
                            src={chevron} 
                        />
                        <span
                            className="nav__back">
                            Back
                        </span>
                    </div>
                </a>
                <Switch />
            </div>
        </nav>
    );
};

export default Nav;


/*

import React, { useState } from 'react';

import "./Nav.scss";

import chevron from "../../assets/icons/chevron.svg";

import Share from "../../components/Share/Share";

import useDocumentScrollThrottled from '../../functions/HeaderTransition/HeaderTransition';


function Nav() {

        //const [shouldHideHeader, setShouldHideHeader] = useState(false);
        const [shouldShowShadow, setShouldShowShadow] = useState(false);
  
        const MINIMUM_SCROLL = 200;
        //const TIMEOUT_DELAY = 400;
      
        useDocumentScrollThrottled(callbackData => {
            const { previousScrollTop, currentScrollTop } = callbackData;
            //const isScrolledDown = previousScrollTop < currentScrollTop;
            const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;
      
            setShouldShowShadow(isMinimumScrolled);
            setTimeout(() => {
                setShouldHideHeader(isScrolledDown && isMinimumScrolled);
            }, TIMEOUT_DELAY);
        });
      
        const shadowStyle = shouldShowShadow ? 'shadow' : '';
        //const hiddenStyle = shouldHideHeader ? 'hidden' : '';

    return (
        <nav className={`nav ${shadowStyle}`}>
            <div className="nav__container">
                <a href="/">
                    <div className="nav__action">
                        <img 
                            className="nav__chevron"
                            src={chevron} 
                        />
                        <p
                            className="nav__back">
                            Back
                        </p>
                    </div>
                </a>
                <Share/>
            </div>
        </nav>
    );
};

export default Nav;

*/