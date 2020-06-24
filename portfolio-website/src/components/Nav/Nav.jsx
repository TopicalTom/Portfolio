import React, { useState, useEffect } from 'react';

import "./Nav.scss";

import chevron from "../../assets/icons/chevron.svg";
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
                <a href="/" className="nav__action">
                        <svg
                            className="nav__chevron"
                            viewBox="0 0 11 20" 
                            alt=""
                        >
                            <path d="M1.262,11.714 L10.264,20.713 C10.659,21.107 11.299,21.107 11.695,20.713 C12.09,20.319 12.09,19.679 11.695,19.285 L3.407,11 L11.694,2.715 C12.089,2.321 12.089,1.681 11.694,1.286 C11.299,0.892 10.658,0.892 10.263,1.286 L1.261,10.285 C0.872,10.675 0.872,11.325 1.262,11.714 Z" id="Chevron_Right"></path>
                        </svg>
                        <span
                            className="nav__back">
                            Home
                        </span>
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