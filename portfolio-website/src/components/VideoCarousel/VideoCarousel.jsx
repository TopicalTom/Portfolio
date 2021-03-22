import React, {useState} from 'react';
import "./VideoCarousel.scss";

const VideoCarousel = (props) => {
    const { firstVideo, firstTitle, secondVideo, secondTitle, color } = props

    const [firstSelected, setFirstSelected] = useState(true);
    const [secondSelected, setSecondSelected] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(firstVideo);
    const [currentTitle, setCurrentTitle] = useState(firstTitle);

    function handleFirstSelection() {

        if (firstSelected !== true) {
            setFirstSelected(true)
            setSecondSelected(false)
            setCurrentVideo(firstVideo)
            setCurrentTitle(firstTitle)
        }
        else {
            setFirstSelected(true)
        }
    }

    function handleSecondSelection() {

        if (secondSelected !== true) {
            setSecondSelected(true)
            setFirstSelected(false)
            setCurrentVideo(secondVideo)
            setCurrentTitle(secondTitle)
        }
        else {
            setSecondSelected(true)
        }
    }

        return (
            <section className="videos">
                <iframe 
                    title={currentTitle}
                    className="videos__video"  
                    src={currentVideo}  
                    frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
                <div className="videos__selections">
                    <div 
                        className={`videos__button videos__button--${firstSelected ? "active" : "inactive"}`}
                        //style={{"border-color": color}}
                        onClick={handleFirstSelection}>
                        <span 
                            className="videos__label">
                            {firstTitle}
                        </span>
                    </div>
                    <div 
                        className={`videos__button videos__button--${secondSelected ? "active" : "inactive"}`}
                        //style={{"border-color": color}}
                        onClick={handleSecondSelection}>
                        <span 
                            className="videos__label">
                            {secondTitle}
                        </span>
                    </div>
                </div>
            </section>
        )
}

export default VideoCarousel;