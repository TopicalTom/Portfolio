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
                <h3 
                    className="preview__caption">
                    {caption}
                </h3>
                <h4 
                    className="preview__type">
                    {type}
                </h4>
            </div>
        </article>
    );
};

export default ProjectPreview;

/*
                <ul className="preview__list">
                    <li className="preview__selection">
                        <h5 className="preview__title">Trigger</h5>
                        <div className="preview__scrubber" />
                    </li>
                    <li className="preview__selection">
                        <h5 className="preview__title">Action</h5>
                        <div className="preview__scrubber"/>
                    </li>
                    <li className="preview__selection">
                        <h5 className="preview__title">Reward</h5>
                        <div className="preview__multiple">
                            <div className="preview__scrubber preview__scrubber--alt"/>
                            <div className="preview__scrubber preview__scrubber--alt"/>
                        </div>
                    </li>
                    <li className="preview__selection">
                        <h5 className="preview__title">Investment</h5>
                        <div className="preview__scrubber"/>
                    </li>
                </ul>

*/