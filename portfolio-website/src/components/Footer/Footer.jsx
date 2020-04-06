import React from 'react';
import "./Footer.scss";

import DynamicCards from "../DynamicCards/DynamicCards";

import linkedin from "../../assets/icons/linkedin.svg";
import github from "../../assets/icons/github.svg";
import instagram from "../../assets/icons/instagram.svg";
import spotify from "../../assets/icons/spotify.svg";
import steam from "../../assets/icons/steam.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
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
                            href="https://open.spotify.com/user/shamal1ama?si=FT33n2uYRZqhokZ9mB3DIg">
                            <img 
                                className="footer__icon" 
                                src={spotify} 
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
                        <li><a 
                            className="footer__link" 
                            href="https://steamcommunity.com/profiles/76561198069400878/">
                            <img 
                                className="footer__icon" 
                                src={steam} 
                            />
                        </a></li>
                    </ul>
                    <p className="footer__copyright">
                        Copyright © 2020 TopicalTom.
                    </p>
                </div>
        </footer>
    );
};

export default Footer;