import React from 'react';
import "./ContactCard.scss";

import {Link} from "react-router-dom";

const ContactCard = () => {

    return (
        <Link to={"/contact"}>
            <article className="contact-card">
                <div className="contact-card__details">
                    <h2
                        className="contact-card__cta">
                        Like what you see?
                    </h2>
                    <a 
                        className="contact-card__link"
                        href="/contact">
                        Let's Chat
                    </a>
                </div>
                <div className="project-card__preview">
                    <img
                        className="project-card__image"
                        src={""}
                    />
                </div>
            </article>
        </Link>
    );
};

export default ContactCard;