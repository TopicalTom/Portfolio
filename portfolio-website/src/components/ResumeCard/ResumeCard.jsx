import React from 'react';
import "./ResumeCard.scss";

import resume from "../../assets/files/ThomasGriffithsResume.pdf";
import resumePreview from "../../assets/images/Resume.png";

const ResumeCard = () => {

    return (
        <a href={resume} download="ThomasGriffithsResume" aria-label="Digital Product Designer Resume Download Link">
            <article className="resume">
                <div className="resume__details">
                    <h2
                        className="resume__cta">
                        Download Resume
                    </h2>
                    <h4 
                        className="resume__download--web">
                        Click to Begin
                    </h4>
                    <h4 
                        className="resume__download--mobile">
                        Tap to Begin
                    </h4>
                </div>
                <div className="resume__preview">
                    <img
                        className="resume__image"
                        src={resumePreview}
                        alt=""
                    />
                </div>
            </article>
        </a>
    );
};

export default ResumeCard;