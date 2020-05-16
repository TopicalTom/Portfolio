import React, { useRef, useState } from 'react';
import ReactModal from 'react-modal';
import "./Menu.scss";

import menuLight from "../../assets/icons/menuLight.svg";
import menuDark from "../../assets/icons/menuDark.svg";
import touchBase from "../../assets/icons/TouchBase.svg";
import rally from "../../assets/icons/Rally.svg";
import homediate from "../../assets/icons/Homediate.svg";
import Switch from "../../components/Switch/Switch";

ReactModal.setAppElement('*')

function Menu() {

    const [menuIsOpen, setIsOpen] = useState(false);
    const [iconIsActive, setActive] = useState(false);

    function toggleMenu() {

        if (menuIsOpen != true) {
            openMenu()
        }
        else {
            closeMenu()
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
                className="Menu"
            >
                <div className="menu">
                    <h4 className="menu__header">Projects</h4>
                    <ul className="menu__list">
                        <li>
                            <a 
                                className="menu__link"
                                href="/project/rally"
                                onClick={closeMenu}>
                                Rally
                            </a>
                        </li>
                        <li>
                            <a 
                                className="menu__link"
                                href="/project/touchbase"
                                onClick={closeMenu}>
                                TouchBase
                            </a>
                        </li>
                        <li>
                            <a 
                                className="menu__link"
                                href="/project/shared-space"
                                onClick={closeMenu}>
                                Homediate
                            </a>
                        </li>
                    </ul>
                    <h4 className="menu__header">Explore</h4>
                    <ul className="menu__list">
                        <li>
                            <a 
                                className="menu__link"
                                href="/skills"
                                onClick={closeMenu}>
                                Skills
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
                        <li>
                            <a 
                                className="menu__link"
                                href="/contact"
                                onClick={closeMenu}>
                                Contact
                            </a>
                        </li>
                    </ul>
                    <Switch />
                </div>
            </ReactModal>
        </>
        );
}

export default Menu;