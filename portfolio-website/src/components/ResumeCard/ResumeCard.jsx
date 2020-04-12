import React from 'react';
import "./ResumeCard.scss";

import resume from "../../assets/files/ThomasGriffithsResume.pdf";
import resumePreview from "../../assets/images/Resume.png";

const ResumeCard = () => {

    return (
        <a href={resume} download="ThomasGriffithsResume">
            <article className="resume">
                <div className="resume__details">
                    <h2
                        className="resume__cta">
                        Looking for a Resume?
                    </h2>
                    <div 
                        className="resume__download">
                        Click to Download
                    </div>
                </div>
                <div className="resume__preview">
                    <img
                        className="resume__image"
                        src={resumePreview}
                    />
                </div>
            </article>
        </a>
    );
};

export default ResumeCard;