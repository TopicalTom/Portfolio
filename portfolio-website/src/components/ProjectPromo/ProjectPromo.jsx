import React from 'react';
import "./ProjectPromo.scss";

import {Link} from "react-router-dom";

const ProjectPromo = (props) => {

    const { project, description, preview, link } = props

    return (
        <section className="promo">
            <article className="promo__container">
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
};

export default ProjectPromo;