import React, { useState } from 'react';
import {Link} from "react-router-dom";
import "./Nav.scss";

import chevron from "../../assets/icons/chevron.svg";

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
            /*
            setTimeout(() => {
                setShouldHideHeader(isScrolledDown && isMinimumScrolled);
            }, TIMEOUT_DELAY);
            */
        });
      
        const shadowStyle = shouldShowShadow ? 'shadow' : '';
        //const hiddenStyle = shouldHideHeader ? 'hidden' : '';

    return (
        <nav className={`nav ${shadowStyle}`}>
            <div className="nav__container">
                <Link to="/">
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
                </Link>
                <div className="nav__switch">

                </div>
            </div>
        </nav>
    );
};

export default Nav;