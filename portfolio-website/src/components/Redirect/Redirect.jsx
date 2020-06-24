import React from 'react';
import "./Redirect.scss";

import chevron from "../../assets/icons/chevron.svg";

const Redirect = (props) => {

    const { link, cta } = props

    return (
        <article className="redirect">
            <a 
                className="redirect__button"
                href={link}>
                <span
                    className="redirect__cta">
                    {cta}
                </span>
                <svg
                    className="redirect__chevron"
                    viewBox="0 0 11 20" 
                    alt=""
                >
                    <path d="M1.262,11.714 L10.264,20.713 C10.659,21.107 11.299,21.107 11.695,20.713 C12.09,20.319 12.09,19.679 11.695,19.285 L3.407,11 L11.694,2.715 C12.089,2.321 12.089,1.681 11.694,1.286 C11.299,0.892 10.658,0.892 10.263,1.286 L1.261,10.285 C0.872,10.675 0.872,11.325 1.262,11.714 Z" id="Chevron_Right"></path>
                </svg>
            </a>
        </article>
    );
};

export default Redirect;