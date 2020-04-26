import React from 'react';
import "./ProjectPreview.scss";

import overlay from "../../assets/layers/iPhoneOverlay.svg";

const ProjectPreview = (props) => {

    const {image, video, caption} = props

    return (
        <article className="preview">
            <div className="preview__container preview__container--video">
                <img 
                    className="preview__overlay" 
                    src={overlay}
                />
                <img 
                    className="preview__image" 
                    src={image}
                />
                <video
                    id=""
                    className="preview__video"
                    src={video}
                    autoPlay
                />
            </div>
            <div className="preview__container preview__container--content">
                <h3 
                    className="preview__caption">
                    {caption}
                </h3>
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
                            <div className="preview__scrubber preview__scrubber--alt"/>
                        </div>
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