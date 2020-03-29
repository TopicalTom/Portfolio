import React from 'react';
import "./Footer.scss";

import DynamicCards from "../DynamicCards/DynamicCards";

import linkedin from "../../assets/icons/linkedin.svg";
import github from "../../assets/icons/github.svg";
import instagram from "../../assets/icons/instagram.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div 
                    className="footer__cards">
                    <DynamicCards />
                </div>
                <div className="footer__content">
                    <ul className="footer__social">
                        <li><a 
                            className="footer__link" 
                            href="https://www.linkedin.com/in/thomasvgriffiths/">
                            <img 
                                className="footer__icon" 
                                src={linkedin} 
                            />
                        </a></li>
                        <li><a 
                            className="footer__link" 
                            href="https://github.com/TopicalTom">
                            <img 
                                className="footer__icon" 
                                src={github} 
                            />
                        </a></li>
                        <li><a 
                            className="footer__link" 
                            href="https://www.instagram.com/topicaltom/">
                            <img 
                                className="footer__icon" 
                                src={instagram} 
                            />
                        </a></li>
                    </ul>
                    <p className="footer__copyright">
                        Copyright © 2020 TopicalTom.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;