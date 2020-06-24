import React, {Component} from 'react';
import ReactModal from 'react-modal';
import "./Header.scss";

import Menu from "../Menu/Menu";
import projectsData from "../../data/projectsData";
import Website from "../../components/Website/Website";
import CUCOH from "../../assets/images/CUCOHLander.png";

ReactModal.setAppElement('*');

class Header extends Component {
    constructor(props){
        super(props)        
        this.state = {
            isWorkOpen: false,
            isPesonalOpen: false,
            projects: projectsData
        }
    }

    toggleDropdown = () => {
        this.setState({
            isWorkOpen: false,
            isPersonalOpen: false
        });
    }

    openWorkDropdown = () => {
        this.setState({isWorkOpen: true})
        this.setState({isPersonalOpen: false})
    }

    closeWorkDropdown = () => {
        this.setState({isWorkOpen: false})
    }

    openPersonalDropdown = () => {
        this.setState({isPersonalOpen: true})
        this.setState({isWorkOpen: false})
    }

    closePersonalDropdown = () => {
        this.setState({isPersonalOpen: false})
    }

    render() {

        const { isPersonalOpen, isWorkOpen } = this.state;
        const projects = this.state.projects

    return (
        <>
        <header className={`header`}>
            <div className="header__container">
                <a className="header__section header__section--logo" href="/">
                    <h3
                        className={`header__logo`}
                        onMouseEnter={ () => this.toggleDropdown() }>
                        T
                    </h3>
                </a>
                <nav className="header__section header__section--nav">
                    <ul className="header__links">
                        <li
                            className="header__dropdown"
                            onMouseEnter={ () => this.openWorkDropdown() }>
                            <p>Work</p>
                            <svg className={`header__drop header__drop${isWorkOpen ? "--active" : "--inactive"}`} viewBox="0 0 24 24">
                                <path d="M21.5265 8.77171C22.1578 8.13764 22.1578 7.10962 21.5265 6.47555C20.8951 5.84148 19.8714 5.84148 19.24 6.47555L11.9999 13.7465L4.75996 6.47573C4.12858 5.84166 3.10492 5.84166 2.47354 6.47573C1.84215 7.10979 1.84215 8.13782 2.47354 8.77188L10.8332 17.1671C10.8408 17.1751 10.8486 17.183 10.8565 17.1909C11.0636 17.399 11.313 17.5388 11.577 17.6103C11.5834 17.6121 11.5899 17.6138 11.5964 17.6154C12.132 17.7536 12.7242 17.6122 13.1435 17.1911C13.1539 17.1807 13.1641 17.1702 13.1742 17.1596L21.5265 8.77171Z"></path>
                            </svg>
                        </li>
                        <li
                            className="header__dropdown"
                            onMouseEnter={ () => this.openPersonalDropdown() }>
                            <p>Personal</p>
                            <svg className={`header__drop header__drop${isPersonalOpen ? "--active" : "--inactive"}`} viewBox="0 0 24 24">
                                <path d="M21.5265 8.77171C22.1578 8.13764 22.1578 7.10962 21.5265 6.47555C20.8951 5.84148 19.8714 5.84148 19.24 6.47555L11.9999 13.7465L4.75996 6.47573C4.12858 5.84166 3.10492 5.84166 2.47354 6.47573C1.84215 7.10979 1.84215 8.13782 2.47354 8.77188L10.8332 17.1671C10.8408 17.1751 10.8486 17.183 10.8565 17.1909C11.0636 17.399 11.313 17.5388 11.577 17.6103C11.5834 17.6121 11.5899 17.6138 11.5964 17.6154C12.132 17.7536 12.7242 17.6122 13.1435 17.1911C13.1539 17.1807 13.1641 17.1702 13.1742 17.1596L21.5265 8.77171Z"></path>
                            </svg>
                        </li>
                        <li 
                            className="header__link"
                            onMouseEnter={ () => this.toggleDropdown() }>
                            <a href="/skills">
                                Skills
                            </a>
                        </li>
                        <li 
                            className="header__link"
                            onMouseEnter={ () => this.toggleDropdown() }>
                            <a href="/about">
                            About
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="header__cta">
                    <a
                        className="header__contact"
                        href="/contact">
                            Let's Chat
                    </a>
                </div>
                <Menu />
            </div>
        </header>
        {isWorkOpen && // Only displays dropdown when isPersonalOpen = true
            <>
            <div 
                className={`dropdown dropdown${isWorkOpen ? "--active" : "--inactive"}`}
                onMouseLeave={ () => this.toggleDropdown() }>
                <div 
                    className="dropdown__container">
                        <a 
                            className="dropdown__item dropdown__item--single"
                            href={`/project/cucoh`}>
                                <Website 
                                    project="CUCOH"
                                    preview={CUCOH}
                                />
                                <div className="dropdown__content dropdown__content--details">
                                    <p className="dropdown__project">CUCOH</p>
                                    <p className="dropdown__description">End-to-end fulfillment framework for ensuring our marketing message was representative of our conference experience.</p>
                                </div>
                        </a>
                </div>
            </div>
            <div className="header__overlay"/>
            </>
        }
        {isPersonalOpen && // Only displays dropdown when isPersonalOpen = true
            <>
            <div 
                className={`dropdown dropdown${isPersonalOpen ? "--active" : "--inactive"}`}
                onMouseLeave={ () => this.toggleDropdown() }>
                <div 
                    className="dropdown__container">
                    {projects.map(item => {
                        const {project, promo, link, type} = item
                        return (
                            <a 
                                className="dropdown__item dropdown__item--triple"
                                href={`/project/${link}`}>
                                    <div className="dropdown__content dropdown__content--promo">
                                        <img 
                                            className="dropdown__preview"
                                            src={promo}
                                            alt=""
                                        />
                                    </div>
                                    <div className="dropdown__content dropdown__content--details">
                                        <p className="dropdown__project">{project}</p>
                                        <p className="dropdown__description">{type}</p>
                                    </div>
                            </a>
                        )
                    })}
                </div>
            </div>
            <div className="header__overlay"/>
            </>
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