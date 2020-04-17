import React, {Component} from 'react';
import ReactModal from 'react-modal';
import "./Header.scss";

import Switch from "../Switch/Switch";
import projectsData from "../../data/projectsData";

ReactModal.setAppElement('*');

class Header extends Component {
    constructor(props){
        super(props)        
        this.state = {
            isOpen: false,
            projects: projectsData
        }
    }
    /*
    toggleDropdown = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    }
    */

    openDropdown = () => {
        this.setState({isOpen: true})
    }

    closeDropdown = () => {
        this.setState({isOpen: false})
        /*
        setTimeout(() => {
            this.setState({isOpen: false});
        }, 1000);
        */
    }

    render() {

        const { isOpen } = this.state;
        const projects = this.state.projects

    return (
        <>
        <header className={`header`}>
            <div className="header__container">
                <div className="header__section header__section--logo">
                    <a href="/">
                        <h3
                            className={`header__logo`}
                            onMouseEnter={ () => this.closeDropdown() }>
                            TopicalTom
                        </h3>
                    </a>
                </div>
                <nav className="header__section header__section--nav">
                    <ul className="header__links">
                        <li><p
                            className={`header__dropdown`}
                            onMouseEnter={ () => this.openDropdown() }>
                            Projects
                        </p></li>
                        <span 
                            className="header__spacing" 
                            onMouseEnter={ () => this.closeDropdown() }>
                            <li><a
                                className={`header__link`}
                                href="/skills">
                                Skills
                            </a></li>
                            <li><a
                                className={`header__link`}
                                href="/about">
                                About
                            </a></li>
                            <li><a
                                className={`header__link`}
                                href="/contact">
                                Contact
                            </a></li>
                        </span>
                    </ul>
                </nav>
            </div>
        </header>
        {isOpen && // Only displays dropdown when isOpen = true
            <div 
                className={`dropdown dropdown${isOpen ? "--active" : "--inactive"}`}
                onMouseLeave={ () => this.closeDropdown() }>
                <div 
                    className="dropdown__container">
                    {projects.map(promo => {
                        const {project, icon, link} = promo
                        return (
                            <a 
                                className="dropdown__project"
                                href={`/project/${link}`}>
                                <img 
                                    className="dropdown__icon"
                                    src={icon}
                                />
                                {project}
                            </a>
                        )
                    })}
                </div>
            </div>
        }
        </>
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