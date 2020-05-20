import React, {useState} from 'react';
import "./ProjectPromo.scss";

import pause from "../../assets/icons/pause.svg";
import play from "../../assets/icons/play.svg";
import redirect from "../../assets/icons/redirect.svg";

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
                    <div className="promo__actions">
                        <a 
                            className="promo__link"
                            href={`/project/${link}`}>
                            <div 
                                className="promo__button">
                                Learn More
                            </div>
                        </a>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default ProjectPromo;


/*

                        <a
                            className={`promo__link promo__link--secondary ${code}`}
                            href={"https://github.com/TopicalTom/rally-capstone"}>
                            <div
                                className="promo__code">
                                View Code
                            </div>
                            <img
                                className="promo__redirect"
                                src={redirect}
                            />
                        </a>

*/