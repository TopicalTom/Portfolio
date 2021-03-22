import React, {useState} from 'react';
import "./ProjectPreview.scss";

import App from "../App/App";
import pause from "../../assets/icons/pause.svg";
import play from "../../assets/icons/play.svg";

const ProjectPreview = (props) => {

    const {type, video, caption} = props
    const [ isPlaying, setisPlaying ] = useState(true);

    function playVideo() {
        let player = document.getElementById(`${video}`);
        player.play();
        setisPlaying(true);
    }
   
    function pauseVideo(){
        let player = document.getElementById(`${video}`);
        player.pause();
        setisPlaying(false);
    }

    return (
        <article className="preview">
            <div className="preview__container preview__container--video">
                <App 
                    video={video}
                />
                <button
                    className="preview__toggle"
                    onClick={isPlaying ? pauseVideo : playVideo}
                >
                    <img
                        className="preview__player"
                        src={isPlaying ? pause : play}
                        alt=""
                    />
                </button>
            </div>
            <div className="preview__container preview__container--content">
                <h4 
                    className="preview__type">
                    {type}
                </h4>
                <h3 
                    className="preview__caption">
                    {caption}
                </h3>
            </div>
        </article>
    );
};

export default ProjectPreview;