import React, {useState} from 'react';
import "./Selector.scss";

import ProjectPromo from "../ProjectPromo/ProjectPromo";
import Redirect from '../Redirect/Redirect';
import projectsData from "../../data/projectsData";

const Selector = () => {

    const projects = projectsData

    const [firstSelected, setFirstSelected] = useState(true);
    const [secondSelected, setSecondSelected] = useState(false);
    const [thirdSelected, setThirdSelected] = useState(false);

    const [currentProject, setCurrentProject] = useState(projectsData[0].project);
    const [currentPreview, setCurrentPreview] = useState(projectsData[0].preview);

    function handleFirstSelection() {

        if (firstSelected !== true) {
            setFirstSelected(true)
            setSecondSelected(false)
            setThirdSelected(false)
            setCurrentProject(projectsData[0].preview)
            setCurrentPreview(projectsData[0].preview)
        }
        else {
            setFirstSelected(true)
        }
    }

    function handleSecondSelection() {

        if (secondSelected !== true) {
            setFirstSelected(false)
            setSecondSelected(true)
            setThirdSelected(false)
            setCurrentProject(projectsData[1].preview)
            setCurrentPreview(projectsData[1].preview)
        }
        else {
            setSecondSelected(true)
        }
    }

    function handleThirdSelection() {

        if (thirdSelected !== true) {
            setFirstSelected(false)
            setSecondSelected(false)
            setThirdSelected(true)
            setCurrentProject(projectsData[2].preview)
            setCurrentPreview(projectsData[2].preview)
        }
        else {
            setThirdSelected(true)
        }
    }

        return (
            <section className="selector">
                <article className="selector__container">
                    <div className="selector__selections">
                    <h4 className="selector__title">My Projects</h4>
                    <div 
                        className={`selector__card selector__card--${firstSelected ? "active" : "inactive"}`}
                        onClick={handleFirstSelection}>
                        <h3 
                            className="selector__project">
                            Rally
                        </h3>
                        {firstSelected &&
                            <div className="selector__expand">
                                <p 
                                    className="selector__description">
                                    Helping people spontaneously connect with their close friends over social moods.
                                </p>
                                <div className="selector__redirect">
                                    <a 
                                        className="selector__button"
                                        href={`project/${projectsData[0].link}`}>
                                        <span
                                            className="selector__cta">
                                            Learn More
                                        </span>
                                        <svg
                                            className="selector__chevron"
                                            viewBox="0 0 11 20" 
                                            alt=""
                                        >
                                            <path d="M1.262,11.714 L10.264,20.713 C10.659,21.107 11.299,21.107 11.695,20.713 C12.09,20.319 12.09,19.679 11.695,19.285 L3.407,11 L11.694,2.715 C12.089,2.321 12.089,1.681 11.694,1.286 C11.299,0.892 10.658,0.892 10.263,1.286 L1.261,10.285 C0.872,10.675 0.872,11.325 1.262,11.714 Z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        }
                    </div>
                    <div 
                        className={`selector__card selector__card--${secondSelected ? "active" : "inactive"}`}
                        onClick={handleSecondSelection}>
                        <h3 
                            className="selector__project">
                            TouchBase
                        </h3>
                        {secondSelected &&
                            <div className="selector__expand">
                                <h4 
                                    className="selector__description">
                                    Helping people foster professional connections by making networking more actionable.
                                </h4>
                                <div className="selector__redirect">
                                    <a 
                                        className="selector__button"
                                        href={`project/${projectsData[1].link}`}>
                                        <span
                                            className="selector__cta">
                                            Learn More
                                        </span>
                                        <svg
                                            className="selector__chevron"
                                            viewBox="0 0 11 20" 
                                            alt=""
                                        >
                                            <path d="M1.262,11.714 L10.264,20.713 C10.659,21.107 11.299,21.107 11.695,20.713 C12.09,20.319 12.09,19.679 11.695,19.285 L3.407,11 L11.694,2.715 C12.089,2.321 12.089,1.681 11.694,1.286 C11.299,0.892 10.658,0.892 10.263,1.286 L1.261,10.285 C0.872,10.675 0.872,11.325 1.262,11.714 Z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        }
                    </div>
                    <div 
                        className={`selector__card selector__card--${thirdSelected ? "active" : "inactive"}`}
                        onClick={handleThirdSelection}>
                        <h3 
                            className="selector__project">
                            Homediate
                        </h3>
                        {thirdSelected &&
                            <div className="selector__expand">
                                <h4 
                                    className="selector__description">
                                    Helping people spontaneously connect with their close friends over social moods.
                                </h4>
                                <div className="selector__redirect">
                                    <a 
                                        className="selector__button"
                                        href={`project/${projectsData[2].link}`}>
                                        <span
                                            className="selector__cta">
                                            Learn More
                                        </span>
                                        <svg
                                            className="selector__chevron"
                                            viewBox="0 0 11 20" 
                                            alt=""
                                        >
                                            <path d="M1.262,11.714 L10.264,20.713 C10.659,21.107 11.299,21.107 11.695,20.713 C12.09,20.319 12.09,19.679 11.695,19.285 L3.407,11 L11.694,2.715 C12.089,2.321 12.089,1.681 11.694,1.286 C11.299,0.892 10.658,0.892 10.263,1.286 L1.261,10.285 C0.872,10.675 0.872,11.325 1.262,11.714 Z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        }
                    </div>
                    </div>
                    <ProjectPromo 
                        project={currentProject}
                        preview={currentPreview}
                    />
                </article>
            </section>
        )
}

export default Selector;