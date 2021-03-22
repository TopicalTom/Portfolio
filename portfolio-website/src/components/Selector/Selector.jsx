import React, {useState} from 'react';
import "./Selector.scss";

import Selected from "../../components/SelectorPreview/SelectorPreview";
import pause from "../../assets/icons/pause.svg";
import play from "../../assets/icons/play.svg";

const Selector = (props) => {

    const {title, videoOne, captionOne, labelOne, videoTwo, captionTwo, labelTwo, color} = props

    const [firstSelected, setFirstSelected] = useState(true);
    const [secondSelected, setSecondSelected] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(videoOne);
    const [isPlaying, setIsPlaying] = useState(true);

    const [mediaType, setMediaType] = useState("video");

    function handleFirstSelection() {

        if (firstSelected !== true) {
            setFirstSelected(true)
            setSecondSelected(false)
            setMediaType("video")
            setCurrentVideo(videoOne)
            setIsPlaying(true);
        }
        else {
            setFirstSelected(true)
        }
    }

    function handleSecondSelection() {

        if (secondSelected !== true) {
            setSecondSelected(true)
            setFirstSelected(false)
            setMediaType("video")
            setCurrentVideo(videoTwo)
            setIsPlaying(true);
        }
        else {
            setSecondSelected(true)
        }
    }

    function playVideo() {
        let player = document.getElementById(`${currentVideo}`);
        player.play();
        setIsPlaying(true);
    }
   
    function pauseVideo(){
        let player = document.getElementById(`${currentVideo}`);
        player.pause();
        setIsPlaying(false);
    }

        return (
            <section
                className="selector">
                <div className="selector__container selector__container--selected">
                    <Selected
                        type={mediaType}
                        video={currentVideo}
                    />
                    <button
                        className="selector__toggle"
                        onClick={isPlaying ? pauseVideo : playVideo}
                        alt="Video playback status"
                    >
                        <img
                            className="selector__player"
                            src={isPlaying ? pause : play}
                            alt={`${isPlaying ? "Pause" : "Play"} button`}
                        />
                    </button>
                </div>
                <div className="selector__container selector__container--content">
                    <span 
                        className="selector__title">
                        {title}
                    </span>
                    {firstSelected &&
                        <h3 
                            className="selector__caption">
                            {captionOne}
                        </h3>
                    }
                    {secondSelected &&
                        <h3 
                            className="selector__caption">
                            {captionTwo}
                        </h3>
                    }
                    <div className="selector__selections">
                        <div 
                            className={`selector__button selector__button--${firstSelected ? "active" : "inactive"}`}
                            onClick={handleFirstSelection}>
                            <span 
                                className="selector__label">
                                {labelOne}
                            </span>
                        </div>
                        <div 
                            className={`selector__button selector__button--${secondSelected ? "active" : "inactive"}`}
                            onClick={handleSecondSelection}>
                            <span 
                                className="selector__label">
                                {labelTwo}
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        )
}

export default Selector;

/*
import React, {useState} from 'react';
import "./Selector.scss";

import Selected from "../../components/SelectorPreview/SelectorPreview";
import pause from "../../assets/icons/pause.svg";
import play from "../../assets/icons/play.svg";

const Selector = (props) => {

    const {title, userVideo, userCaption, guestVideo, guestCaption, color} = props

    const [userSelected, setUserSelected] = useState(true);
    const [guestSelected, setGuestSelected] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(userVideo);
    const [isPlaying, setIsPlaying] = useState(true);

    const [mediaType, setMediaType] = useState("video");

    function handleUserSelection() {

        if (userSelected !== true) {
            setUserSelected(true)
            setGuestSelected(false)
            setMediaType("video")
            setCurrentVideo(userVideo)
            setIsPlaying(true);
        }
        else {
            setUserSelected(true)
        }
    }

    function handleGuestSelection() {

        if (guestSelected !== true) {
            setGuestSelected(true)
            setUserSelected(false)
            setMediaType("video")
            setCurrentVideo(guestVideo)
            setIsPlaying(true);
        }
        else {
            setGuestSelected(true)
        }
    }

    function playVideo() {
        let player = document.getElementById(`${currentVideo}`);
        player.play();
        setIsPlaying(true);
    }
   
    function pauseVideo(){
        let player = document.getElementById(`${currentVideo}`);
        player.pause();
        setIsPlaying(false);
    }

        return (
            <section className="selector">
                <div className="selector__container selector__container--selected">
                    <Selected
                        type={mediaType}
                        video={currentVideo}
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
                <div className="selector__container selector__container--content">
                    <h4 
                        className="selector__title">
                        {title}
                    </h4>
                    {userSelected &&
                        <h3 
                            className="selector__caption">
                            {userCaption}
                        </h3>
                    }
                    {guestSelected &&
                        <h3 
                            className="selector__caption">
                            {guestCaption}
                        </h3>
                    }
                    <div className="selector__selections">
                        <div 
                            className={`selector__button selector__button--${userSelected ? "active" : "inactive"}`}
                            style={{"border-color": color}}
                            onClick={handleUserSelection}>
                            <span 
                                className="selector__label">
                                User
                            </span>
                        </div>
                        <div 
                            className={`selector__button selector__button--${guestSelected ? "active" : "inactive"}`}
                            style={{"border-color": color}}
                            onClick={handleGuestSelection}>
                            <span 
                                className="selector__label">
                                Guest
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        )
}

export default Selector;

*/