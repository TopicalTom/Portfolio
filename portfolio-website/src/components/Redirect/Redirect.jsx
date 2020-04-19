import React from 'react';
import "./Redirect.scss";

import chevron from "../../assets/icons/chevron.svg";

const Redirect = (props) => {

    const { text, link, cta } = props

    return (
        <article className="redirect">
            <a 
                className="redirect__button"
                href={link}>
                <span
                    className="redirect__cta">
                    {cta}
                </span>
                <img 
                    className="redirect__next"
                    src={chevron}
                />
            </a>
        </article>
    );
};

export default Redirect;