import React from 'react';
import "./HeaderDropdown.scss";

import projectsData from "../../data/projectsData";
import Shoppies from "../../assets/images/ShoppiesPreview.png";
import app from "../../assets/layers/iPhoneOverlay.svg";
import laptop from "../../assets/layers/laptopOverlay.svg";

const HeaderDropdown = (props) => {

    const {design, development} = props

    return (
        <div 
            className="dropdown">
            <div 
                className="dropdown__container">
                {development &&
                    <>
                    <div className="dropdown__details">
                        <h3>Development</h3>
                        <p>Featured projects</p>
                    </div>
                    <div className="dropdown__content">
                        <a 
                            className="dropdown__item dropdown__item--development"
                            href="https://github.com/TopicalTom/Shoppies">
                            <div className="dropdown__promo dropdown__promo--website">
                                <img 
                                    className="dropdown__overlay dropdown__overlay--website" 
                                    src={laptop}
                                    alt=""
                                />
                                <img
                                    id="Shoppies"
                                    className="dropdown__preview dropdown__preview--website"
                                    src={Shoppies} 
                                />
                            </div>
                            <p 
                                className="dropdown__project">
                                Shoppies
                            </p>
                        </a>
                    </div>
                    </>
                }
                {design &&
                    <>
                    <div className="dropdown__details">
                        <h3>Design</h3>
                        <p>Featured projects</p>
                    </div>
                    <div className="dropdown__content">
                        {projectsData.slice(0, 3).map(item => {
                            const {project, promo, link} = item
                            return (
                                <a 
                                    className="dropdown__item dropdown__item--design"
                                    href={`/project/${link}`}>
                                    <div 
                                        className="dropdown__promo dropdown__promo--app">
                                        <img 
                                            className="dropdown__overlay dropdown__overlay--app"
                                            src={app}
                                            alt=""
                                        />
                                        <img 
                                            className="dropdown__preview dropdown__preview--app"
                                            src={promo}
                                            alt=""
                                        />
                                    </div>
                                    <p 
                                        className="dropdown__project">
                                        {project}
                                    </p>
                                </a>
                            )
                        })}
                    </div>
                    </>
                }
            </div>
        </div>
    )
}

export default HeaderDropdown;