import React from 'react';
import "./DegreeCard.scss";

import {Link} from "react-router-dom";

const DegreeCard = (props) => {

    const { project, type, preview, link } = props

    return (
        <Link to={`/project/${link}`}>
            <article className={`degree-card degree-card--${link}`}>

            </article>
        </Link>
    );
};

export default DegreeCard;