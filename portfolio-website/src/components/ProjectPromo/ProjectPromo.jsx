import React from 'react';
import "./ProjectPromo.scss";

import {Link} from "react-router-dom";

const ProjectPromo = (props) => {

    const { project, description, preview, link, orientation } = props

    if (orientation == "left") {
        return (
            <section className="promo">
                <article className="promo__container promo__container--left">
                    <img 
                        className="promo__preview"
                        src={preview}
                    />
                    <div className="promo__details">
                        <h2 
                            className="promo__project">
                            {project}
                        </h2>
                        <p 
                            className="promo__description">
                            {description}
                        </p>
                        <Link 
                            className="promo__link"
                            to={`/project/${link}`}>
                            <div 
                                className="promo__button">
                                Learn More
                            </div>
                        </Link>
                    </div>
                </article>
            </section>
        );
    } else {
        return (
            <section className="promo">
                <article className="promo__container promo__container--right">
                    <img 
                        className="promo__preview"
                        src={preview}
                    />
                    <div className="promo__details">
                        <h2 
                            className="promo__project">
                            {project}
                        </h2>
                        <p 
                            className="promo__description">
                            {description}
                        </p>
                        <Link to={`/project/${link}`}>
                            <div 
                                className="promo__button">
                                Learn More
                            </div>
                        </Link>
                    </div>
                </article>
            </section>
        );
    }
};

export default ProjectPromo;