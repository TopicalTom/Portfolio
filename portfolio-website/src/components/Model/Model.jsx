import React from 'react';
import "./Model.scss";

const Model = () => {

    return (
        <article className="model">
            <div className="model__container model__container--top">
                <div className="model__section model__section--trigger">
                    <span className="model__header">Trigger</span>
                    <div className="model__sub-section">
                        <div className="model__trigger model__trigger--external">
                            <h5 className="model__sub-title">External</h5>
                            <span className="model__idea">Push Notification</span>
                            <span className="model__idea">Direct Message</span>
                        </div>
                        <div className="model__trigger model__trigger--internal">
                            <h5 className="model__sub-title">Internal</h5>
                            <span className="model__idea">FOMO</span>
                            <span className="model__idea">Boredom</span>
                        </div>
                    </div>
                </div>
                <div className="model__section model__section--action">
                    <span className="model__header">Action</span>
                    <div className="model__ideas">
                        <span className="model__idea">Opens App</span>
                        <span className="model__idea">Starts "Rallying"</span>
                    </div>
                </div>
            </div>
            <div className="model__container model__container--bottom">
                <div className="model__section model__section--investment">
                    <span className="model__header">Investment</span>
                    <div className="model__ideas">
                        <span className="model__idea">Schedules Future Plans</span>
                        <span className="model__idea">Saves Places</span>
                        <span className="model__idea">Friends List Grows</span>
                    </div>
                </div>
                <div className="model__section model__section--reward">
                    <span className="model__header">Reward</span>
                    <div className="model__ideas">
                        <span className="model__idea">Boredom Gone</span>
                        <span className="model__idea">Connects with Friends</span>
                        <span className="model__idea">Finds Places to Go</span>
                    </div>
                </div>
            </div>
        </article>
    )
};

export default Model;