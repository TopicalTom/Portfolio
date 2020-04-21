import React from 'react';
import "./ProjectPreview.scss";

import overlay from "../../assets/layers/iPhoneOverlay.svg";

const ProjectPreview = () => {

    return (
        <article className="preview">
            <div className="preview__container preview__container--video">
                <img 
                    className="preview__overlay" 
                    src={overlay}/>
                <video
                    id={`${project}`}
                    className="preview__video"
                    src={preview} 
                    autoPlay
                />
            </div>
            <div className="preview__container preview__container--content">
                <h3 className="preview__caption">Details on the screen</h3>
                <ul className="preview__list">
                    <li className="preview__selection">
                        <h5 className="preview__title">Trigger</h5>
                        <span className="preview__scrubber"/>
                    </li>
                    <li className="preview__selection">
                        <h5 className="preview__title">Action</h5>
                        <span className="preview__scrubber"/>
                    </li>
                    <li className="preview__selection">
                        <h5 className="preview__title">Reward</h5>
                        <span className="preview__scrubber"/>
                    </li>
                    <li className="preview__selection">
                        <h5 className="preview__title">Investment</h5>
                        <span className="preview__scrubber"/>
                    </li>
                </ul>
            </div>
        </article>
    );
};

export default ProjectPreview;