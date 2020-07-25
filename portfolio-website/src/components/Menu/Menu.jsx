import React, { useState } from 'react';
import ReactModal from 'react-modal';
import "./Menu.scss";

import resume from "../../assets/files/ThomasGriffithsResume.pdf";

ReactModal.setAppElement('*')

function Menu() {

    const [menuIsOpen, setIsOpen] = useState(false);
    const [workIsOpen, setWorkOpen] = useState(false);
    const [personalIsOpen, setPersonalOpen] = useState(false);
    const [iconIsActive, setActive] = useState(false);

    function toggleMenu() {

        if (menuIsOpen !== true) {
            openMenu()
        }
        else {
            closeMenu()
        }
    }

    function toggleWorkDropdown() {

        if (workIsOpen !== true) {
            setWorkOpen(true)
            setPersonalOpen(false)
        }
        else {
            setWorkOpen(false)
        }
    }

    function togglePersonalDropdown() {

        if (personalIsOpen !== true) {
            setPersonalOpen(true)
            setWorkOpen(false)
        }
        else {
            setPersonalOpen(false)
        }
    }

    function openMenu() {
        setIsOpen(true);
        setActive(true);
        document.documentElement.style.overflow = 'hidden';
        document.body.scroll = "no";
    };
   
    function closeMenu(){
        setIsOpen(false);
        setActive(false);
        document.documentElement.style.overflow = 'scroll';
        document.body.scroll = "yes";
    };

    const toggleIcon = iconIsActive ? "active" : "inactive";

    return (
        <>
            <div 
                className={`hamburger ${toggleIcon}`}
                onClick={toggleMenu}>
                <div className={`hamburger__top ${toggleIcon}`}/>
                <div className={`hamburger__bottom ${toggleIcon}`}/>
            </div>
            <ReactModal
                isOpen={menuIsOpen}
                contentLabel="onRequestClose Example"
                onRequestClose={closeMenu}
                className="Menu"
                overlayClassName="OverlayNew"
                shouldCloseOnOverlayClick={true}
            >
                <nav className="menu">
                    <ul className="menu__list">
                        <li className="menu__expand"
                            onClick={toggleWorkDropdown}>
                            <span 
                                className="menu__link"
                                href="/">
                                Work Projects
                            </span>
                            <svg className={`menu__drop menu__drop${workIsOpen ? "--active" : "--inactive"}`} viewBox="0 0 24 24">
                                <path d="M21.5265 8.77171C22.1578 8.13764 22.1578 7.10962 21.5265 6.47555C20.8951 5.84148 19.8714 5.84148 19.24 6.47555L11.9999 13.7465L4.75996 6.47573C4.12858 5.84166 3.10492 5.84166 2.47354 6.47573C1.84215 7.10979 1.84215 8.13782 2.47354 8.77188L10.8332 17.1671C10.8408 17.1751 10.8486 17.183 10.8565 17.1909C11.0636 17.399 11.313 17.5388 11.577 17.6103C11.5834 17.6121 11.5899 17.6138 11.5964 17.6154C12.132 17.7536 12.7242 17.6122 13.1435 17.1911C13.1539 17.1807 13.1641 17.1702 13.1742 17.1596L21.5265 8.77171Z"></path>
                            </svg>
                        </li>
                        {workIsOpen && // Only displays dropdown when isOpen = true
                            <ul className="menu__dropdown">
                                <li><a
                                    className="menu__sublink"
                                    href="/project/cucoh">
                                    CUCOH
                                </a></li>
                            </ul>
                        }
                        <li className="menu__expand"
                            onClick={togglePersonalDropdown}>
                            <span 
                                className="menu__link"
                                href="/">
                                Personal Projects
                            </span>
                            <svg className={`menu__drop menu__drop${personalIsOpen ? "--active" : "--inactive"}`} viewBox="0 0 24 24">
                                <path d="M21.5265 8.77171C22.1578 8.13764 22.1578 7.10962 21.5265 6.47555C20.8951 5.84148 19.8714 5.84148 19.24 6.47555L11.9999 13.7465L4.75996 6.47573C4.12858 5.84166 3.10492 5.84166 2.47354 6.47573C1.84215 7.10979 1.84215 8.13782 2.47354 8.77188L10.8332 17.1671C10.8408 17.1751 10.8486 17.183 10.8565 17.1909C11.0636 17.399 11.313 17.5388 11.577 17.6103C11.5834 17.6121 11.5899 17.6138 11.5964 17.6154C12.132 17.7536 12.7242 17.6122 13.1435 17.1911C13.1539 17.1807 13.1641 17.1702 13.1742 17.1596L21.5265 8.77171Z"></path>
                            </svg>
                        </li>
                        {personalIsOpen && // Only displays dropdown when isOpen = true
                            <ul className="menu__dropdown">
                                <li><a
                                    className="menu__sublink"
                                    href="/project/rally">
                                    Rally
                                </a></li>
                                <li><a
                                    className="menu__sublink"
                                    href="/project/touch-base">
                                    TouchBase
                                </a></li>
                                <li><a
                                    className="menu__sublink"
                                    href="/project/homediate">
                                    Homediate
                                </a></li>
                            </ul>
                        }
                        <li>
                            <a 
                                className="menu__link"
                                href={resume} 
                                download="ThomasGriffithsResume" 
                                aria-label="Digital Product Designer Resume Download Link"
                                onClick={closeMenu}>
                                Resume
                            </a>
                        </li>
                        <li>
                            <a 
                                className="menu__link"
                                href="/about"
                                onClick={closeMenu}>
                                About
                            </a>
                        </li>
                    </ul>
                    <div className="menu__contact">
                    <a 
                        className="menu__link menu__link--contact"
                        href="/contact"
                        onClick={closeMenu}>
                        Let's Chat
                    </a>
                </div>
                </nav>
            </ReactModal>
        </>
        );
}

export default Menu;