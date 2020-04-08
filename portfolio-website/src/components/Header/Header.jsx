import React, {Component} from 'react';

import "./Header.scss";

import Rally from "../../assets/icons/Rally.svg";
import TouchBase from "../../assets/icons/TouchBase.svg";
import Homediate from "../../assets/icons/Homediate.svg";

class Header extends Component {
    constructor(props){
        super(props)        
        this.state = {
            isOpen: false
        }
    }

    // Clicking on the Kebab Opens and Closes Dropdown
    toggleDropdown = () => {
        if (!this.state.isOpen) {
            
            // Attaches Event Handler While Dropdown is Visible 
            document.addEventListener('click', this.handleOutsideClick, false);
        } else {

            // Removes Event Handler While Dropdown is Hidden
            document.removeEventListener('click', this.handleOutsideClick, false);
        }

        // Toggles isOpen State
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    }

    // Toggles Dropdown once the user hovers outside
    handleOutsideClick = (e) => {
        
        // Prevents Toggle Event for clicks within Dropdown Component
        if (this.node===e.target) {
            return;
        }
        
        // Function Callback to toggle isOpen state
        this.toggleDropdown();
    }

    render() {

        const nodeRef = node => { this.node = node };
        const { isOpen } = this.state;


    return (
        <header className={`header`}>
            <div className="header__container">
                <div className="header__section header__section--logo">
                    <h3
                        className={`header__logo`}>
                        TopicalTom
                    </h3>
                </div>
                <nav className="header__section header__section--nav">
                    <ul className="header__links">
                        <li><p
                            className={`header__dropdown`}
                            //onMouseEnter={ () => this.toggleDropdown() }
                            //onMouseLeave={ () => this.toggleDropdown() }
                            onClick={ () => this.toggleDropdown() }>
                            Projects
                        </p></li>
                        <li><a
                            className={`header__link`}
                            href="/about">
                            About
                        </a></li>
                        <li><a
                            className={`header__link`}
                            href="/skills">
                            Skills
                        </a></li>
                        <li><a
                            className={`header__link`}
                            href="/contact">
                            Contact
                        </a></li>
                    </ul>
                </nav>
            </div>
            {isOpen && // Only displays dropdown when isOpen = true
                <div 
                    ref={node => { this.node = node }}
                    className="dropdown">
                    <div 
                        className="dropdown__container">
                        <a 
                            className="dropdown__project"
                            href="/project/rally">
                            <img 
                                className="dropdown__icon"
                                src={Rally}
                            />
                            Rally
                        </a>
                        <a 
                            className="dropdown__project dropdown__project--locked"
                            href="/project/touch-base">
                            <img 
                                className="dropdown__icon"
                                src={TouchBase}
                            />
                            TouchBase
                        </a>
                        <a 
                            className="dropdown__project dropdown__project--locked"
                            href="/project/shared-space">
                            <img 
                                className="dropdown__icon"
                                src={Homediate}
                            />
                            Homediate
                        </a>
                    </div>
                </div>
            }
        </header>
    );
        }
};

export default Header;


/*

import React, { useState } from 'react';

import useDocumentScrollThrottled from '../../functions/HeaderTransition/HeaderTransition';

import "./Header.scss";

function Header() {

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
    const titleStyle = shouldShowShadow ? 'visible' : '';
    const fontStyle = shouldShowShadow ? 'black' : '';
    //const hiddenStyle = shouldHideHeader ? 'hidden' : '';
  

    return (
        <header className={`header ${shadowStyle}`}>
            <div className="header__container">
                <div className="header__section header__section--logo">
                    <h3
                        className={`header__logo ${titleStyle}`}>
                        TopicalTom
                    </h3>
                </div>
                <nav className="header__section header__section--nav">
                    <ul className="header__links">
                        <li><a
                            className={`header__link ${fontStyle}`}
                            href="/project">
                            Projects
                        </a></li>
                        <li><a
                            className={`header__link ${fontStyle}`}
                            href="/about">
                            About
                        </a></li>
                        <li><a
                            className={`header__link ${fontStyle}`}
                            href="/skills">
                            Skills
                        </a></li>
                        <li><a
                            className={`header__link ${fontStyle}`}
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

*/