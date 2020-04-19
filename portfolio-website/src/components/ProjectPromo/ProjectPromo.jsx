import React, {useState} from 'react';
import "./ProjectPromo.scss";

import pause from "../../assets/icons/pause.svg";
import play from "../../assets/icons/play.svg";
import redirect from "../../assets/icons/redirect.svg";
import overlay from "../../assets/layers/iPhoneOverlay.svg";

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
                    <img 
                        className="promo__overlay" 
                        src={overlay}/>
                    <video
                        id={`${project}`}
                        className="promo__preview"
                        src={preview} 
                        autoPlay
                        loop
                    />
                </div>
                <button
                    className="promo__toggle"
                    onClick={isPlaying ? pauseVideo : playVideo}
                >
                    <img
                        className="promo__player"
                        src={isPlaying ? pause : play}
                    />
                </button>
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
                        <a
                            className={`promo__link ${code}`}
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
                    </div>
                </div>
            </article>
        </section>
    );
};

export default ProjectPromo;