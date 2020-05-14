import React from 'react';
import "./ProjectPreview.scss";

import App from "../App/App";

const ProjectPreview = (props) => {

    const {type, video, caption} = props

    return (
        <article className="preview">
            <div className="preview__container preview__container--video">
                <App 
                    video={video}
                />
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
            </div>
        </article>
    );
};

export default ProjectPreview;