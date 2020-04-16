import React from 'react';
import "./Redirect.scss";

const Redirect = (props) => {

    const { text, link, cta } = props

    return (
        <article className="redirect">
            <div className="redirect__container">
                <p 
                    className="redirect__text">
                    {text}
                </p>
                <a 
                    className="redirect__button"
                    href={link}>
                    <p
                        className="redirect__cta">
                        {cta}
                    </p>
                </a>
            </div>
        </article>
    );
};

export default Redirect;