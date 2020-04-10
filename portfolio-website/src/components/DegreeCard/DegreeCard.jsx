import React from 'react';
import "./DegreeCard.scss";

const DegreeCard = (props) => {

    const { degree, course } = props

    return (
        <a href={course}>
            <article className="degree">
                    <img
                        className="degree__image"
                        src={degree}
                    />
            </article>
        </a>
    );
};

export default DegreeCard;