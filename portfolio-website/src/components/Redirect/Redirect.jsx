import React from 'react';
import "./Redirect.scss";

const Redirect = (props) => {

    const { text, cta } = props

    return (
        <div className="redirect">
            <p 
                className="redirect__text">
                {text}
            </p>
            <a 
                className="redirect__button"
                href="/contact">
                <p
                    className="redirect__cta">
                    {cta}
                </p>
            </a>
        </div>
    );
};

export default Redirect;