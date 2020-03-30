import React from 'react';
import "./ProjectCard.scss";

import {Link} from "react-router-dom";

const ProjectCard = (props) => {

    const { project, type, preview, color, link } = props

    return (
        <Link to={`/project/${link}`}>
            <article
                className="project-card" 
                style={{background: color}}>
                <div className="project-card__details">
                    <h2
                        className="project-card__project">
                        {project}
                    </h2>
                    <h4
                        className="project-card__type">
                        {type}
                    </h4>
                    <a 
                        className="project-card__link">
                        Learn More
                    </a>
                </div>
                <div className="project-card__preview">
                    <img
                        className="project-card__image"
                        src={preview}
                    />
                </div>
            </article>
        </Link>
    );
};

export default ProjectCard;