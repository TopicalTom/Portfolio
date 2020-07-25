import React, {useState} from 'react';
import "./ProjectPromo.scss";

import pause from "../../assets/icons/pause.svg";
import play from "../../assets/icons/play.svg";

import App from "../App/App";

const ProjectPromo = (props) => {

    const { project, description, preview, link, orientation, code } = props
    const [ isPlaying, setisPlaying ] = useState(true);

    function playVideo() {
        let player = document.getElementById(`${project}`);
        player.play();
        setisPlaying(true);
    }
   
    function pauseVideo(){
        let player = document.getElementById(`${project}`);
        player.pause();
        setisPlaying(false);
    }

    return (
        <section className="promo">
            <article className={`promo__container promo__container--${orientation}`}>
                <div className={`promo__app promo__app--${orientation}`}>
                    <App 
                        project={project}
                        preview={preview}
                    />
                    <button
                        className="promo__toggle"
                        onClick={isPlaying ? pauseVideo : playVideo}
                    >
                        <img
                            className="promo__player"
                            src={isPlaying ? pause : play}
                            alt=""
                        />
                    </button>
                </div>
                <div className="promo__details">
                    <h2 className="promo__project">
                        {project}
                    </h2>
                    <p className="promo__description">
                        {description}
                    </p>
                    <div className="promo__redirect">
                        <a 
                            className="promo__button"
                            href={`/project/${link}`}>
                            <span
                                className="promo__cta">
                                Learn More
                            </span>
                            <svg
                                className="promo__chevron"
                                viewBox="0 0 11 20" 
                                alt=""
                            >
                                <path d="M1.262,11.714 L10.264,20.713 C10.659,21.107 11.299,21.107 11.695,20.713 C12.09,20.319 12.09,19.679 11.695,19.285 L3.407,11 L11.694,2.715 C12.089,2.321 12.089,1.681 11.694,1.286 C11.299,0.892 10.658,0.892 10.263,1.286 L1.261,10.285 C0.872,10.675 0.872,11.325 1.262,11.714 Z" id="Chevron_Right"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default ProjectPromo;

/*
import React, {useState} from 'react';
import "./ProjectPromo.scss";

import pause from "../../assets/icons/pause.svg";
import play from "../../assets/icons/play.svg";

import App from "../App/App";

const ProjectPromo = (props) => {

    const { project, description, preview, link, orientation, code } = props
    const [ isPlaying, setisPlaying ] = useState(true);

    function playVideo() {
        let player = document.getElementById(`${project}`);
        player.play();
        setisPlaying(true);
    }
   
    function pauseVideo(){
        let player = document.getElementById(`${project}`);
        player.pause();
        setisPlaying(false);
    }

    return (
        <section className="promo">
            <article className={`promo__container promo__container--${orientation}`}>
                <div className={`promo__app promo__app--${orientation}`}>
                    <App 
                        project={project}
                        preview={preview}
                    />
                    <button
                        className="promo__toggle"
                        onClick={isPlaying ? pauseVideo : playVideo}
                    >
                        <img
                            className="promo__player"
                            src={isPlaying ? pause : play}
                            alt=""
                        />
                    </button>
                </div>
            </article>
        </section>
    );
};

export default ProjectPromo;
*/