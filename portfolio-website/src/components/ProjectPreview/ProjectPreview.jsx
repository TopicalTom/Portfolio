import React from 'react';
import "./ProjectPreview.scss";

import overlay from "../../assets/layers/iPhoneOverlay.svg";
import bumble from "../../assets/videos/BumbleModes.mp4";

const ProjectPreview = () => {

    return (
        <article className="preview">
            <div className="preview__container preview__container--video">
                <img 
                    className="preview__overlay" 
                    src={overlay}/>
                <video
                    id=""
                    className="preview__video"
                    src={bumble}
                    autoPlay
                />
            </div>
            <div className="preview__container preview__container--content">
                <h3 className="preview__caption">Bumble, uses swipeable cards for switching modes to allow users to focus in on how they want to connect with others.</h3>
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
                        <div className="preview__scrubber"/>
                    </li>
                    <li className="preview__selection">
                        <h5 className="preview__title">Investment</h5>
                        <div className="preview__scrubber"/>
                    </li>
                </ul>
            </div>
        </article>
    );
};

export default ProjectPreview;