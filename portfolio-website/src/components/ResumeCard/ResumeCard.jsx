import React from 'react';
import "./ResumeCard.scss";

import resume from "../../assets/files/ThomasGriffithsResume.pdf";

const ResumeCard = (props) => {

    const {color} = props

    return (
        <section className="resume">
            <div className="resume__container">
                <a
                    className="resume__web"
                    href={resume} 
                    download="ThomasGriffithsResume" 
                    aria-label="Digital Product Designer Resume Download Link"> 
                    <article 
                        className="resume__card">
                        <div className="resume__card-section--details">
                            <h2 
                                className="resume__card-header">
                                Let's Work Together
                            </h2>
                            <p 
                                className="resume__card-description">
                                Click to download my resume!
                            </p>
                        </div>
                    </article>
                </a>
                <div
                    className="resume__mobile"> 
                    <article 
                        className="resume__card"
                        style={{background: color}}>
                        <h3 
                            className="resume__card-header">
                            Let's Work Together
                        </h3>
                        <p 
                            className="resume__card-description">
                            Tap to download my resume 
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default ResumeCard;


/*

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

*/