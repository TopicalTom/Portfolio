import React, { useState, useEffect } from 'react';
import "./HeaderActions.scss";

import Switch from "../Switch/Switch";
import back from "../../assets/icons/back-arrow.svg";

function HeaderActions() {

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
        <nav className={`actions ${hasShadow}`}>
            <div className="actions__container">
                <a href="/" className="actions__button">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24"
                        className="actions__chevron">
                        <g>
                            <rect width="24" height="24" opacity="0" transform="rotate(90 12 12)" />
                            <path d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .64-.23 1 1 0 0 0 .13-1.41L7.14 13H19a1 1 0 0 0 0-2z"/>
                        </g>
                    </svg>
                    <span
                        className="actions__back">
                        Home
                    </span>
                </a>
                <Switch />
            </div>
        </nav>
    );
};

export default HeaderActions;


/*

                        <span
                            className="actions__back">
                            Home
                        </span>
                        <svg
                            className="actions__chevron"
                            viewBox="0 0 11 20" 
                            alt=""
                        >
                            <path d="M1.262,11.714 L10.264,20.713 C10.659,21.107 11.299,21.107 11.695,20.713 C12.09,20.319 12.09,19.679 11.695,19.285 L3.407,11 L11.694,2.715 C12.089,2.321 12.089,1.681 11.694,1.286 C11.299,0.892 10.658,0.892 10.263,1.286 L1.261,10.285 C0.872,10.675 0.872,11.325 1.262,11.714 Z" id="Chevron_Right"></path>
                        </svg>

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